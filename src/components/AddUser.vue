<template>
  <div class="form-group">
    <div>
      <label for="newUser">Please complete all fields.</label>
    </div>
    <input type="text" v-model="newUser.name">
    <input type="text" v-model="newUser.username">
    <input type="email" v-model="newUser.email">
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
      this.addNewUser({ ...this.newUser });
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
