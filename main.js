function insert(num) {
  let inputValue = document.form.textview.value
  document.form.textview.value = inputValue + num
}
function clean() {
  document.form.textview.value = ''
}
function back() {
  let exp = document.form.textview.value
  document.form.textview.value = exp.substring(0, exp.length - 1)
}
function radic() {
  let exp = document.form.textview.value
  if (exp) {
    document.form.textview.value = Math.sqrt(exp)
  }
}
function equal() {
  let exp = document.form.textview.value
  if (exp) {
    document.form.textview.value = eval(exp)
  }
}
