<?php

namespace app\Services;

use app\Core\Database\Database;

class ProductService
{   

    private $database;

    public function __construct()
    {
        $this->database = new Database();
    }

    public function get()
    {
        $this->database->connect();

        $sql = "SELECT * FROM product";
        $products = $this->database->executeQuery($sql);
        
        $this->database->disconnect();

        if ($products['status'])
        {
            return $products['data'];
        }
        else
        {
            return false;
        }
    }

    public function getProductById($uuid)
    {
        $this->database->connect();

        $sql = "SELECT * FROM product WHERE uuid = ?";
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

    public function insert($name, $status, $category_id, $price, $quantity)
    {
        $this->database->connect();

        $sql = "INSERT INTO product (uuid, name, status, category_id, price, quantity) VALUES (uuid_generate_v4(), ?, ?, ?, ?, ?)";
        $parameters = [$name, $status, $category_id, $price, $quantity];
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

    public function update($uuid, $name, $status, $category_id, $price, $quantity)
    {
        $this->database->connect();
        
        $sql = "UPDATE product SET name = ?, status = ?, category_id = ?, price = ?, quantity = ? WHERE uuid = ?";
        $parameters = [$name, $status, $category_id, $price, $quantity, $uuid];
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
        
        $sql = "DELETE FROM product WHERE uuid = ?";
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
}


?>