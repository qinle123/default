import CustomTable, { FormItemPropType } from '@/components/CustomTable';
import { TableProps } from 'antd';

interface RowType {
  name: string;
  age: string;
}

const ProductList: React.FC = () => {
  const formItems: FormItemPropType[] = [
    {
      type: 'input',
      insProp: {},
      prop: {
        name: 'userName',
        label: '用户名',
      },
      colProp: {
        span: 8,
      },
    },
    {
      type: 'select',
      prop: {
        name: 'mode',
        label: '模式',
      },
      insProp: {
        prop: {},
        options: [
          {
            value: 1,
            label: 'yes',
          },
          {
            value: 2,
            label: 'no',
          },
        ],
      },
      colProp: {
        span: 8,
      },
    },
  ];
  const tableOptions: TableProps<RowType> = {
    columns: [
      {
        title: 'name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'age',
        dataIndex: 'age',
        key: 'age',
      },
    ],
    dataSource: [
      {
        name: '11',
        age: '19',
      },
    ],
  };
  return <CustomTable<RowType> formItems={formItems} tableOptions={tableOptions} style={{ padding: 20 }}></CustomTable>;
};

export default ProductList;
