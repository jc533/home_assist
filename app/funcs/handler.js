function submitHandler(setItm, defaultObj, func = () => { }) {
  return async (e) => {
    e.preventDefault()
    // await func()
    setItm(defaultObj)
  }
}
const changeHandler = (setItm, itm, func = () => { }) => (e, type) => {
  let nitm = { ...itm }
  nitm[type] = e.target.value
  func()
  setItm(nitm)
}
export { submitHandler, changeHandler }

