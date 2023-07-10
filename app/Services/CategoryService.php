<?php

namespace app\Services;

use app\Core\Database\Database;

class CategoryService
{   

    private $database;

    public function __construct()
    {
        $this->database = new Database();
    }

    public function get()
    {
        $this->database->connect();

        $sql = "SELECT * FROM category";
        $categories = $this->database->executeQuery($sql);
        $this->database->disconnect();

        if ($categories['status'])
        {
            return $categories['data'];
        }
        else
        {
            return false;
        }
    }

    public function insert($name, $status)
    {
        $this->database->connect();

        $sql = "INSERT INTO category (uuid, name, status) VALUES (uuid_generate_v4(), ?, ?)";
        $parameters = [$name, $status];
        $success = $this->database->executeQuery($sql, $parameters);
        $this->database->disconnect();

        if ($success['status'])
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}


?>