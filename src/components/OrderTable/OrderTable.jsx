import React from 'react';
import { CardMiddle } from '../CardMiddle/CardMiddle'
import { queryData } from '../../common/queryData.js'
import { Table, Tag } from "antd"
const { Column } = Table;

export class OrderTable extends React.Component {

  state = { 
    order_data: JSON.parse(window.localStorage.getItem("order_data")),
    selectedRowKeys: [],
    queryInfo: {}
  }

  render() {
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    console.log("OrderTable------render");
    return (
      <>
        <CardMiddle hasSelected={this.state.selectedRowKeys} deleteClick={this.delete} addSuccess={this.add}/>
        <Table rowSelection={ rowSelection } dataSource={this.state.order_data}>
          <Column title="订单编号" dataIndex="order_id"/>
          <Column title="公司名称" dataIndex="company_name"/>
          <Column title="客户名称" dataIndex="customer_name"/>
          <Column title="订单日期" dataIndex="order_date"/>
          <Column
            title="订单状态"
            dataIndex="order_status"
            render={order_status => ( this.getStatus(order_status) )}/>
          <Column title="订单金额" dataIndex="order_amount"/>
        </Table>
      </>
    )
  }


  // 多选框回调
  onSelectChange = (selectedRowKeys) => {
    this.setState({ selectedRowKeys })
  }

  // 根据订单状态渲染不同的Tags
  getStatus = (order_status) => {
    if(order_status === "已提交") {
      return (
        <Tag color="blue" key={order_status}>
          {order_status}
        </Tag>
      )
    } else if(order_status === "审批通过") {
      return (
        <Tag color="green" key={order_status}>
          {order_status}
        </Tag>
      )
    } else {
      return (
        <Tag color="yellow" key={order_status}>
          {order_status}
        </Tag>
      )
    }
  }

  // 删除数据成功的回调，更新表格
  delete = (data) => {
    this.setState({
      order_data: data
    })
  }

  // 添加数据成功的回调，更新表格
  add = (data) => {
    this.setState({ 
      order_data: data 
    })
  }

  // 生命周期钩子
  static getDerivedStateFromProps(nextProps, prevState) {
    // 获取查询信息
    const { selected, idInputVal, nameInputVal } = nextProps.queryInfo
    // 获取上一个状态的查询信息
    const { preSelected, preIdInputVal, preNameInputVal } = prevState.queryInfo
    // 查询信息变化，更新表格
    if (selected !== preSelected || idInputVal !== preIdInputVal || nameInputVal !== preNameInputVal){
      const res = queryData(nextProps.queryInfo)
      // 返回 state 对象用于更新state
      return {
        order_data: res,
        queryInfo: nextProps.queryInfo
      }
    }
    return null;
  }
}