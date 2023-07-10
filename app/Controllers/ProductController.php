<?php

namespace app\Controllers;

class ProductController 
{

    public function index() {
        // abort(500);
        header('Content-Type: application/json');
        echo json_encode(['aa' => 'CHEGOU']);
    }

}

?>