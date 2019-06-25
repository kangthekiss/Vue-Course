<template>
  <div class="hello">
    <h1>This is an home page</h1>
    <Hello msg="This is an hello component"/>
  </div>
</template>

<script>
import Hello from "../components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    Hello
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
