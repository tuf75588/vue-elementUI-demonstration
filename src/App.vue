<template>
  <div>
    <h1>Vue Demonstration</h1>
    <div class="container">
      <UserContainer/>
    </div>
  </div>
</template>

<script>
import UserContainer from './components/UserContainer';

export default {
  name: 'app',
  components: {
    UserContainer,
  },
};
</script>



<style>
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', sans-serif;
}
h1 {
  text-align: center;
}
.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 10px;
  border: 1px solid #000;
}
</style>