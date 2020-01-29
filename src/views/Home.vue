<template>
    <div>
        <article-list :articles="articles" />
    </div>
</template>

<script>
import axios from 'axios';
import ArticleList from '@/components/ArticleList.vue';

export default {
  name: 'home',
  components: {
    ArticleList,
  },
  data() {
    return {
      articles: [],
    };
  },
  mounted() {
    this.getArticles();
  },
  methods: {
    async getArticles() {
      const endpoint = 'https://api.hckr.news/articles';

      this.articles = await axios
        .get(endpoint, { crossdomain: true })
        .then(result => result.data);
    },
  },
};
</script>
