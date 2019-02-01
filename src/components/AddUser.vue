<template>
  <div>
    <form>
      <input tpye="text" placeholder="name">
      <input tpye="text" placeholder="username">
      <input tpye="email" placeholder="email">
      <el-button type="primary" plain class="add-button">Primary</el-button>
    </form>
  </div>
</template>
<script>
export default {
  name: 'AddUser',
};
</script>

<style scoped>
input {
  padding: 10px;
  margin-top: 10px;
  border-radius: 5px;
  border: 1px solid lightskyblue;
}
.add-button {
  margin-left: 5px;
}
</style>
