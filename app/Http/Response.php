<?php

namespace app\Http;

class Response
{   
    public static function success($data = null)
    {
        header('Content-Type: application/json');
        echo json_encode([
            'success' => true,
            'data' => $data,
        ]);
        die();
    }
    
    public static function error($message)
    {
        header('Content-Type: application/json');
        echo json_encode([
            'success' => false,
            'error' => $message,
        ]);
        die();
    }
}

?>