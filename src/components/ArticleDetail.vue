<template>
    <div>
        <b-card
            :title="article.title"
            :img-src="articleImage"
            img-alt="Card image"
            img-right
            class="mb-3"
        >
            <b-card-text>
                {{ article.text }}
            </b-card-text>

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
