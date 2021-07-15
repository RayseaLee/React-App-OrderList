const order_date = function() {
  const date = new Date()
  const year = date.getFullYear()
  const mounth = (date.getMonth() + 1 + '').padStart(2, '0')
  const day = (date.getDate() + '').padStart(2, '0')
  const hh = (date.getHours() + '').padStart(2, '0')
  const mm = (date.getMinutes() + '').padStart(2, '0')
  const ss = (date.getSeconds() + '').padStart(2, '0')
  return `${year}-${mounth}-${day} ${hh}:${mm}:${ss}`
}()

export const columns = [
  {
    title: '订单编号',
    dataIndex: 'order_id',
    key: 'order_id',
  },
  {
    title: '公司名称',
    dataIndex: 'company_name',
    key: 'company_name',
  },
  {
    title: '客户名称',
    dataIndex: 'customer_name',
    key: 'customer_name',
  },
  {
    title: '订单日期',
    dataIndex: 'order_date',
    key: 'order_date',
  },
  {
    title: '订单状态',
    dataIndex: 'order_status',
    key: 'order_status',
  },
  {
    title: '订单金额',
    dataIndex: 'order_amount',
    key: 'order_amount',
  },
]

export const order_data = [
  {
    "key": 1,
    "order_id": "2021000101",
    "company_name": "测试-1",
    "customer_name": "C测试-1",
    "order_date": order_date,
    "order_status": "审批通过",
    "order_amount": "6",
  },
  {
    "key": 2,
    "order_id": "2021000102",
    "company_name": "测试-2",
    "customer_name": "C测试-2",
    "order_date": order_date,
    "order_status": "已提交",
    "order_amount": "66",
  },
  {
    "key": 3,
    "order_id": "2021000103",
    "company_name": "测试-3",
    "customer_name": "C测试-3",
    "order_date": order_date,
    "order_status": "新建",
    "order_amount": "666",
  },
  {
    "key": 4,
    "order_id": "2021000104",
    "company_name": "测试-4",
    "customer_name": "C测试-4",
    "order_date": order_date,
    "order_status": "新建",
    "order_amount": "66666",
  },
  {
    "key": 5,
    "order_id": "2021000104",
    "company_name": "测试-4",
    "customer_name": "C测试-4",
    "order_date": order_date,
    "order_status": "新建",
    "order_amount": "66666",
  },
  {
    "key": 6,
    "order_id": "2021000104",
    "company_name": "测试-4",
    "customer_name": "C测试-4",
    "order_date": order_date,
    "order_status": "新建",
    "order_amount": "66666",
  },
  {
    "key": 7,
    "order_id": "2021000104",
    "company_name": "测试-4",
    "customer_name": "C测试-4",
    "order_date": order_date,
    "order_status": "新建",
    "order_amount": "66666",
  },
  {
    "key": 8,
    "order_id": "2021000104",
    "company_name": "测试-4",
    "customer_name": "C测试-4",
    "order_date": order_date,
    "order_status": "新建",
    "order_amount": "66666",
  },
  // {
  //   "id": 5,
  //   "order_id": "2021000104",
  //   "company_name": "测试-4",
  //   "customer_name": "C测试-4",
  //   "order_date": order_date,
  //   "order_status": "新建",
  //   "order_amount": "66666",
  // },
  // {
  //   "id": 1,
  //   "order_id": "2021000101",
  //   "company_name": "测试-1",
  //   "customer_name": "C测试-1",
  //   "order_date": order_date,
  //   "order_status": "审批通过",
  //   "order_amount": "6",
  // },
  // {
  //   "id": 2,
  //   "order_id": "2021000102",
  //   "company_name": "测试-2",
  //   "customer_name": "C测试-2",
  //   "order_date": order_date,
  //   "order_status": "已提交",
  //   "order_amount": "66",
  // },
  // {
  //   "id": 3,
  //   "order_id": "2021000103",
  //   "company_name": "测试-3",
  //   "customer_name": "C测试-3",
  //   "order_date": order_date,
  //   "order_status": "新建",
  //   "order_amount": "666",
  // },
  // {
  //   "id": 4,
  //   "order_id": "2021000104",
  //   "company_name": "测试-4",
  //   "customer_name": "C测试-4",
  //   "order_date": order_date,
  //   "order_status": "新建",
  //   "order_amount": "66666",
  // },
  // {
  //   "id": 1,
  //   "order_id": "2021000101",
  //   "company_name": "测试-1",
  //   "customer_name": "C测试-1",
  //   "order_date": order_date,
  //   "order_status": "审批通过",
  //   "order_amount": "6",
  // },
  // {
  //   "id": 2,
  //   "order_id": "2021000102",
  //   "company_name": "测试-2",
  //   "customer_name": "C测试-2",
  //   "order_date": order_date,
  //   "order_status": "已提交",
  //   "order_amount": "66",
  // },
  // {
  //   "id": 3,
  //   "order_id": "2021000103",
  //   "company_name": "测试-3",
  //   "customer_name": "C测试-3",
  //   "order_date": order_date,
  //   "order_status": "新建",
  //   "order_amount": "666",
  // },
  // {
  //   "id": 4,
  //   "order_id": "2021000104",
  //   "company_name": "测试-4",
  //   "customer_name": "C测试-4",
  //   "order_date": order_date,
  //   "order_status": "新建",
  //   "order_amount": "66666",
  // },
]