<template>
  <WordOverview v-bind:words="words" />
</template>

<script>
import WordDataService from "./services/WordDataService";
import WordOverview from './components/WordOverview.vue'

export default {
  name: 'App',
  data: () => ({
    words: []
  }),
  methods: {
    getWords() {
      WordDataService.getAll()
      .then((res) => {
        this.words = res.body;
      })
      .catch((error) => {
        console.error(error);
      });
    },
  },
  async created() {
    this.getWords();
  },
  components: {
    WordOverview
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
