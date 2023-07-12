<?php

namespace app\Controllers;

use app\Services\ProductService;
use app\Http\Response;
use app\Models\Product;

class ProductController 
{
    public function get() 
    {   
        $productService = new ProductService();
        
        $products = $productService->get();
        
        if ($products)
        {
            if (count($products) != 0) 
            {   
                $obj_products = [];

                foreach ($products as $product)
                {
                    $obj_products[] = new Product($product['uuid']);
                }

                Response::success($obj_products);
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

        if (empty($data['category_id']))
        {
            Response::error('Parameter category_id cannot be null!');
        }

        if (empty($data['price']))
        {
            Response::error('Parameter price cannot be null!');
        }

        if (empty($data['quantity']))
        {
            Response::error('Parameter quantity cannot be null!');
        }

        $product = new Product();
        $product->name        = $data['name'];
        $product->status      = $data['status'];
        $product->category_id = $data['category_id'];
        $product->price       = $data['price'];
        $product->quantity    = $data['quantity'];
        $product->save();

        Response::success('Product created sucessfully');
    
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

        if (empty($data['category_id']))
        {
            Response::error('Parameter category_id cannot be null!');
        }

        if (empty($data['price']))
        {
            Response::error('Parameter price cannot be null!');
        }

        if (empty($data['quantity']))
        {
            Response::error('Parameter quantity cannot be null!');
        }

        $product              = new Product($data['id']);
        $product->name        = $data['name'];
        $product->status      = $data['status'];
        $product->category_id = $data['category_id'];
        $product->price       = $data['price'];
        $product->quantity    = $data['quantity'];
        $product->save();

        Response::success('Product updated sucessfully');
    }

    public function delete($data)
    {
        if (empty($data['id']))
        {
            Response::error('Parameter id cannot be null!');
        }

        $product = new Product($data['id']);
        $product->delete();
        
        Response::success('Product deleted sucessfully');
    }

}

?>