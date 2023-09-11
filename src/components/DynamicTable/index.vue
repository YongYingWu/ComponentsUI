<template>
  <div class="container">
    <div class="content">
      <div class="top">
        <div class="search-box">
          <!-- @slot 头部搜索栏插槽 -->
            <slot name="search-box"/>
        </div>
        <div class="extend-col">
          <el-cascader
            type="primary"
            v-model="label"
            size="mini"
            :options="labels"
            :props="{multiple: true}"
            collapse-tags
            @change="colChange"
            placeholder="扩展列">
          </el-cascader>
        </div>
      </div>
      <div class="table">
        <el-table v-bind="$attrs" v-on="$listeners">
        <!-- @slot 自定义行，如添加选择行 -->
          <slot name="table-top"/>
          <el-table-column
            v-for="v in label"
            v-bind="columnStyle && columnStyle[v[0]]"
            :prop="v[0]" :key="v[0]" :label="v | labelFilter(labels)">
            <template slot-scope="scope">
              <!-- @slot 自定义显示模板，插槽名称为prop名称，提供row和index -->
              <slot :name="v[0]" :index="scope.$index" :row="scope.row">
                {{ scope.row[v[0]] }}
              </slot>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DynamicTable',
  filters: {
    labelFilter(type, dict) {
      // console.log(type,dict)
      return dict.find(e => e.value === type[0]).label
    }
  },
  props: {
    /** 默认展示的属性 */
    defaultCol: {
      type: Array,
    },
    /** 包含prop和label的数组[{prop,label}] */
    labels: {
      type: Array,
      require: true,
    },
    /** column的样式，参考el-table-column的样式 */
    columnStyle: {
      type: Object,
    },
  },
  data() {
    return {
      label: []
    }
  },
  mounted() {
    console.log(this.$attrs)
    this.label = this.defaultCol || []
  },
  methods: {
    colChange() {
      console.log(this.label)
    }
  },
}
</script>
<style lang="scss" scoped>
@import './dynamicTable.scss'
</style>