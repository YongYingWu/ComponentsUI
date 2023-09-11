<template>
  <div class="container">
    <div class="content-box">
      <div :class="searchContent">
        <!-- @slot 搜索内容 -->
        <slot name="search-content" />
      </div>
      <div class="search-button">
        <el-button
          v-if="!searchContent['search-content-wrap']"
          type="text"
          class="el-icon-arrow-down"
          @click="develop(searchContent['search-content-wrap'] = true)"
          size="small"
        >
          展开
        </el-button>
        <el-button
          v-else
          type="text"
          class="el-icon-arrow-up"
          @click="develop(searchContent['search-content-wrap'] = false)"
          size="small"
        >
          收起
        </el-button>
        <el-button type="primary" size="small" class="el-icon-search" @click="search">查询</el-button>
        <el-button size="small" @click="reset">重置</el-button>
        <!-- @slot 按钮拓展 -->
        <slot name="search-button" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SearchBar',
  props: {},
  data(){
    return {
      searchContent: {
        'search-content': true,
        'search-content-wrap': false
      }
    }
  },
  methods: {
    develop() {},
    search() {
      /** 查询按钮触发事件函数 */
      this.$emit('search')
    },
    reset() {
      /** 重置按钮触发事件函数 */
      this.$emit('reset')
    }
  },
}
</script>
<style lang="scss" scoped>
@import './search-box.scss';
</style>