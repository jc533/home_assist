import { useRouter } from "next/router"
import { submitHandler, changeHandler, asyncSend } from "../../funcs/"
import { useContext, useState } from "react"
import translation from "../../i18n/text.json"




export default function RoomForm() {
  const defaultObj = { name: "lorem" }
  const lang = "mandarin"
  // const router = useRouter()
  const [itm, setItm] = useState(defaultObj)
  const handleSubmit = submitHandler(setItm, defaultObj, async () => { await asyncSend(itm) })
  const handleChange = changeHandler(setItm, itm)
  const trans = translation[lang].translation
  return (
    <form onSubmit={handleSubmit}>
      <p className="text-3xl">{
        trans["room"]
        || "Room"}</p>
      <label className="block text-lg">{trans["name"] || "name"}</label>
      <input
        className="w-full pl-2 outline outline-1 rounded text-lg"
        value={itm.name}
        onChange={(e) => handleChange(e, "name")}></input>
      <label className="block text-lg">{trans["image"] || "image"}</label>
      <input className="w-full bg-gray-200 text-lg rounded-lg file:border-0 file:bg-gray-300 file:hover:bg-gray-50"
        type="file" name="" id="" />
      <div className="flex justify-end">
        <input className="mt-2 p-1 rounded bg-cyan-700 hover:bg-cyan-300 text-white"
          type="submit" />
      </div>
    </form>
  )
}
