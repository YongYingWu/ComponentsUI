<template>
  <div class="input-box">
    <div class="input-title">
      {{ title }}
    </div>
    <div class="element" :is="tagType" :clearable="clearable" v-bind="$attrs" v-on="$listeners" size="small">
      <template v-for="(slot, slotName) in $slots" #[slotName]>
        <slot :name="slotName" />
      </template>
    </div>
  </div>
</template>
<script>
export default {
  name: 'InputBox',
  props: {
    /** 输入框前的文字 */
    title: {
      type: String,
      require: true
    },
    /** 要调用的组件名 */
    tagType: {
      type: String,
      require: true,
    },
    /** 是否可清除 */
    clearable: {
      type: Boolean,
      default: true
    }
  }
}
</script>
<style lang="scss" scoped>
@import './inputbox.scss'
</style>