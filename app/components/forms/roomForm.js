import { createRoomAction } from "../../actions/formActions"
import translation from "../../i18n/text.json"
import ImgBtn from "../imgBtn"




export default function RoomForm() {
  const defaultObj = { name: "lorem" }
  const lang = "mandarin"
  // const router = useRouter()
  const trans = translation[lang].translation
  return (
    <form action={createRoomAction}>
      <p className="text-3xl">{
        trans["room"]
        || "Room"}</p>
      <label className="block text-lg">{trans["name"] || "name"}</label>
      <input
        className="w-full pl-2 outline outline-1 rounded text-lg"
        name="name"></input>
      <label className="block text-lg">{trans["image"] || "image"}</label>
      <ImgBtn />
      <div className="flex justify-end">
        <input className="mt-2 p-1 rounded bg-cyan-700 hover:bg-cyan-300 text-white"
          type="submit" />
      </div>
    </form>
  )
}
