<template>
  <div id="category">
    <h1 class="category-title">Category</h1>
    <div class="table-container">
      <table class="table table-transparent">
        <thead>
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>Name</th>
            <th>Fee</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in paginatedData" :key="item.uuid">
            <td>{{ (currentPage - 1) * perPage + index + 1 }}</td>
            <td>{{ item.uuid }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.fee }}</td>
            <td>
              <span v-if="item.status" class="status-active">Active</span>
              <span v-else class="status-inactive">Inactive</span>
            </td>
            <td>
              <button class="btn btn-primary btn-sm" @click="editItem(item)">Edit</button>
              <button class="btn btn-danger btn-sm" @click="deleteItem(item)">Delete</button>
            </td>
          </tr>
          <td>
            <button class="btn btn-success btn-sm" @click="openCreateModal">New Category</button>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tbody>
      </table>
    </div>
    <div class="pagination-container">
      <button class="btn btn-primary btn-sm" :hidden="currentPage === 1" @click="previousPage">Previous</button>
      <span>{{ currentPage }} / {{ totalPages }}</span>
      <button class="btn btn-primary btn-sm" :hidden="currentPage === totalPages" @click="nextPage">Next</button>
    </div>

    <div class="modal" v-if="showModal">
      <div class="modal-content">
        <h2>Edit Category</h2>
        <form @submit.prevent="updateItem">
          <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="editForm.name" class="form-control" required>
          </div>
          <div class="form-group">
            <label for="fee">Fee:</label>
            <input type="text" id="fee" v-model="editForm.fee" class="form-control" required>
          </div>
          <div class="form-group">
            <label for="status">Status:</label>
            <select id="status" v-model="editForm.status" class="form-control" required>
              <option value="true">Active</option>
              <option value="false">Inactive</option>
            </select>
          </div>
          <button type="submit" class="btn btn-primary">Save</button>
          <button type="button" class="btn btn-secondary" @click="closeModal">Cancel</button>
        </form>
      </div>
    </div>

    <div class="modal" v-if="showModalCreate">
      <div class="modal-content">
        <h2>New Category</h2>
        <form @submit.prevent="createItem">
          <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="createForm.name" class="form-control" required>
          </div>
          <div class="form-group">
            <label for="fee">Fee:</label>
            <input type="text" id="fee" v-model="createForm.fee" class="form-control" required>
          </div>
          <div class="form-group">
            <label for="status">Status:</label>
            <select id="status" v-model="createForm.status" class="form-control" required>
              <option value="true">Active</option>
              <option value="false">Inactive</option>
            </select>
          </div>
          <button type="submit" class="btn btn-success">Save</button>
          <button type="button" class="btn btn-danger" @click="closeModalCreate">Cancel</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CategoryScreen',
  data() {
    return {
      dataList: [],
      currentPage: 1,
      perPage: 10,
      showModal: false,
      showModalCreate: false,
      editForm: {
        id: '',
        name: '',
        status: false,
        fee: ''
      },
      createForm: {
        name: '',
        status: true,
        fee : ''
      }
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.dataList.length / this.perPage);
    },
    paginatedData() {
      if (Array.isArray(this.dataList) && this.dataList.length > 0) {
        const startIndex = (this.currentPage - 1) * this.perPage;
        const endIndex = startIndex + this.perPage;
        return this.dataList.slice(startIndex, endIndex);
      } else {
        return [];
      }
    }
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios.get('http://localhost:8000/category')
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
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    deleteItem(item) {
      const formData = new FormData();
      formData.append('id', item.uuid);
      axios.post('http://localhost:8000/category/delete', formData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(response => {
        if (response.data['success'])
        {
          this.fetchData();
        }
        else
        {
          alert(response.data['error']);
        }
      })
      .catch(error => {
        console.error(error);
      });
    },
    closeModal() {
      this.showModal = false;
    },
    editItem(item) {
      this.editForm.id = item.uuid;
      this.editForm.name = item.name;
      this.editForm.fee = item.fee;
      this.editForm.status = item.status.toString();
      this.showModal = true;
    },
    openCreateModal() {
      this.showModalCreate = true;
    },
    updateItem() {
      const formData = new FormData();
      formData.append('id', this.editForm.id);
      formData.append('name', this.editForm.name);
      formData.append('status', this.editForm.status);
      formData.append('fee', this.editForm.fee);
        
      axios.post('http://localhost:8000/category/update', formData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(response => {
        if (response.data['success'])
        {
          this.fetchData();
        }
        else
        {
          alert(response.data['error']);
        }
        this.closeModal();
      })
      .catch(error => {
        console.error(error);
        this.closeModal();
      });
    },
    createItem() {
      const formData = new FormData();
      formData.append('name', this.createForm.name);
      formData.append('status', this.createForm.status);
      formData.append('fee', this.createForm.fee);
        
      axios.post('http://localhost:8000/category/create', formData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(response => {
        if (response.data['success'])
        {
          this.fetchData();
        }
        else
        {
          alert(response.data['error']);
        }
        this.closeModalCreate();
      })
      .catch(error => {
        console.error(error);
        this.closeModalCreate();
      });
    },
    closeModalCreate() {
      this.showModalCreate = false;
    }
  }
}
</script>


<style scoped>
#category {
  margin-top: 20px;
  text-align: center;
}

.category-title {
  font-size: 28px;
  margin-bottom: 20px;
  color: #333;
}

.table-container {
  max-width: 1200px;
  margin: 0 auto;
}

th{
  background: #0091ed;
  color: white;
}

tr,
td{
  background: whitesmoke;
}

.btn {
  margin-right: 10px;
}

h1{
  color:#0091ed !important;
}

.status-active {
  color: green;
}

.status-inactive {
  color: red;
}

.modal {
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
}

.modal-background {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}


</style>