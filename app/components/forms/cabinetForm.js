import { submitHandler, changeHandler, asyncSend } from "../../funcs/"
import { useContext, useState } from "react"
import translation from "../../i18n/text.json"


export default function CabinetForm() {
  const defaultObj = { name: "", room: "hello" }
  const [itm, setItm] = useState(defaultObj)
  const lang = "mandarin"
  const handleSubmit = submitHandler(setItm, defaultObj,
    async () => {
      console.log(itm)
      await asyncSend(itm)
    })
  const handleChange = changeHandler(setItm, itm)
  const trans = translation[lang].translation

  return (
    <form onSubmit={handleSubmit}>
      <p className="text-3xl">{trans["cabinet"] || "Cabinet"}</p>
      <label className="block text-lg">{trans["name"] || "name"}</label>
      <input
        className="w-full pl-2 outline outline-1 rounded text-lg"
        value={itm.name}
        onChange={(e) => handleChange(e, "name")}></input>
      <label className="block text-lg">{trans["room"] || "room"}</label>
      <div className="mb-2">
        <select
          className="rounded-lg text-lg w-auto min-w-28 focus:border-1"
          name="" id="" value={itm.room}
          onChange={(e) => handleChange(e, "room")}>
          <option value="hi">hi</option>
          <option value="hello">hello</option>
          {/* <option value="lorem loremlorem loremlorem loremlorem lorem">lorem loremlorem loremlorem loremlorem lorem</option> */}
        </select>
      </div>
      <input className="w-full bg-gray-200 text-lg rounded-lg file:border-0 file:bg-gray-300 file:hover:bg-gray-50" type="file" />
      <div className="flex justify-end mt-2">
        <input className="mt-2 p-1 rounded bg-cyan-700 hover:bg-cyan-300 text-white"
          type="submit" />
      </div>
    </form>
  )
}
