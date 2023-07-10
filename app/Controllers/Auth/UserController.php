<?php

namespace app\Controllers\Auth;

class UserController 
{

    public function index() {
        // abort(500);
        header('Content-Type: application/json');
        echo json_encode(['aa' => 'CHEGOU']);
    }

}

?>