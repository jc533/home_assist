'use client'
// import { isNotFoundError } from "next/dist/client/components/not-found"
import { useRouter } from 'next/navigation'
import { useState } from "react"
import translation from "../i18n/text.json"
import Navbar from '../components/navbar'
import { Msg } from '../components/msgbox'
import {
  RoomForm,
  CabinetForm,
  DrawerForm,
  BoxForm,
  ItemForm
} from '../components/forms'


const lang = "mandarin"

export default function Add() {
  return (
    <>
      <Navbar />
      <div className="relative my-10 px-6 pt-6 pb-6
          bg-slate-100 shadow-xl ring-1 ring-gray-900/5
          sm:mx-auto max-w-lg rounded-lg sm:px-10">
        <RoomForm />
        <CabinetForm />
        <DrawerForm />
        <BoxForm />
        <ItemForm />
        <Msg type="error" />
        <Msg type="success" />
      </div>
    </>
  )
}
// function timeout(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }
