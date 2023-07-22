import { mount } from '@vue/test-utils';
import SellScreen from '@/components/SellScreen.vue'; 

describe('SellScreen', () => {
  // Test to verify if the quantity of products is updated correctly
  it('updates the quantity of products correctly', () => {
    const wrapper = mount(SellScreen);
    const product = {
      id: 1,
      name: 'Test Product',
      category: 'Test Category',
      price: 10,
      quantity: 20,
    };

    // Add the product
    wrapper.vm.addProductFromSearch(product);

    // Check if the quantity of the product is initialized as 0
    expect(wrapper.vm.products[0].quantity_selected).toBe(0);

    // Update the quantity of the product to 5
    const input = wrapper.find('input[type="number"]');
    input.setValue(5);

    // Check if the quantity of the product is updated correctly
    expect(wrapper.vm.products[0].quantity_selected).toBe(5);
  });

  // Test to verify the calculation of subtotal
  it('calculates the subtotal correctly', () => {
    const wrapper = mount(SellScreen);
    const product1 = {
      id: 1,
      name: 'Product 1',
      category: 'Category 1',
      price: 10,
      quantity: 5,
      quantity_selected: 2,
    };
    const product2 = {
      id: 2,
      name: 'Product 2',
      category: 'Category 2',
      price: 20,
      quantity: 10,
      quantity_selected: 3,
    };

    // Add the products
    wrapper.vm.products.push(product1, product2);

    // Check if the subtotal is calculated correctly
    expect(wrapper.vm.calculateSubtotal()).toBe('110.00');
  });

  // Test to verify the calculation of total tax
  it('calculates the total tax correctly', () => {
    const wrapper = mount(SellScreen);
    const product1 = {
      id: 1,
      name: 'Product 1',
      category: 'Category 1',
      price: 10,
      quantity: 5,
      quantity_selected: 2,
    };
    const product2 = {
      id: 2,
      name: 'Product 2',
      category: 'Category 2',
      price: 20,
      quantity: 10,
      quantity_selected: 3,
    };

    // Add the products
    wrapper.vm.products.push(product1, product2);

    // Check if the total tax is calculated correctly
    expect(wrapper.vm.calculateTotalTax()).toBe('22.00');
  });

  // Test to verify the calculation of the total sale value
  it('calculates the total sale value correctly', () => {
    const wrapper = mount(SellScreen);
    const product1 = {
      id: 1,
      name: 'Product 1',
      category: 'Category 1',
      price: 10,
      quantity: 5,
      quantity_selected: 2,
    };
    const product2 = {
      id: 2,
      name: 'Product 2',
      category: 'Category 2',
      price: 20,
      quantity: 10,
      quantity_selected: 3,
    };

    // Add the products
    wrapper.vm.products.push(product1, product2);

    // Check if the total sale value is calculated correctly
    expect(wrapper.vm.calculateGrandTotal()).toBe('132.00');
  });
});
