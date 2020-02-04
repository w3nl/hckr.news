<template>
    <div>
        <article-list :articles="articles" />
        <button
            v-if="hasMoreArticles"
            @click="moreArticles"
        >More articles</button>
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
      start: 0,
      limit: 10,
      sortBy: 'id:DESC',
      endpoint: 'https://api.hckr.news/articles',
    };
  },
  computed: {
    hasMoreArticles() {
      return (
        this.articles.length % this.limit === 0
                && this.articles.length >= this.limit
      );
    },
  },
  mounted() {
    this.getArticles({
      start: this.start,
      limit: this.limit,
      sortBy: this.sortBy,
    });
  },
  methods: {
    async getArticles({ start, limit, sortBy }) {
      const url = `${this.endpoint}?_start=${start}&_limit=${limit}&_sort=${sortBy}`;

      const newArticles = await axios
        .get(url, { crossdomain: true })
        .then(result => result.data);

      this.articles.push(...newArticles);
    },
    moreArticles() {
      this.start += this.limit;
    },
  },
  watch: {
    start(start) {
      this.getArticles({
        start,
        limit: this.limit,
        sortBy: this.sortBy,
      });
    },
  },
};
</script>
