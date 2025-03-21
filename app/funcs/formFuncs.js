const asyncSend = async (obj) => {
  console.log("store", obj)
  localStorage.setItem("db", JSON.stringify(obj))
  // await timeout(2000)
  console.log("stored!!!!")
}
export { asyncSend }
