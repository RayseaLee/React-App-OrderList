import React from 'react';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import moment from 'moment';
import 'moment/locale/zh-cn';
import {
  Input,
  Select
} from 'antd';
const { Option } = Select;
moment.locale('zh-cn');



export class CardTop extends React.Component {
  state = {
    selected: '',
    idInputVal: '',
    nameInputVal: ''
  }
  render() {
    return (
      <>
        <div className="card-top-left">
          <div>
            <span>订单编号:</span>
            <Input onChange={ e => { this.handleInputChange(e, "id")} } id="order_num" type="text" />
          </div>
          <div className="order_status">
            <span>订单状态:</span>
            <Select style={{ width: 120 }} onChange={this.handleChange} showArrow={false} allowClear>
              <Option value="审批通过">审批通过</Option>
              <Option value="已提交">已提交</Option>
              <Option value="新建">新建</Option>
            </Select>
            <span className="iconfont icon-arrow-down-bold"></span>
          </div>
          <div className="comp_name">
            <span>公司名称:</span>
            <Input onChange={ e => { this.handleInputChange(e, "name")} }  type="text" />
            <span className="iconfont icon-search"></span>
          </div>
        </div>
        <div className="card-top-right">
          <button id="more">
            更多
            <span className="iconfont icon-arrow-down-bold"></span>
          </button>
          <button id="reset">重置</button>
          <button id="query" onClick={this.queryClick}>查询</button>
        </div>
      </>
    )
  }

  // 选择器改变回调
  handleChange = (value) => {
    this.setState({
      selected: value
    })
    console.log(`selected ${value}`);
  }

  // 输入框改变回调
  handleInputChange = (event, str) => {
    if (str === 'id') {
      this.setState({
        idInputVal: event.target.value
      })
    } else if (str === 'name') {
      this.setState({
        nameInputVal: event.target.value
      })
    } 
  }

  // 查询数据
  queryClick = () => {
    this.props.queryClick(this.state)
  }

}