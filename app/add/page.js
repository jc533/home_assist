// import { isNotFoundError } from "next/dist/client/components/not-found" import translation from "../i18n/text.json"
import Navbar from '../components/navbar'
import { Msg } from '../components/msgbox'
import {
  Form
} from '../components/forms'


const lang = "mandarin"

export default function Add() {
  return (
    <>
      <Navbar />
      <div className="relative my-10 px-6 pt-6 pb-6
          bg-slate-100 shadow-xl ring-1 ring-gray-900/5
          sm:mx-auto max-w-lg rounded-lg sm:px-10">
        <Form func="add" name="Room" />
        <Form func="add" name="Cabinet" />
        <Form func="add" name="Drawer" />
        <Form func="add" name="Box" />
        <Form func="add" name="Item" />
        <Msg type="error" />
        <Msg type="success" />
      </div>
    </>
  )
}
// function timeout(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }
