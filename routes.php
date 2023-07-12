<?php

use app\Http\Router;
use app\Controllers\CategoryController;
use app\Controllers\ProductController;
use app\Controllers\SaleController;

$router = new Router();

# ROUTES SECTION #

$router->get('/category', [CategoryController::class, 'get']);
$router->post('/category/create', [CategoryController::class, 'create']);
$router->post('/category/update', [CategoryController::class, 'update']);
$router->post('/category/delete', [CategoryController::class, 'delete']);

$router->get('/product', [ProductController::class, 'get']);
$router->post('/product/create', [ProductController::class, 'create']);
$router->post('/product/update', [ProductController::class, 'update']);
$router->post('/product/delete', [ProductController::class, 'delete']);

$router->get('/sale', [SaleController::class, 'get']);
$router->post('/sale/create', [SaleController::class, 'create']);

# END ROUTES SECTION #

$requestUri = $_SERVER['REQUEST_URI'];
$requestMethod = $_SERVER['REQUEST_METHOD'];

$router->handleRequest($requestUri, $requestMethod);