import React from 'react';
import { formatDate } from '../../common/utils.js'
import { Modal } from 'antd';
import { AddForm } from '../AddForm/AddForm';

export class AddDialog extends React.Component{

  render() {
    return (
      <>
        <Modal title="添加新的订单" visible={this.props.isVisible} onOk={this.handleOk} onCancel={this.handleCancel}>
          {/* 给ref一个回调函数，用于获取子组件的ref标识 */}
          <AddForm ref={ (form) => {this.formRef = form} }/>
        </Modal>
      </>
    )
  }

  // 将要废弃的钩子
  // UNSAFE_componentWillReceiveProps(props) {
  //   this.setState({isModalVisible: props.isVisible})
  // }
  /**
   * 踩坑笔记：
   * 
   * 错误思路：
   *    刚开始将 isVisible 作为了对话框的内部状态，而父组件需要改变这个状态，所以采用的不太适合的解决办法：
   * 用生命周期钩子 getDerivedStateFromProps 来判断下一个 props 和之前的 state来控制 isVisible
   * 
   * 正确思路：
   *    控制对话框显示的状态不应该用做其内部状态，而是应该通过其父组件 props 传值控制，
   * 状态需要改变的时候发送事件给父组件进行回调改变状态
   * 
   */
  // 生命周期钩子 
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   if (nextProps.isVisible !== prevState.isModalVisible) {
  //     return {
  //       isModalVisible: nextProps.isVisible,
  //     };
  //   }
  //   return null;
  // }

  // 点击确认按钮
  handleOk = () => {
    // 检验表单
    this.formRef.formRef.current.validateFields().then(values => {
      const data = values
      // 将数据中的key设为时间戳
      data.key = new Date().getTime()
      // 格式化日期时间戳
      data.order_date = formatDate(new Date())
      // 获取本地的数据
      const order_data = JSON.parse(window.localStorage.getItem("order_data"))
      // 表单数据加入本地
      order_data.push(data)
      window.localStorage.setItem("order_data", JSON.stringify(order_data))
      // 给父组件发送确认点击成功事件
      this.props.handleOk(order_data)
      // 重置表单
      this.formRef.formRef.current.resetFields()
    }).catch(err => {
      console.log(err);
    })
  }
  // 点击取消按钮
  handleCancel = () => {
    // 给父组件发送关闭事件
    this.props.handleCancel()
    // 重置表单
    this.formRef.formRef.current.resetFields()
  }
  
};
