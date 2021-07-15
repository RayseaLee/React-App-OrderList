import React from 'react';
import { Form, Input, Select, InputNumber } from 'antd';
const { Option } = Select;
// 表单位置
const layout = {
  labelCol: {
    span: 5,
  },
  wrapperCol: {
    span: 18,
  },
};

export class AddForm extends React.Component {

  // 表单的ref
  formRef = React.createRef()

  render() {
    return (
      <Form {...layout} ref={this.formRef} name="control-ref" onFinish={this.onFinish}>
        <Form.Item name="order_id" label="订单编号" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="company_name" label="公司名称" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="customer_name" label="客户名称" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="order_status" label="订单状态"
          rules={[{required: true}]}>
          <Select placeholder="选择订单状态" onChange={this.onGenderChange} allowClear>
            <Option value="审批通过">审批通过</Option>
            <Option value="已提交">已提交</Option>
            <Option value="新建">新建</Option>
          </Select>
        </Form.Item>
        <Form.Item name="order_amount" label="订单金额" rules={[{  required: true , type: 'number', min: 0}]}>
          <InputNumber style={{ width: '100%' }}/>
        </Form.Item>
      </Form>
    );
  }
}
