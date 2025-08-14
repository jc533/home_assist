import translation from "../../i18n/text.json"
import { createCabinet, getAllRooms } from "../../actions/spaceActions.ts"
import { createCabinetAction } from "../../actions/formActions"


export default async function CabinetForm() {
  const defaultObj = { name: "", room: "hello" }
  const rooms = await getAllRooms()
  const lang = "mandarin"
  const trans = translation[lang].translation

  return (
    <form action={createCabinetAction}>
      <p className="text-3xl">{trans["cabinet"] || "Cabinet"}</p>
      <label className="block text-lg">{trans["name"] || "name"}</label>
      <input
        name="name"
        className="w-full pl-2 outline outline-1 rounded text-lg"
      />
      <label className="block text-lg">{trans["room"] || "room"}</label>
      <div className="mb-2">
        <select
          className="rounded-lg text-lg w-auto min-w-28 focus:border-1"
          name="room" id="">
          {rooms.map((room) => {
            return <option key={room.id} value={room.id}>{room.name}</option>
          })}
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
