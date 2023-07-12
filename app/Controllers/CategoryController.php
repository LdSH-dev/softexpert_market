<?php

namespace app\Controllers;

use app\Services\CategoryService;
use app\Http\Response;
use app\Models\Category;

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
                Response::error('No results found');
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

        $category = new Category();
        $category->name   = $data['name'];
        $category->status = $data['status'];
        $category->fee    = $data['fee'] ?? 0;
        $category->save();

        Response::success('Category created sucessfully');
    }

    public function update($data)
    {   
        if (empty($data['id']))
        {
            Response::error('Parameter id cannot be null!');
        }

        if (empty($data['name']))
        {
            Response::error('Parameter name cannot be null!');
        }
        
        if (empty($data['status']))
        {
            Response::error('Parameter status cannot be null!');
        }

        if (empty($data['fee']))
        {
            Response::error('Parameter fee cannot be null!');
        }

        $category = new Category($data['id']);
        $category->name   = $data['name'];
        $category->status = $data['status'];
        $category->fee    = $data['fee'] ?? $category->fee;
        $category->save();

        Response::success('Category updated sucessfully');
    }

    public function delete($data)
    {
        if (empty($data['id']))
        {
            Response::error('Parameter id cannot be null!');
        }

        $categoryService = new CategoryService();
        $products = $categoryService->getProducts($data['id']);

        if (count($products) > 0)
        {   
            Response::error("There are products linked to this category!");
        }

        $category = new Category($data['id']);
        $category->delete();
        
        Response::success('Category deleted sucessfully');
    }

}

?>