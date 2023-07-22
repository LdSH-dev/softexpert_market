<template>
  <div id="sell">
    <h1 class="sell-title">Sales</h1>
    <input type="text" v-model="search" @keyup.enter="addProduct" placeholder="Search product">

    <ul class="search-results">
      <li v-for="product in searchResults" :key="product.id" @click="addProductFromSearch(product)">
        {{ product.name }}
      </li>
    </ul>

    <table class="product-table">
      <thead>
        <tr>
          <th>Quantity</th>
          <th>Product</th>
          <th>Category</th>
          <th>Price ($)</th>
          <th>Tax ($)</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in products" :key="index">
          <td>
            <input type="number" :value="product.quantity_selected" min="0" :max="product.quantity" style="width: 50px;" @input="updateQuantitySelected($event, product)">
          </td>
          <td>{{ product.name }}</td>
          <td>{{ product.category.name }}</td>
          <td>${{ product.price }}</td>
          <td>${{ calculateTax(product.price, product.category.fee) }}</td>
          <td>
            <button class="delete-button" @click="deleteProduct(index)">X</button>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="total">
      Subtotal: ${{ calculateSubtotal() }}
    </div>
    <div class="tax">
      Total Tax: ${{ calculateTotalTax() }}
    </div>
    <div class="grand-total">
      Grand Total: ${{ calculateGrandTotal() }}
    </div>

    <button class="btn btn-success" @click="sellProducts()">Confirm Sale</button>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'SellScreen',
  data() {
    return {
      search: '',
      searchResults: [],
      products: [],
      dataList: []
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios.get('http://localhost:8000/product')
        .then(response => {
          if (response.data['success'])
          {
            this.dataList = response.data['data'];
          }
          else
          {
            this.dataList = [];
          }
        })
        .catch(error => {
          console.error(error);
        });

        axios.get('http://localhost:8000/category')
        .then(response => {
          if (response.data['success'])
          {
            this.categories = response.data['data'];
          }
          else
          {
            this.categories = [];
          }
            
        })
        .catch(error => {
          console.error(error);
        });
    },
    updateQuantitySelected(event, product) {
      const newValue = event.target.value;

      if (/^\d*$/.test(newValue)) {
        product.quantity_selected = newValue;
      } else {
        product.quantity_selected = 0;
      }
    },
    calculateTax(price, fee) {
      return (price * fee).toFixed(2);
    },
    calculateSubtotal() {
      let subtotal = 0;
      this.products.forEach((product) => {
        subtotal += product.price * product.quantity;
      });
      return subtotal.toFixed(2);
    },
    calculateTotalTax() {
      let totalTax = 0;
      this.products.forEach((product) => {
        totalTax += this.calculateTax(product.price, product.category.fee) * product.quantity;
        console.log(totalTax);
      });
      return totalTax.toFixed(2);
    },
    getSearchResults() {
      if (this.search) {
        const searchTerm = this.search.toLowerCase();
        return this.dataList.filter((product) =>
          product.name.toLowerCase().includes(searchTerm)
        );
      } else {
        return [];
      }
    },
    calculateGrandTotal() {
      const subtotal = parseFloat(this.calculateSubtotal());
      const totalTax = parseFloat(this.calculateTotalTax());
      return (subtotal + totalTax).toFixed(2);
    },
    addProductFromSearch(product) {
      product.quantity_selected = 0;
      this.products.push(product);
      this.search = '';
      this.searchResults = [];
    },
    deleteProduct(index) {
      this.products.splice(index, 1);
    },
    sellProducts() {
      const formData = new FormData();
      formData.append('total_value', this.calculateGrandTotal());
      formData.append('total_fee', this.calculateTotalTax());
      formData.append('item', JSON.stringify(this.products));

      axios
        .post('http://localhost:8000/sale/create', formData)
        .then(response => {
          if (response.data['success']) {
            alert('Venda concluída com sucesso!');
            this.fetchData();
          } else {
            alert(response.data['error']);
          }
        })
        .catch(error => {
          console.error(error);
        });
    }

  },
  watch: {
    search: function () {
      this.searchResults = this.getSearchResults();
    }
  },
  computed: {
    filteredProducts() {
      if (this.search) {
        const searchTerm = this.search.toLowerCase();
        return this.dataList.filter((product) =>
          product.name.toLowerCase().includes(searchTerm)
        );
      } else {
        return [];
      }
    }
  }
}
</script>

<style>
#sell {
  margin-top: 20px;
  text-align: center;
}

.sell-title {
  font-size: 28px;
  margin-bottom: 20px;
  color: #333;
}

.product-table {
  margin-top: 20px;
  margin-bottom: 20px;
  border-collapse: collapse;
  width: 100%;
}

.product-table th,
.product-table td {
  border: 1px solid #ddd;
  padding: 8px;
}

.product-table th {
  background-color: #f2f2f2;
  text-align: left;
}

.total {
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
}

.tax {
  font-size: 16px;
  margin-top: 10px;
}

.grand-total {
  font-size: 24px;
  font-weight: bold;
  margin-top: 10px;
}

.delete-button {
  background-color: #f44336;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}

.search-results {
  list-style-type: none;
  padding: 0;
  margin-top: 10px;
  max-height: 200px;
  overflow-y: auto;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

.search-results li {
  cursor: pointer;
  padding: 5px;
}

.search-results li:hover {
  background-color: #f2f2f2;
}

</style>
