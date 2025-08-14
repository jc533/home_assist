import translation from "../../i18n/text.json"
import { getAllRooms, getAllCabinets, getAllDrawers } from "../../actions/spaceActions.ts"
import { createBoxAction } from "../../actions/formActions"
import ImgBtn from "../imgBtn"

export default async function BoxForm() {
  const lang = "mandarin"
  const trans = translation[lang].translation
  const rooms = await getAllRooms()
  const cabinets = await getAllCabinets()
  const drawers = await getAllDrawers()
  return (
    <form action={createBoxAction}>
      <p className="text-3xl">{trans["box"] || "Box"}</p >
      <label className="block text-lg ">{trans["name"] || "name"}</label>
      <input
        name="name"
        className="w-full pl-2 outline outline-1 rounded text-lg"
      />
      <label className="block text-lg">{trans["room"] || "room"}</label>
      <div className="mb-2">
        <select
          className="rounded-lg text-lg w-auto min-w-28 focus:border-1"
          name="room" id="">
          {rooms.map((room) => <option key={room.id} value={room.id}>{room.name}</option>)}
        </select>
      </div>
      <label>{trans["cabinet"] || "cabinet"}</label>
      <div className="mb-2">
        <select
          className="rounded-lg text-lg w-auto min-w-28 focus:border-1"
          name="cabinet" id="">
          {cabinets.map((cabinet) => <option key={cabinet.id} value={cabinet.id}>{cabinet.name}</option>)}
        </select>
      </div>
      <label>{trans["drawer"] || "drawer"}</label>
      <div className="mb-2">
        <select
          className="rounded-lg text-lg w-auto min-w-28 focus:border-1"
          name="drawer" id="">
          {drawers.map((drawer) => <option key={drawer.id} value={drawer.id}>{drawer.name}</option>)}
        </select>
      </div>
      <ImgBtn />
      <div className="flex justify-end mt-2">
        <input className="mt-2 p-1 rounded bg-cyan-700 hover:bg-cyan-300 text-white"
          type="submit" />
      </div>
    </form>
  )
}

