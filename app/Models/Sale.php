<?php

namespace app\Models;

use app\Core\Database\Database;
use app\Services\SaleService;

class Sale
{

    public $uuid;
    public $total_value;
    public $total_fee;
    private $database;
    private $saleService;

    public function __construct($uuid = null)
    {   
        $this->saleService = new SaleService();
        $this->database    = new Database();

        if (!empty($uuid)) 
        {
            $this->uuid = $uuid;
            $this->loadDataFromDatabase();
        }
    }

    private function loadDataFromDatabase()
    {   
        $data            = $this->saleService->getSaleById($this->uuid);

        if ($data) {
            $this->total_value = $data['total_value'];
            $this->total_fee   = $data['total_fee'];
        }
    }

    public function save()
    {   

        $id = $this->saleService->insert($this->total_value, $this->total_fee);
        $this->uuid = $id;
    }

}


?>