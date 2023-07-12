<?php

namespace tests;

require_once dirname(__DIR__) . '/vendor/autoload.php';

use GuzzleHttp\Client;
use GuzzleHttp\RequestOptions;
use PHPUnit\Framework\TestCase;

class ProductControllerTest extends TestCase
{
    public function testGet()
    {
        $client = new Client();
        $response = $client->get('http://localhost:8000/product');

        $this->assertEquals(200, $response->getStatusCode());
        $this->assertNotEmpty($response->getBody());

        $responseData = json_decode($response->getBody(), true);
        $this->assertArrayHasKey('success', $responseData);
        $this->assertTrue($responseData['success']);
    }

    public function testCreate()
    {
        $client = new Client();
        $response = $client->post('http://localhost:8000/product/create', [
            RequestOptions::FORM_PARAMS => [
                'name' => 'Test Product',
                'status' => true,
                'category_id' => '9aefd3fb-09ac-4c80-a813-d0575fe1488b',
                'price' => 10.99,
                'quantity' => 100
            ]
        ]);

        $this->assertEquals(200, $response->getStatusCode());
        $this->assertNotEmpty($response->getBody());

        $responseData = json_decode($response->getBody(), true);
        $this->assertArrayHasKey('success', $responseData);
        $this->assertTrue($responseData['success']);
    }

    public function testUpdate()
    {
        $client = new Client();
        $response = $client->post('http://localhost:8000/product/update', [
            RequestOptions::FORM_PARAMS => [
                'id' => 'd7c3860e-879a-4ddd-889d-46a7a2adf8de',
                'name' => 'Updated Product',
                'status' => true,
                'category_id' => '9aefd3fb-09ac-4c80-a813-d0575fe1488b',
                'price' => 20.99,
                'quantity' => 50
            ]
        ]);

        $this->assertEquals(200, $response->getStatusCode());
        $this->assertNotEmpty($response->getBody());

        $responseData = json_decode($response->getBody(), true);
        $this->assertArrayHasKey('success', $responseData);
        $this->assertTrue($responseData['success']);
    }

    public function testDelete()
    {
        $client = new Client();
        $response = $client->post('http://localhost:8000/product/delete', [
            RequestOptions::FORM_PARAMS => [
                'id' => 'd7c3860e-879a-4ddd-889d-46a7a2adf8de'
            ]
        ]);

        $this->assertEquals(200, $response->getStatusCode());
        $this->assertNotEmpty($response->getBody());

        $responseData = json_decode($response->getBody(), true);
        $this->assertArrayHasKey('success', $responseData);
        $this->assertTrue($responseData['success']);
    }
}
