export function queryData(queryInfo) {
  // 解构获取查询信息
  const { idInputVal, selected, nameInputVal } = queryInfo
  // 获取本地数据
  const data = JSON.parse(window.localStorage.getItem("order_data"))
  // 查询结果
  let res = []
  // 订单编号，订单状态，公司名称都不为空时 ：111
  // 订单编号不为空
  if (idInputVal) {
    res = queryDataById(idInputVal, data) //100
    // 状态不为空
    if (selected) {
      res = queryDataByStatus(selected, res) // 110
      // 公司名称不为空
      if (nameInputVal) {
        res = queryDataByCompName(nameInputVal, res) // 111
      }
    } 
    // 状态为空
    else {
      // 公司名称不为空
      if (nameInputVal) {
        res = queryDataByCompName(nameInputVal, res) // 101
      }
    }
  } 
  // 订单编号为空
  else {
    // 状态不为空
    if (selected) {
      res = queryDataByStatus(selected, data) // 010
      // 公司名称不为空
      if (nameInputVal) {
        res = queryDataByCompName(nameInputVal, res) // 011
      }
    }
    // 状态为空 
    else {
      // 公司名称不为空
      if (nameInputVal) {
        res = queryDataByCompName(nameInputVal, res) // 001
      } 
      // 公司名称为空
      else {
        return data // 000
      }
    }
  }
  return res
}

// 根据 订单编号 模糊查询订单数据
function queryDataById(order_id, order_data) {
  return order_data.filter(item => {
    return item.order_id.indexOf(order_id) !== -1
  })
}

// 根据 订单状态 查询订单数据
function queryDataByStatus(order_status, order_data) {
  return order_data.filter(item => {
    return item.order_status === order_status
  })
}

// 根据 公司名称 查询订单数据
function queryDataByCompName(company_name, order_data) {
  return order_data.filter(item => {
    return item.company_name.indexOf(company_name) !== -1
  })
}