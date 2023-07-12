<?php

namespace app\Models;

use app\Core\Database\Database;
use app\Services\ItemSaleService;

class ItemSale
{

    public $uuid;
    public $product_id;
    public $quantity;
    public $value;
    public $fee;
    public $sale_id;
    private $database;
    private $itemSaleService;

    public function __construct($uuid = null)
    {   
        $this->itemSaleService = new ItemSaleService();
        $this->database        = new Database();

        if (!empty($uuid)) 
        {
            $this->uuid = $uuid;
            $this->loadDataFromDatabase();
        }
    }

    private function loadDataFromDatabase()
    {   
        $data            = $this->itemSaleService->getItemSaleById($this->uuid);

        if ($data) {
            $this->product_Id  = $data['product_id'];
            $this->quantity    = $data['quantity'];
            $this->value       = $data['value'];
            $this->fee         = $data['fee'];
            $this->sale_id     = $data['sale_id'];
        }
    }

    public function save()
    {   

        $this->itemSaleService->insert($this->product_id, $this->quantity, $this->value, $this->fee, $this->sale_id);
       
    }

}


?>