<?php

namespace app\Models;

use app\Core\Database\Database;
use app\Services\ProductService;
use app\Models\Category;

class Product
{

    public $uuid;
    public $name;
    public $category_id;
    public $status;
    public $category;
    public $price;
    public $quantity;
    private $database;
    private $productService;

    public function __construct($uuid = null)
    {   
        $this->productService  = new ProductService();
        $this->database        = new Database();

        if (!empty($uuid)) 
        {
            $this->uuid = $uuid;
            $this->loadDataFromDatabase();
        }
    }

    private function loadDataFromDatabase()
    {   
        $data            = $this->productService->getProductById($this->uuid);

        if ($data) {
            $this->name        = $data['name'];
            $this->status      = $data['status'];
            $this->category_id = $data['category_id'];
            $this->price       = $data['price'];
            $this->quantity    = $data['quantity'];
            $this->category    = new Category($data['category_id']);
        }
    }

    public function save()
    {   

        if (empty($this->uuid))
        {
            $this->productService->insert($this->name, $this->status, $this->category_id, $this->price, $this->quantity);
        }
        else 
        {
            $this->productService->update($this->uuid, $this->name, $this->status, $this->category_id, $this->price, $this->quantity);
        }
       
    }

    public function delete()
    {   

        $this->productService->delete($this->uuid);
       
    }
    

}


?>