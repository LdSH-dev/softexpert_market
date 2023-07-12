<?php

namespace app\Services;

use app\Core\Database\Database;

class SaleService
{   

    private $database;

    public function __construct()
    {
        $this->database = new Database();
    }

    public function get()
    {
        $this->database->connect();

        $sql = "SELECT * FROM sale";
        $sales = $this->database->executeQuery($sql);
        
        $this->database->disconnect();

        if ($sales['status'])
        {
            return $sales['data'];
        }
        else
        {
            return false;
        }
    }

    public function getSaleById($uuid)
    {
        $this->database->connect();

        $sql = "SELECT * FROM sale WHERE uuid = ?";
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

    public function insert($total_value, $total_fee)
    {
        $this->database->connect();

        $sql = "INSERT INTO sale (uuid, total_value, total_fee) VALUES (uuid_generate_v4(), ?, ?) RETURNING uuid";
        $parameters = [$total_value, $total_fee];
        $success = $this->database->executeQuery($sql, $parameters, true);
        $this->database->disconnect();

        if ($success['status'])
        {
            return $success['data'][0]['uuid'];
        }
        else
        {
            return false;
        }
    }

    public function getItemsSale($uuid)
    {
        $this->database->connect();

        $sql = "SELECT * FROM sale_item WHERE sale_id = ?";
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