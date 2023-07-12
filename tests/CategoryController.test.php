<?php

namespace tests;

require_once dirname(__DIR__) . '/vendor/autoload.php';

use GuzzleHttp\Client;
use GuzzleHttp\RequestOptions;
use PHPUnit\Framework\TestCase;

class CategoryControllerTest extends TestCase
{
    public function testGet()
    {
        $client = new Client();
        $response = $client->get('http://localhost:8000/category');

        $this->assertEquals(200, $response->getStatusCode());
        $this->assertNotEmpty($response->getBody());

        $responseData = json_decode($response->getBody(), true);
        $this->assertArrayHasKey('success', $responseData);
        $this->assertTrue($responseData['success']);
    }

    public function testCreate()
    {
        $client = new Client();
        $response = $client->post('http://localhost:8000/category/create', [
            RequestOptions::FORM_PARAMS => [
                'name' => 'Test Category',
                'status' => true,
                'fee' => 0.1
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
        $response = $client->post('http://localhost:8000/category/update', [
            RequestOptions::FORM_PARAMS => [
                'id' => '853bc079-0c69-452b-b8c9-ee75c7db2a94',
                'name' => 'Updated Category',
                'status' => true,
                'fee' => 0.2
            ]
        ]);

        $this->assertEquals(200, $response->getStatusCode());
        $this->assertNotEmpty($response->getBody());

        $responseData = json_decode($response->getBody(), true);
        // var_dump($responseData);die;
        $this->assertArrayHasKey('success', $responseData);
        $this->assertTrue($responseData['success']);

    }

    public function testDelete()
    {
        $client = new Client();
        $response = $client->post('http://localhost:8000/category/delete', [
            RequestOptions::FORM_PARAMS => [
                'id' => 'fef05be4-4b72-4756-abb0-2a1e59133110'
            ]
        ]);

        $this->assertEquals(200, $response->getStatusCode());
        $this->assertNotEmpty($response->getBody());

        $responseData = json_decode($response->getBody(), true);
        $this->assertArrayHasKey('success', $responseData);
        $this->assertTrue($responseData['success']);
    }
}
