let defaultCity = '北京'
// try catch防止浏览器关闭localStorage导致异常
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

export default {
  city: defaultCity
}
