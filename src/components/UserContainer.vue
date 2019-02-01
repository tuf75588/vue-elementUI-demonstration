<template>
  <div>
    <div>
      <el-button type="primary" @click="showAddForm">Click to Add User</el-button>
      <span v-if="showForm === true">
        <AddUser/>
      </span>
    </div>
    <el-table :data="userData">
      <el-table-column prop="name" label="Name"></el-table-column>
      <el-table-column prop="username" label="Username"></el-table-column>
      <el-table-column prop="email" label="Email"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import fetchUsers from '../utils/api';
import AddUser from './AddUser';
export default {
  name: 'UserContainer',
  components: {
    AddUser,
  },
  data: () => ({
    userData: [],
    search: '',
    showForm: false,
  }),
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row.email);
    },
    onClick(userObj) {
      this.userData.push(userObj);
    },
    showAddForm() {
      this.showForm = true;
    },
  },

  mounted() {
    fetchUsers().then((data) => {
      this.userData = data;
    });
  },
};
</script>
<style scoped>
.add-user {
  float: right;
}
</style>
