<template>
  <div>
    <!-- referencing our computed property to dynamically change the text of our button element -->
    <el-button type="primary" @click="toggleAddForm">{{buttonText}}</el-button>
    <!-- the v-if directive will allow us to only show the addUser component IF showAdd form on data is true -->
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
    //the addUser method will be passed as a prop to the "AddUser" component and handle appending a new user object to the view.
    addUser(userObj) {
      this.userData.push(userObj);
    },
    //The handleDelete method uses the higher order function "filter" to display all rows except the one matching the unique user identifer.
    handleDelete(row) {
      this.userData = this.userData.filter((user) => user.id !== row.id);
    },
    //by toggling the "showAddForm" boolean on data, we can easily control opening and closing the form on one button element.
    toggleAddForm() {
      this.showAddForm = !this.showAddForm;
    },
  },
  //alternative to inline logic controlling whether or not the button text will display "Add New User" or "Close Form"
  computed: {
    buttonText: function() {
      return this.showAddForm === true ? 'Close Form' : 'Add New User';
    },
  },
  //when UserContainer is created, fetch our users from api.js
  created() {
    fetchUsers().then((userData) => (this.userData = userData));
  },
  name: 'UserContainer',
};
</script>
<style scoped>
</style>
