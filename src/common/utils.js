/**
 * 日期格式化
 * @param {Date} date 日期
 * @returns {String} 格式化后的日期yyyy-mm-dd hh:mm:ss
 */
export function formatDate(date) {
  const year = date.getFullYear()
  const mounth = (date.getMonth() + 1 + '').padStart(2, '0')
  const day = (date.getDate() + '').padStart(2, '0')
  const hh = (date.getHours() + '').padStart(2, '0')
  const mm = (date.getMinutes() + '').padStart(2, '0')
  const ss = (date.getSeconds() + '').padStart(2, '0')
  return `${year}-${mounth}-${day} ${hh}:${mm}:${ss}`
}