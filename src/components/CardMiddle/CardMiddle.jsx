import { AddDialog } from "../AddDialog/AddDialog";
import React from "react";
export class CardMiddle extends React.Component{

  state = { isVisible: false }

  render() {
    return (
      <div className="opr">
        <div id="add"  onClick={this.showModal}>
          <span className="iconfont icon-add-circle"></span>
          <span>新建</span>
        </div>
        <div id="delete" onClick={this.deleteClick}>
          <span className="iconfont icon-ashbin"></span>
          <span>删除</span>
        </div>
        <AddDialog isVisible={this.state.isVisible}  handleOk={this.addSuccess} handleCancel={this.closeModal}/>
      </div>
    )
  }

  // 删除数据
  deleteClick = () => {
    // 要删除的数据项的key值
    const keys = this.props.hasSelected
    // 从本地获取数据
    const data = JSON.parse(window.localStorage.getItem("order_data"))
    // 对应key值的数据赋值为0
    data.forEach((item, index) => {
      if(keys.includes(item.key)) {
        data[index] = 0
      }
    })
    // 存储新数据的数组
    const newData = []
    // 不为0的数据push到新数组中
    for(let i=0; i<data.length; i++) {
      if(data[i] !== 0) {
        newData.push(JSON.parse(window.localStorage.getItem("order_data"))[i])
      }
    }
    // 将新数据保存至本地
    window.localStorage.setItem("order_data", JSON.stringify(newData))
    // 发送删除事件给父组件
    this.props.deleteClick(newData)
  }

  // 添加数据
  addSuccess = (data) => {
    // 向父组件发送数据添加成功的事件，以更新视图
    this.props.addSuccess(data)
    this.setState({ isVisible: false })
  }

  //显示对话框
  showModal = () => {
    this.setState({ isVisible: true })
  }

  // 关闭对话框
  closeModal = () => {
    this.setState({ isVisible: false })
  }

}