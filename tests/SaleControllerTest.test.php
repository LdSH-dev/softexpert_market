<?php
namespace tests;

use app\Controllers\SaleController;
use app\Http\Response;
use app\Models\Product;
use app\Models\ItemSale;
use app\Models\Sale;
use app\Services\SaleService;
use PHPUnit\Framework\TestCase;

class SaleControllerTest extends TestCase
{
    public function testGet()
    {
        // Prepare the mock SaleService
        $saleServiceMock = $this->createMock(SaleService::class);
        $sales = [
            ['uuid' => '1', 'total_value' => 100],
            ['uuid' => '2', 'total_value' => 200],
        ];
        $items = [
            ['uuid' => '1', 'quantity_selected' => 5],
            ['uuid' => '2', 'quantity_selected' => 10],
        ];
        $saleServiceMock->expects($this->once())
            ->method('get')
            ->willReturn($sales);
        $saleServiceMock->expects($this->exactly(2))
            ->method('getItemsSale')
            ->withConsecutive([$sales[0]['uuid']], [$sales[1]['uuid']])
            ->willReturnOnConsecutiveCalls([$items[0]], [$items[1]]);

        // Mock the Response class
        $responseMock = $this->getMockBuilder(Response::class)
            ->disableOriginalConstructor()
            ->getMock();
        $responseMock->expects($this->once())
            ->method('success')
            ->with($this->equalTo([$sales[0], $sales[1]]));

        // Create an instance of the SaleController and inject the mocks
        $saleController = new SaleController();
        $saleController->setSaleService($saleServiceMock);
        $saleController->setResponse($responseMock);

        // Call the get method
        $saleController->get();
    }

    public function testCreate()
    {
        // Prepare the mock SaleService
        $saleServiceMock = $this->createMock(SaleService::class);
        $saleServiceMock->expects($this->once())
            ->method('getItemsSale')
            ->willReturn([]);

        // Prepare the mock Product, ItemSale, and Sale models
        $productMock = $this->createMock(Product::class);
        $productMock->expects($this->once())
            ->method('save');

        $itemSaleMock = $this->createMock(ItemSale::class);
        $itemSaleMock->expects($this->once())
            ->method('save');

        $saleMock = $this->createMock(Sale::class);
        $saleMock->expects($this->once())
            ->method('save');

        // Mock the Response class
        $responseMock = $this->getMockBuilder(Response::class)
            ->disableOriginalConstructor()
            ->getMock();
        $responseMock->expects($this->once())
            ->method('success')
            ->with($this->equalTo('Sale created successfully'));

        // Create an instance of the SaleController and inject the mocks
        $saleController = new SaleController();
        $saleController->setSaleService($saleServiceMock);
        $saleController->setProductModel($productMock);
        $saleController->setItemSaleModel($itemSaleMock);
        $saleController->setSaleModel($saleMock);
        $saleController->setResponse($responseMock);

        // Prepare the request data
        $data = [
            'total_value' => 500,
            'total_fee' => 50,
            'item' => json_encode([
                [
                    'uuid' => '1',
                    'quantity_selected' => 3,
                    'price' => 100,
                    'category' => ['fee' => 10],
                ],
            ]),
        ];

        // Call the create method
        $saleController->create($data);
    }
}
