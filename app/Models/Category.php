<?php

namespace app\Models;

use app\Core\Database\Database;
use app\Services\CategoryService;

class Category
{

    public $uuid;
    public $name;
    public $status;
    public $fee;
    private $database;
    private $categoryService;

    public function __construct($uuid = null)
    {   
        $this->categoryService = new CategoryService();
        $this->database        = new Database();

        if (!empty($uuid)) 
        {
            $this->uuid = $uuid;
            $this->loadDataFromDatabase();
        }
    }

    private function loadDataFromDatabase()
    {   
        $data            = $this->categoryService->getCategoryById($this->uuid);

        if ($data) {
            $this->name   = $data['name'];
            $this->status = $data['status'];
            $this->fee    = $data['fee'];
        }
    }

    public function save()
    {   

        if (empty($this->uuid))
        {
            $this->categoryService->insert($this->name, $this->status, $this->fee);
        }
        else 
        {
            $this->categoryService->update($this->uuid, $this->name, $this->status, $this->fee);
        }
       
    }

    public function delete()
    {   

        $this->categoryService->delete($this->uuid);
       
    }
    

}


?>