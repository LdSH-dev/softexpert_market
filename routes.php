<?php

use app\Http\Router;
use app\Controllers\CategoryController;

$router = new Router();


# ROUTES SECTION #

$router->get('/category', [CategoryController::class, 'get']);
$router->post('/category/create', [CategoryController::class, 'create']);

# END ROUTES SECTION #
$requestUri = $_SERVER['REQUEST_URI'];
$requestMethod = $_SERVER['REQUEST_METHOD'];

$router->handleRequest($requestUri, $requestMethod);


