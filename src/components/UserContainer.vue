<template>
  <div>
    <div>
      <el-button type="primary" @click="openPrompt">Click to Add User</el-button>
    </div>
    <el-table :data="userData">
      <el-table-column prop="name" label="Name"></el-table-column>
      <el-table-column prop="username" label="Username"></el-table-column>
      <el-table-column prop="email" label="Email"></el-table-column>

      <el-table-column align="right">
        <template slot="header" slot-scope="scope">
          <el-input v-model="search" size="mini" placeholder="Type to search"/>
        </template>
        <template slot-scope="scope">
          <el-button size="mini" @click="handleDelete(scope.$index, scope.row)">Edit</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import fetchUsers from '../utils/api.js';

export default {
  name: 'UserContainer',
  components: {
    modal,
  },
  data: () => ({
    userData: [],
    search: '',
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
    openPrompt() {
      this.$prompt('Please input your e-mail', 'Tip', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
      });
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
