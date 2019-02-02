<template>
  <div>
    <el-button type="primary" @click="toggleAddForm">{{buttonText}}</el-button>
    <div v-if="showAddForm === true">
      <AddUser v-bind:addNewUser="addUser"/>
    </div>
    <el-table :data="userData" style="width: 100%">
      <el-table-column type="expand" label="Edit">
        <template slot-scope="props">
          <el-input v-model="props.row.name"></el-input>
          <el-input v-model="props.row.username"></el-input>
          <el-input v-model="props.row.email"></el-input>
        </template>
      </el-table-column>
      <el-table-column align="center" label="Name" prop="name"></el-table-column>
      <el-table-column align="center" label="username" prop="username"></el-table-column>
      <el-table-column align="center" label="email" prop="email"></el-table-column>
      <el-table-column align="right">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" plain @click="handleDelete(scope.row)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>


<script>
import fetchUsers from '../utils/api';
import AddUser from './AddUser';
export default {
  data: function() {
    return {
      userData: [],
      showAddForm: false,
    };
  },
  components: {
    AddUser,
  },
  methods: {
    addUser(userObj) {
      this.userData.push(userObj);
    },
    handleDelete(row) {
      this.userData = this.userData.filter((user) => user.id !== row.id);
    },
    toggleAddForm() {
      this.showAddForm = !this.showAddForm;
    },
  },
  computed: {
    buttonText: function() {
      return this.showAddForm === true ? 'Close Form' : 'Add New User';
    },
  },

  created() {
    fetchUsers().then((userData) => (this.userData = userData));
  },
  name: 'UserContainer',
};
</script>
<style scoped>
</style>
