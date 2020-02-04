<template>
    <div>
        <b-card
            :title="article.title"
            class="mb-3"
        >
            <b-card-text>
                {{ article.text }}
            </b-card-text>

            <b-img
                v-if="articleImage"
                :src="articleImage"
                fluid
            ></b-img>

            <div v-if="article.categories && article.categories.length">
                <b-badge
                    v-for="(category, index) in article.categories"
                    :key="index"
                    variant="primary"
                >{{ category.name }}</b-badge>
            </div>

            <b-button
                v-if="article.link"
                :href="article.link"
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
            >View article</b-button>
        </b-card>
    </div>
</template>

<script>
export default {
  name: 'ArticleDetail',
  props: {
    article: {
      type: Object,
      default: () => ({
        id: null,
        title: null,
        images: [],
      }),
      required: true,
    },
  },
  computed: {
    /**
         * Get the article url.
         *
         * @return {string}
         */
    articleImage() {
      if (!this.article.images || !this.article.images.length) {
        return '';
      }

      return `https://api.hckr.news${this.article.images[0].url}`;
    },
  },
};
</script>
