<?php

namespace app\Http;

use app\Http\Response;

class Router
{
    private $routes = [];

    public function get($path, $callback)
    {
        $this->routes[$path]['GET'] = $callback;
    }

    public function post($path, $callback)
    {
        $this->routes[$path]['POST'] = $callback;
    }

    public function handleRequest($requestUri, $requestMethod)
    {
        if (isset($this->routes[$requestUri][$requestMethod])) {
            $callback = $this->routes[$requestUri][$requestMethod];
            if (is_callable($callback)) {
                call_user_func($callback, $_POST);
                return;
            } else if (is_array($callback) && count($callback) === 2) {
                [$controllerClass, $method] = $callback;
                $controller = new $controllerClass();
                if (method_exists($controller, $method)) {
                    $controller->$method($_POST);
                    return;
                }
            }
        }
        
        Response::error('Route not found', 404);
    }

}
