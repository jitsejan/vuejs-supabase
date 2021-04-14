<template>
  <div>
    <h1>Word overview</h1>
    <ul class="word-ul">
      <li class="word-li-entry" v-for="elem in words" :key="elem.id">
        <h2 class="word-title">{{elem.word}}</h2>
        <q class="word-definition">
          {{elem.definition}}
        </q>
      </li>
    </ul>
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

<style scoped>
h2.word-title {
  margin: 40px 0 0;
}
ul.word-ul {
  list-style-type: none;
  padding: 10;
}
li.word-li-entry {
  margin: 10px;
}
q.word-definition {
  font-style: italic;
}
</style>
