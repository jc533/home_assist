const Msg = ({ type }) => {
  switch (type) {
    case "success":
      return <p className="m-1 p-2 bg-green-500 border-2 w-full text-lg rounded">sucess</p>
      break
    case "error":
      return <p className="m-1 p-2 bg-red-500 border-2 w-full text-lg rounded">error</p>
      break
  }
}
export { Msg }
