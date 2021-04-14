<template>
  <div>
    <h1>Word overview</h1>
    <div class="word-entry" v-for="elem in words" :key="elem.id">
      <h2>{{elem.word}}</h2>
      {{word.definition}}
   </div>
  </div>
</template>

<script>
export default {
  name: 'WordOverview',
  props: {
    words: Array,
  }
}
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
