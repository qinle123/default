import { Table, TableProps, Button, Form, Row, Col, FormItemProps, ColProps } from 'antd';
import React from 'react';
import mapFormItem, { insType } from '../CommonFormComponent/index';

export interface FormItemPropType {
  type: insType;
  prop: FormItemProps;
  colProp?: ColProps;
  insProp?: object;
}

export interface CustomTableProps<RowType extends object = any> {
  style: Record<string, unknown>;
  tableOptions: TableProps<RowType>;
  formItems?: FormItemPropType[];
}

function CustomTable<RowType extends object = any>(props: CustomTableProps<RowType>): React.ReactElement {
  const [form] = Form.useForm();
  const search = () => {
    form.validateFields().then(res => {
      console.log('res', res);
    });
  };
  return (
    <div style={props.style}>
      {props.formItems && (
        <Form form={form}>
          <Row gutter={24}>
            {props.formItems.map((obj, index) => {
              return (
                <Col key={index} {...obj.colProp}>
                  <Form.Item {...obj.prop}>{mapFormItem({ prop: obj.insProp || {}, type: obj.type })}</Form.Item>
                </Col>
              );
            })}
          </Row>
          <div className="flex-row jus-end mb10">
            <Button onClick={search}>查询</Button>
          </div>
        </Form>
      )}
      <Table {...props.tableOptions} />
    </div>
  );
}

export default CustomTable;
