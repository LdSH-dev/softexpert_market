<?php

namespace app\Services;

use app\Core\Database\Database;

class ItemSaleService
{   

    private $database;

    public function __construct()
    {
        $this->database = new Database();
    }

    public function get()
    {
        $this->database->connect();

        $sql = "SELECT * FROM sale_item";
        $items_sale = $this->database->executeQuery($sql);
        
        $this->database->disconnect();

        if ($items_sale['status'])
        {
            return $items_sale['data'];
        }
        else
        {
            return false;
        }
    }

    public function getItemSaleById($uuid)
    {
        $this->database->connect();

        $sql = "SELECT * FROM sale_item WHERE uuid = ?";
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

    public function insert($product_id, $quantity, $value, $fee, $sale_id)
    {
        $this->database->connect();

        $sql = "INSERT INTO sale_item (uuid, product_id, quantity, value, fee, sale_id) VALUES (uuid_generate_v4(), ?, ?, ?, ?, ?)";
        $parameters = [$product_id, $quantity, $value, $fee, $sale_id];
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