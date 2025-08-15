"use client"
import { useState } from "react"
import { getAllRooms, getAllCabinets, getAllDrawers, getAllBoxes } from "../../actions/spaceActions.ts"

export default function MultiSelect({ trans, level, rooms, isPending, startTransition }) {
  const [cabinets, setCabinets] = useState([])
  const [drawers, setDrawers] = useState([])
  const [boxes, setBoxes] = useState([])

  const [selectedRoom, setSelectedRoom] = useState('')
  const [selectedCabinet, setSelectedCabinet] = useState('')
  const [selectedDrawer, setSelectedDrawer] = useState('')
  const [selectedBox, setSelectedBox] = useState('')

  const handleRoomChange = async (e) => {
    setSelectedRoom(e.target.value)
    setSelectedCabinet('')
    setSelectedDrawer('')
    setSelectedBox('')

    startTransition(async () => {
      const data = await getAllCabinets({ roomId: e.target.value })
      setCabinets(data)
    })
  }

  const handleCabinetChange = async (e) => {
    setSelectedCabinet(e.target.value)
    setSelectedDrawer('')
    setSelectedBox('')

    startTransition(async () => {
      const data = await getAllDrawers({ cabinetId: e.target.value })
      setDrawers(data)
    })
  }

  const handleDrawerChange = async (e) => {
    setSelectedDrawer(e.target.value)
    setSelectedBox('')

    startTransition(async () => {
      const data = await getAllBoxes({ drawerId: e.target.value })
      setBoxes(data)
    })
  }




  return <div>
    {level > 0 && <>
      <label className="block text-lg">{trans["room"] || "room"}</label>
      <div className="mb-2">
        <select onChange={handleRoomChange}
          className="rounded-lg text-lg w-auto min-w-28 focus:border-1"
          name="room" id="">
          <option value="">--</option>
          {rooms.map((room) => <option key={room.id} value={room.id}>{room.name}</option>)}
        </select>
      </div>
    </>}
    {level > 1 && <>
      <label className="block text-lg">{trans["cabinet"] || "cabinet"}</label>
      <div className="mb-2">
        <select onChange={handleCabinetChange}
          className="rounded-lg text-lg w-auto min-w-28 focus:border-1"
          name="cabinet" id="">
          <option value="">--</option>
          {cabinets.map((cabinet) => <option key={cabinet.id} value={cabinet.id}>{cabinet.name}</option>)}
        </select>
      </div>
    </>
    }
    {
      level > 2 && <>
        <label className="block text-lg">{trans["drawer"] || "drawer"}</label>
        <div className="mb-2">
          <select onChange={handleDrawerChange}
            className="rounded-lg text-lg w-auto min-w-28 focus:border-1"
            name="drawer" id="" >
            <option value="">--</option>
            {drawers.map((drawer) => <option key={drawer.id} value={drawer.id}>{drawer.name}</option>)}
          </select>
        </div>
      </>}
    {level > 3 && <>
      <label className="block text-lg">{trans["box"] || "box"}</label>
      <div className="mb-2">
        <select
          className="rounded-lg text-lg w-auto min-w-28 focus:border-1"
          name="box" id="">
          <option value="">--</option>
          {boxes.map((box) => <option key={box.id} value={box.id}>{box.name}</option>)}
        </select>
      </div>
    </>}
  </div>
}
