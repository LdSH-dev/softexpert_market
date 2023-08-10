<?php

namespace app\Http;

class Response
{   
    public static function success($data = null)
    {   
        header('Content-Type: application/json');
        header('Access-Control-Allow-Origin: http://localhost:8080');
        echo json_encode([
            'success' => true,
            'data' => $data,
        ]);
        die();
    }
    
    public static function error($message, $code = 400)
    {   
        header('Content-Type: application/json');
        header('Access-Control-Allow-Origin: http://localhost:8080');
        http_response_code($code);
        echo json_encode([
            'success' => false,
            'error' => $message,
        ]);
        die();
    }
}

?>
