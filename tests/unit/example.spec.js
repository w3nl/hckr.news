import { shallowMount } from '@vue/test-utils';
import ArticleList from '@/components/ArticleList.vue';

describe('ArticleList.vue', () => {
  it('renders props.msg when passed', () => {
    const articles = [
      {
        title: 'example',
      },
    ];
    const wrapper = shallowMount(ArticleList, {
      propsData: { articles },
    });
    expect(wrapper.text()).toMatch(articles);
  });
});
