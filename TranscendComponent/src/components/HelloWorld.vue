<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <button1></button1>
    <button2></button2>
    <transcendfab></transcendfab>
  </div>
</template>

<script>
  import button1 from './button1/button1.vue'
  import button2 from './button2/button2.vue'
  import transcendfab from './transcendfab/transcendfab.vue'

  export default {
    name: 'HelloWorld',
    components: {
      button1,
      button2,
      transcendfab
    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
      }
    },
    methods: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
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
