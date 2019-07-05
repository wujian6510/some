import React from 'react';
import {
  Form, Input, Radio,
} from 'antd';

const { TextArea } = Input;
const RadioGroup = Radio.Group;

const renderFormItemDom = (item) => {
  const {
    name, type, placeholder, disabled,
  } = item;
  switch (type) {
    case 'input':
      return (
        <Input
          disabled={disabled}
          placeholder={placeholder}
        />
      );
    case 'radio':
      return (
        <RadioGroup>
          {
            item.options.map((option, optionIndex) => (
              <Radio value={option.value} key={name + optionIndex}>{option.label}</Radio>
            ))
          }
        </RadioGroup>
      );
    case 'textarea':
      return (
        <TextArea placeholder={placeholder} rows={4} />
      );
    default:
      return null;
  }
};

const createFormItem = (item, i, getFieldDecorator) => {
  const {
    name, label, required, type, errMsg, whitespace,
  } = item;
  if (type) {
    return (
      <Form.Item label={label} key={`form_item_${i}`}>
        {getFieldDecorator(name, {
          rules: [{
            required,
            message: errMsg,
            whitespace,
          }],
        })(
          renderFormItemDom(item),
        )}
      </Form.Item>
    );
  }
  return null;
};

export {
  createFormItem,
};
