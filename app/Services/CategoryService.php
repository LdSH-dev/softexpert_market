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

    public function getCategoryById($uuid)
    {
        $this->database->connect();

        $sql = "SELECT * FROM category WHERE uuid = ?";
        $parameters = [$uuid];
        $result = $this->database->executeQuery($sql, $parameters);

        $this->database->disconnect();

        if ($result['status'])
        {   
            return $result['data'][0];
        }
        else
        {
            return false;
        } 
    }

    public function insert($name, $status, $fee)
    {
        $this->database->connect();

        $sql = "INSERT INTO category (uuid, name, status, fee) VALUES (uuid_generate_v4(), ?, ?, ?)";
        $parameters = [$name, $status, $fee];
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

    public function update($uuid, $name, $status, $fee)
    {
        $this->database->connect();
        
        $sql = "UPDATE category SET name = ?, status = ?, fee = ? WHERE uuid = ?";
        $parameters = [$name, $status, $fee, $uuid];
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

    public function delete($uuid)
    {
        $this->database->connect();
        
        $sql = "DELETE FROM category WHERE uuid = ?";
        $parameters = [$uuid];
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

    public function getProducts($uuid)
    {
        $this->database->connect();

        $sql = "SELECT * FROM product WHERE category_id = ?";
        $parameters = [$uuid];
        $result = $this->database->executeQuery($sql, $parameters);

        $this->database->disconnect();

        if ($result['status'])
        {   
            return $result['data'];
        }
        else
        {
            return false;
        } 
    }
}


?>