<?php

namespace app\Models;

use app\Core\Database\Database;

class Category
{

    private $uuid;
    private $name;
    private $status;
    private $database;

    public function __construct($uuid = null)
    {
        $this->database = new Database();
        $this->uuid     = $uuid;
    }

    public function save()
    {   

        if (empty($this->uuid))
        {
            $this->database->connect();

            $sql = "INSERT INTO category (uuid, name, status) VALUES (uuid_generate_v4(), ?, ?)";
            $parameters = [$this->name, $this->status];
            $success = $this->database->executeQuery($sql, $parameters);
            $this->database->disconnect();
    
            if ($success['status'])
            {
                return true;
            }
            else
            {
                return false;
            }0
        }
       
    }
    

}


?>