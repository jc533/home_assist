"use client"
import { useState, useEffect, useTransition, use } from "react"
import translation from "../../i18n/text.json"
import { getAllRooms, getAllCabinets, getAllDrawers, getAllBoxes } from "../../actions/spaceActions.ts"
import { createRoomAction, createCabinetAction, createDrawerAction, createBoxAction, createItemAction } from "../../actions/formActions"
import ImgBtn from "../imgBtn"
import MultiSelect from "./multiSelect.js"


export default function Form({ name, func }) {

  const lang = "mandarin"
  const levels = { "room": 0, "cabinet": 1, "drawer": 2, "box": 3, "item": 4 }
  const formActon = {
    "add": {
      "room": createRoomAction,
      "cabinet": createCabinetAction,
      "drawer": createDrawerAction,
      "box": createBoxAction,
      "item": createItemAction
    }
  }

  const [rooms, setRooms] = useState([])
  useEffect(() => {
    (async () => {
      const data = await getAllRooms()
      setRooms(data)
    })()
  }, [])
  const trans = translation[lang].translation
  const [isPending, startTransition] = useTransition();

  return (
    <form action={formActon[func][name.toLowerCase()]}>
      <p className="text-3xl">{trans[name.toLowerCase()] || name}</p>
      <label className="block text-lg">{trans["name"] || "name"}</label>
      <input
        className="w-full pl-2 outline outline-1 rounded text-lg"
        name="name" />
      {name.toLowerCase() == "item" &&
        <>
          <label className="block text-lg">{trans["number"] || "number"}</label>
          <input
            className="w-full pl-2 outline outline-1 rounded text-lg"
            type="number"
            name="number"
            defaultValue={1}
          />
        </>
      }
      <MultiSelect
        rooms={rooms}
        isPending={isPending}
        startTransition={startTransition}
        level={levels[name.toLowerCase()]}
        trans={trans}
      />
      <label className="block text-lg">{trans["image"] || "image"}</label>
      <ImgBtn />
      <label className="block text-lg">{trans["description"] || "description"}</label>
      <textarea
        name="description"
        className="w-full pl-2 outline outline-1 rounded text-lg">
      </textarea>
      <div className="flex justify-end mt-2">
        <input className="mt-2 p-1 rounded bg-cyan-700 hover:bg-cyan-300 text-white"
          type="submit" disabled={isPending} />
      </div>
    </form>
  )
}
