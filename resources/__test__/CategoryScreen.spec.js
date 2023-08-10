import { shallowMount } from '@vue/test-utils';
import CategoryScreen from './CategoryScreen.vue';

describe('CategoryScreen', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(CategoryScreen, {
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('should render the component', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should fetch data when mounted', () => {
    const mockResponse = {
      data: {
        success: true,
        data: [
          { uuid: '1', name: 'Category 1', fee: 10, status: true },
          { uuid: '2', name: 'Category 2', fee: 15, status: false },
        ],
      },
    };
    jest.mock('axios', () => ({
      get: jest.fn(() => Promise.resolve(mockResponse)),
    }));

    wrapper = shallowMount(CategoryScreen);

    expect(wrapper.vm.dataList).toEqual(mockResponse.data.data);
  });

  it('should display correct category data', () => {
    wrapper.setData({
      dataList: [
        { uuid: '1', name: 'Category 1', fee: 10, status: true },
        { uuid: '2', name: 'Category 2', fee: 15, status: false },
      ],
    });

    const tableRows = wrapper.findAll('tbody tr');
    expect(tableRows.length).toBe(2);

    const firstRow = tableRows[0];
    expect(firstRow.find('td:nth-child(2)').text()).toBe('1');
    expect(firstRow.find('td:nth-child(3)').text()).toBe('Category 1');
    expect(firstRow.find('td:nth-child(4)').text()).toBe('10');
    expect(firstRow.find('td:nth-child(5) .status-active').exists()).toBe(true);
    expect(firstRow.find('td:nth-child(6) button.btn-primary').text()).toBe('Edit');
    expect(firstRow.find('td:nth-child(6) button.btn-danger').text()).toBe('Delete');

    const secondRow = tableRows[1];
    expect(secondRow.find('td:nth-child(2)').text()).toBe('2');
    expect(secondRow.find('td:nth-child(3)').text()).toBe('Category 2');
    expect(secondRow.find('td:nth-child(4)').text()).toBe('15');
    expect(secondRow.find('td:nth-child(5) .status-inactive').exists()).toBe(true);
    expect(secondRow.find('td:nth-child(6) button.btn-primary').text()).toBe('Edit');
    expect(secondRow.find('td:nth-child(6) button.btn-danger').text()).toBe('Delete');
  });

  it('should show the modal when clicking the edit button', async () => {
    const mockData = {
      uuid: '1',
      name: 'Category 1',
      fee: 10,
      status: true,
    };
    wrapper.setData({
      dataList: [mockData],
    });

    const editButton = wrapper.find('tbody tr button.btn-primary');
    expect(wrapper.vm.showModal).toBe(false);
    await editButton.trigger('click');
    expect(wrapper.vm.showModal).toBe(true);
    expect(wrapper.vm.editForm).toEqual(mockData);
  });
});
