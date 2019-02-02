<template>
  <div class="form-group">
    <div>
      <label for="newUser">Please complete all fields.</label>
    </div>
    <!-- Listening for field changes on our data object with v-model -->
    <input type="text" placeholder="name" v-model="newUser.name">
    <input type="text" placeholder="username" v-model="newUser.username">
    <input type="email" placeholder="email" v-model="newUser.email">
    <!-- using v-bind we can dynamically change the disabled attribute based on what our computed property "isDisabled" resolves to -->
    <el-button
      type="primary"
      class="submit-btn"
      @click="handleNewUser"
      plain
      v-bind:disabled="this.isDisabled"
    >Submit</el-button>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      newUser: {
        name: '',
        username: '',
        email: '',
      },
    };
  },
  methods: {
    handleNewUser() {
      // using object-spread, our new user object is passed into our prop function in one call.
      this.addNewUser({ ...this.newUser });
      //clear input fields after submitting!
      this.newUser.name = '';
      this.newUser.username = '';
      this.newUser.email = '';
    },
    // very basic validation handler
  },
  computed: {
    isDisabled: function() {
      if (this.newUser.name && this.newUser.username && this.newUser.email) return false;
      return true;
    },
  },

  name: 'AddUser',
  props: {
    addNewUser: Function,
  },
};
</script>
<style scoped>
.form-group {
  margin-top: 10px;
}
.form-group > input {
  border-radius: 5px;
  padding: 10px;
  border: 1px solid lightskyblue;
}
.submit-btn {
  margin-left: 5px;
}
</style>
