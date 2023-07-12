<?php

namespace app\Controllers;

use app\Services\SaleService;
use app\Http\Response;
use app\Models\Product;
use app\Models\ItemSale;
use app\Models\Sale;

class SaleController 
{
    public function get() 
    {   
        $saleService = new SaleService();
        
        $sales         = $saleService->get();

        if ($sales)
        {
            if (count($sales) != 0) 
            {   
                foreach ($sales as $sale)
                {
                    $sale['items'] = $saleService->getItemsSale($sale['uuid']);
                }

                Response::success($sales);
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
        
        if (empty($data['total_value']))
        {
            Response::error('Parameter total_value cannot be null!');
        }
        
        if (empty($data['total_fee']))
        {
            Response::error('Parameter total_fee cannot be null!');
        }

        foreach (json_decode($data['item'], true) as $item)
        {
            if (empty($item['uuid']))
            {
                Response::error('Parameter uuid cannot be null!');
            }

            if (empty($item['quantity_selected']))
            {
                Response::error('Parameter quantity_selected cannot be null!');
            }

            if (empty($item['price']))
            {
                Response::error('Parameter price cannot be null!');
            }

            if (empty($item['category']['fee']))
            {
                Response::error('Parameter fee cannot be null!');
            }
        }

        $sale = new Sale();
        $sale->total_value = $data['total_value'];
        $sale->total_fee   = $data['total_fee'];
        $sale->save();

        foreach (json_decode($data['item'], true) as $item)
        {   

            $item_sale = new ItemSale();
            $item_sale->product_id = $item['uuid'];
            $item_sale->quantity   = $item['quantity_selected'];
            $item_sale->value      = $item['price'];
            $item_sale->fee        = $item['category']['fee'];
            $item_sale->sale_id    = $sale->uuid;
            $item_sale->save();


            $product            = new Product($item['uuid']);
            $product->quantity -= $item_sale->quantity;
            $product->save();
        }  

        Response::success('Sale created sucessfully');
    }
}

?>