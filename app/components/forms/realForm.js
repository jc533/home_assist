import { getAllRooms } from "../../actions/spaceActions.ts"
import FormWithRoom from "./form.js"


export default async function Form({ name, func }) {
  const rooms = await getAllRooms()
  return <FormWithRoom name={name} func={func} rooms={rooms} />
}
