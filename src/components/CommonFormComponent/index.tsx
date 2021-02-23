import { Input, Select } from 'antd';
import React from 'react';

export type insType = 'input' | 'select';

type FormItemType = {
  prop: object;
  type: insType;
  options?: any[];
};

function mapFormItem(config: FormItemType): React.ReactElement {
  const { prop, type } = config;
  const Comp: React.ReactElement | undefined = {
    input: <Input {...prop} />,
    select: (
      <Select {...prop}>
        {config.options &&
          config.options.map(obj => {
            return (
              <Select.Option key={obj.value} {...obj}>
                {obj.label}
              </Select.Option>
            );
          })}
      </Select>
    ),
  }[type];
  return Comp;
}

export default mapFormItem;
