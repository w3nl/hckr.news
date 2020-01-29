<template>
    <div>
        <b-table
            striped
            hover
            head-variant="dark"
            sort-by="id"
            :sort-desc="true"
            :items="articles"
            :fields="fields"
        >
            <template v-slot:cell(title)="data">
                <router-link :to="{ name: 'article', params: { articleId:  data.item.id }}">
                    {{ data.value }}
                </router-link>
            </template>
            <template v-slot:cell(link)="data">
                <a
                    :href="data.value"
                    target="_blank"
                    rel="noopener noreferrer"
                >{{ data.value }}</a>
            </template>
        </b-table>
    </div>
</template>

<script>
export default {
  props: {
    articles: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      fields: [
        {
          key: 'id',
          label: 'ID',
          sortable: true,
        },
        {
          key: 'title',
          label: 'Title',
          sortable: true,
        },
        {
          key: 'link',
          label: 'Link',
          sortable: true,
        },
      ],
    };
  },
};
</script>
