import SearchBar from '../SearchBar'
import InputBox from '../InputBox';
export default {
  title: '组件/搜索栏  SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
  render: (args, { argTypes }) => ({
    components: { SearchBar, InputBox },
    template: `<search-bar @search="search" @reset="reset">
      <template slot="search-content">
        <input-box title="search1" tagType="el-input" v-model="searchData.search1" />
        <input-box title="search1" tagType="el-input" v-model="searchData.search2" />
        <input-box title="search1" tagType="el-input" v-model="searchData.search3" />
        <input-box title="search1" tagType="el-input" v-model="searchData.search4" />
        <input-box title="search1" tagType="el-input" v-model="searchData.search5" />
        <input-box title="search1" tagType="el-input" v-model="searchData.search6" />
      </template>
    </search-bar>`,
    data() {
      return {
        searchData: {
          search1: '',
          search2: '',
          search3: '',
          search4: '',
          search5: '',
          search6: '',
        },
      }
    },
    methods: {
      search(){
        console.log(this.searchData)
      },
      reset(){
        console.log('---已重置---')
      }
    },
  }),
}
export const Example = {
  args: {
  },
};