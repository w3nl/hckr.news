<template>
    <div>
        <article-detail :article="article" />
    </div>
</template>

<script>
import axios from 'axios';
import ArticleDetail from '@/components/ArticleDetail.vue';

export default {
  name: 'article-page',
  components: {
    ArticleDetail,
  },
  props: {
    articleId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      article: {},
    };
  },
  mounted() {
    this.getArticle(this.articleId);
  },
  methods: {
    async getArticle(articleId) {
      const endpoint = `https://api.hckr.news/articles/${articleId}`;

      this.article = await axios
        .get(endpoint, {
          crossdomain: true,
        })
        .then(result => result.data);
    },
  },
};
</script>
