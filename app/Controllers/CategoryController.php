<?php

namespace app\Controllers;

use app\Services\CategoryService;
use app\Http\Response;

class CategoryController 
{
    public function get() 
    {   
        $categoryService = new CategoryService();
        
        $categories = $categoryService->get();
       
        if ($categories)
        {
            if (count($categories) != 0) 
            {   
                Response::success($categories);
            }
            else
            {
                Response::error('No results founded');
            }
        }
        else
        {
            Response::error('An error ocurred in your request');
        }
    }

    public function create($data)
    {
        
        if (empty($data['name']))
        {
            Response::error('Parameter name cannot be null!');
        }
        
        if (empty($data['status']))
        {
            Response::error('Parameter status cannot be null!');
        }

        $categoryService = new CategoryService();

        $return = $categoryService->insert($data['name'], $data['status']);

        if ($return)
        {
            Response::success('Category created sucessfully');
        }
        else
        {
            Response::error('An error ocurred on creation');
        }
    }

}

?>