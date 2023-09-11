import DynamicTable from './index.vue'
export default {
  title: '组件/动态列表 DynamicTable',
  component: DynamicTable,
  tags: ['autodocs'],
  render: (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { DynamicTable },
    template: `
      <DynamicTable
        :data="data" :stripe="true" :columnStyle="columnStyle"
        :defaultCol="defaultCol" :labels="labels">
        <template slot="type" scope="scope">
          {{typeDict[scope.row.type]}}
        </template>
      </DynamicTable>
    `,
    filters: {
      filterS(scope) {
        console.log('scope',scope)
        return this.typeDict[scope.row.type]
      }
    },
    data() {
      return {
        data: [
          {id: 1, name: 'tony1', value: 12, type: 1, salary: 221},
          {id: 11, name: 'tony2', value: 12, type: 2, salary: 222},
          {id: 12, name: 'tony3', value: 12, type: 3, salary: 223},
          {id: 13, name: 'tony4', value: 12, type: 4, salary: 224},
          {id: 14, name: 'tony5', value: 12, type: 2, salary: 225},
          {id: 15, name: 'tony6', value: 12, type: 1, salary: 226},
        ],
        typeDict: {
          1: 'a',
          2: 'b',
          3: 'c',
          4: 'd',
        },
      }
    }
  }),
  argTypes: {
  },
}
export const Example = {
  args: {
    labels: [{
      label: '编号',
      value: 'id'
    },
    {
      label: '姓名',
      value: 'name'
    },{
      label: '价值',
      value: 'value'
    },{
      label: '类型',
      value: 'type'
    },{
      label: '工资',
      value: 'salary'
    }],
    defaultCol: [
      ['id'],
      ['name']
    ],
    columnStyle: {
      type: {
        width: '500px'
      }
    }
  },
};