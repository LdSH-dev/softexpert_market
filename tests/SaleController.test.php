<?php
namespace tests;

require_once dirname(__DIR__) . '/vendor/autoload.php';

use GuzzleHttp\Client;
use GuzzleHttp\RequestOptions;
use PHPUnit\Framework\TestCase;

class SaleControllerTest extends TestCase
{
    public function testGet()
    {
        $client = new Client();
        $response = $client->get('http://localhost:8000/sale');

        $this->assertEquals(200, $response->getStatusCode());
        $this->assertNotEmpty($response->getBody());

        $responseData = json_decode($response->getBody(), true);
        $this->assertArrayHasKey('success', $responseData);
        $this->assertTrue($responseData['success']);

    }

    public function testCreate()
    {
        $client = new Client();
        $response = $client->post('http://localhost:8000/sale/create', [
            RequestOptions::FORM_PARAMS => [
                'total_value' => 1.27,
                'total_fee' => 0.17,
                'item' => [
                    'uuid' => '52658b87-71ba-40cd-ac61-6cd17f53dc3c',
                    'quantity_selected' => 1,
                    'price' => 1.1,
                    'category' => [
                        'fee' => 0.15
                    ]
                ]
            ]
        ]);

        $this->assertEquals(200, $response->getStatusCode());
        $this->assertNotEmpty($response->getBody());

        $responseData = json_decode($response->getBody(), true);
        $this->assertArrayHasKey('success', $responseData);
        $this->assertTrue($responseData['success']);
    }
}
