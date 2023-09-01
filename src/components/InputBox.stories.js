/* eslint-disable storybook/story-exports */
import InputBox from './InputBox'
export default {
  title: 'Example/InputBox',
  component: InputBox,
  tags: ['autodocs'],
  render: (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { InputBox },
    template: `<input-box v-bind="$props" v-on="$listeners" v-model="input.value">
    <template v-if="tagType === 'el-select'">
      <el-option v-for="e in options" :key="e.value" :label="e.label" :value="e.value" />
    </template> 
    </input-box>`,
  }),
  argTypes: {
    input: {
      description: 'v-model绑定的值，使用对象形式',
      // type: Object
    }
  },
}
export const elInput = {
  args: {
    title: '输入框',
    tagType: 'el-input',
    placeholder: 'please enter',
    clearable: true,
    input:{value: ''}
  },
};
export const elSelect = {
  args: {
    title: '选择框',
    tagType: 'el-select',
    placeholder: 'please select',
    clearable: true,
    input:{value: ''},
    options: [{
      value: '1',
      label: 'option1'
    },
    {
      value: '2',
      label: 'option2'
    },
    {
      value: '3',
      label: 'option3'
    }]
  }
}