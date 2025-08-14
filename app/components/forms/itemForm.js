import translation from "../../i18n/text.json"
import { getAllRooms, getAllCabinets, getAllDrawers, getAllBoxes } from "../../actions/spaceActions.ts"
import { createItemAction } from "../../actions/formActions"

export default async function ItemForm() {
  const lang = "mandarin"
  const rooms = await getAllRooms()
  const cabinets = await getAllCabinets()
  const drawers = await getAllDrawers()
  const boxes = await getAllBoxes()
  const trans = translation[lang].translation
  return (
    <form action={createItemAction}>
      <p className="text-3xl">{trans["item"] || "Item"}</p>
      <label className="block text-lg">{trans["name"] || "name"}</label>
      <input
        className="w-full pl-2 outline outline-1 rounded text-lg"
        name="name" />
      <label className="block text-lg">{trans["number"] || "number"}</label>
      <input
        className="w-full pl-2 outline outline-1 rounded text-lg"
        type="number"
        name="number"
        defaultValue={1}
      />
      <label className="block text-lg">{trans["room"] || "room"}</label>
      <div className="mb-2">
        <select
          className="rounded-lg text-lg w-auto min-w-28 focus:border-1"
          name="room" id="">
          {rooms.map((room) => <option key={room.id} value={room.id}>{room.name}</option>)}
        </select>
      </div>
      <label className="block text-lg">{trans["cabinet"] || "cabinet"}</label>
      <div className="mb-2">
        <select
          className="rounded-lg text-lg w-auto min-w-28 focus:border-1"
          name="cabinet" id="">
          {cabinets.map((cabinet) => <option key={cabinet.id} value={cabinet.id}>{cabinet.name}</option>)}
        </select>
      </div>
      <label className="block text-lg">{trans["drawer"] || "drawer"}</label>
      <div className="mb-2">
        <select
          className="rounded-lg text-lg w-auto min-w-28 focus:border-1"
          name="drawer" id="" >
          {drawers.map((drawer) => <option key={drawer.id} value={drawer.id}>{drawer.name}</option>)}
        </select>
      </div>

      <label className="block text-lg">{trans["box"] || "box"}</label>
      <div className="mb-2">
        <select
          className="rounded-lg text-lg w-auto min-w-28 focus:border-1"
          name="box" id="">
          {boxes.map((box) => <option key={box.id} value={box.id}>{box.name}</option>)}
        </select>
      </div>
      <input className="w-full bg-gray-200 text-lg rounded-lg file:border-0 file:bg-gray-300 file:hover:bg-gray-50" type="file" name="" id="" />
      <label className="block text-lg">{trans["description"] || "description"}</label>
      <textarea
        name="description"
        className="w-full pl-2 outline outline-1 rounded text-lg">
      </textarea>
      <div className="flex justify-end mt-2">
        <input className="mt-2 p-1 rounded bg-cyan-700 hover:bg-cyan-300 text-white"
          type="submit" />
      </div>
    </form>
  )
}
