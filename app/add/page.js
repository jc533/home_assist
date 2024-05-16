'use client'
// import { isNotFoundError } from "next/dist/client/components/not-found"
import { useRouter } from 'next/navigation'
import { useState } from "react"
import Form from "../components/form"

export default function Add(){
    return (
        <div className="relative my-10 px-6 pt-6 pb-6
         bg-slate-100 shadow-xl ring-1 ring-gray-900/5
        sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
            <RoomForm/>
            <CabinetForm/>
            <BoxForm/>
            <ItemForm/>
            <Msg type="error"/>
            <Msg type="success"/>
        </div>
    )
}
const Msg = ({type})=>{
    switch(type){
        case "success":
            return <p className="m-1 p-2 bg-green-500 border-2 w-full text-lg rounded">sucess</p>
            break
        case "error":
            return <p className="m-1 p-2 bg-red-500 border-2 w-full text-lg rounded">error</p>
            break
    }
}
function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const asyncSend = async (obj) => {
    console.log("store",obj)
    localStorage.setItem("db", JSON.stringify(obj))
    // await timeout(2000)
    console.log("stored!!!!")
}
const submitHandler = (setItm,defaultObj,func=()=>{})=>async(e)=>{
    e.preventDefault()
    await func()
    setItm(defaultObj)
}
const changeHaldler = (setItm,itm,func=()=>{})=>(e,type)=>{
    let nitm = {...itm}
    nitm[type] = e.target.value
    func()
    setItm(nitm)
}
const RoomForm = ()=>{
    const defaultObj = {name:"lorem"}
    const router = useRouter()
    const [itm,setItm] = useState(defaultObj)
    // const 
    const handleSubmit = submitHandler(setItm,defaultObj,async ()=>{await asyncSend(itm)})
    const handleChange = changeHaldler(setItm,itm)
    return (
        <form onSubmit={handleSubmit}>
            <p className="text-3xl">Room</p>
            <label className="block text-lg">name</label>
            <input
                className="w-full pl-2 outline outline-1 rounded text-lg"
                value={itm.name} 
                onChange={(e)=>handleChange(e,"name")}></input>
            <label className="block text-lg">image</label>
            <input className="w-full bg-gray-200 text-lg rounded-lg file:border-0 file:bg-gray-300 file:hover:bg-gray-50" 
            type="file" name="" id=""/>
            <div className="flex justify-end ">
            <input className="mt-2 p-1 rounded bg-cyan-700 hover:bg-cyan-300 text-white" 
            type="submit" value="submit" />
            </div>
        </form>
    )
}
const CabinetForm = ()=>{
    const defaultObj = {name:"",room:"hello"}
    const [itm,setItm] = useState(defaultObj)
    const handleSubmit = submitHandler(setItm,defaultObj,
        async ()=>{
            console.log(itm)
            await asyncSend(itm)
        })
    const handleChange = changeHaldler(setItm,itm)
    return (
        <form onSubmit={handleSubmit}>
            <p className="text-3xl">Cabinet</p>
            <label className="block text-lg">name</label>
            <input 
                className="w-full pl-2 outline outline-1 rounded text-lg"
                value={itm.name} 
                onChange={(e)=>handleChange(e,"name")}></input>
            <label className="block text-lg">room</label>
            <div className="mb-2">
            <select 
                className="rounded-lg text-lg w-auto min-w-28 focus:border-1"
                name="" id="" value={itm.room}
                onChange={(e)=>handleChange(e,"room")}>
                <option value="hi">hi</option>
                <option value="hello">hello</option>
                {/* <option value="lorem loremlorem loremlorem loremlorem lorem">lorem loremlorem loremlorem loremlorem lorem</option> */}
            </select>
            </div>
            <input className="w-full bg-gray-200 text-lg rounded-lg file:border-0 file:bg-gray-300 file:hover:bg-gray-50" type="file"/>
            <div className="flex justify-end mt-2">
                <input className="mt-2 p-1 rounded bg-cyan-700 hover:bg-cyan-300 text-white" 
                    type="submit" value="submit" />
            </div>
        </form>
    )
}
const BoxForm = ()=>{
    const defaultObj = {
        name:"",
        room:"hi",
        cabinet:"hello"
    }
    const router = useRouter()
    const [itm,setItm] = useState(defaultObj)
    const handleSubmit = submitHandler(setItm,defaultObj,async ()=>{await asyncSend(itm)})
    const handleChange = changeHaldler(setItm,itm)
    return (
        <form onSubmit={handleSubmit}>
            <p className="text-3xl">Box</p >
            <label className="block text-lg ">name</label>
            <input
                className="w-full pl-2 outline outline-1 rounded text-lg"
                value={itm.name} 
                onChange={(e)=>handleChange(e,"name")}></input>
            <label className="block text-lg">room</label>
            <div className="mb-2">
                <select
                    className="rounded-lg text-lg w-auto min-w-28 focus:border-1"
                    name="" id="" value={itm.room} 
                    onChange={(e)=>handleChange(e,"room")}>
                    <option value="hi">hi</option>
                    <option value="hello">hello</option>
                </select>
            </div>
            <label>cabinet</label>
            <div className="mb-2">
                <select 
                    className="rounded-lg text-lg w-auto min-w-28 focus:border-1"
                    name="" id="" value={itm.cabinet} 
                    onChange={(e)=>handleChange(e,"cabinet")}>
                    <option value="hi">hi</option>
                    <option value="hello">hello</option>
                </select>
            </div>
            <input 
                className="w-full bg-gray-200 text-lg rounded-lg file:border-0 file:bg-gray-300 file:hover:bg-gray-50" 
                type="file" name="" id=""/>
            <div className="flex justify-end mt-2">
            <input className="mt-2 p-1 rounded bg-cyan-700 hover:bg-cyan-300 text-white" 
                type="submit" value="submit" />
            </div>
        </form>
    )
}
const ItemForm = ()=>{
    const defaultObj = {
        name:"lorem",
        number:1,
        room:"hi",
        cabinent:"no",
        box:"hi",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus aut perferendis exercitationem delectus iusto, molestiae quam ratione magni eum necessitatibus laborum, deleniti numquam quibusdam veniam tempora nisi voluptatibus commodi porro."
    }
    const [itm,setItm] = useState(defaultObj)
    const handleSubmit = submitHandler(setItm,defaultObj,async ()=>{await asyncSend(itm)})
    const handleChange = changeHaldler(setItm,itm)
    return (
        <form onSubmit={handleSubmit}>
            <p className="text-3xl">Item</p>
            <label className="block text-lg">name</label>
            <input
                className="w-full pl-2 outline outline-1 rounded text-lg"
                value={itm.name} 
                onChange={(e)=>handleChange(e,"name")}></input>
            <label className="block text-lg">number</label>
            <input
                className="w-full pl-2 outline outline-1 rounded text-lg"
                type="number" value={itm.number} 
                onChange={(e)=>handleChange(e,"number")}></input>
            <label className="block text-lg">room</label>
            <div className="mb-2">
                <select 
                    className="rounded-lg text-lg w-auto min-w-28 focus:border-1"
                    name="" id="" value={itm.room} 
                    onChange={(e)=>handleChange(e,"room")}>
                    <option value="hi">hi</option>
                    <option value="hello">hello</option>
                </select>
            </div>
            <label className="block text-lg">cabinet</label>
            <div className="mb-2">
                <select
                    className="rounded-lg text-lg w-auto min-w-28 focus:border-1"
                    name="" id="" value={itm.cabinet} 
                    onChange={(e)=>handleChange(e,"cabinet")}>
                    <option value="hi">hi</option>
                    <option value="hello">hello</option>
                </select>
            </div>
            <label className="block text-lg">box</label>
            <div className="mb-2">
                <select 
                    className="rounded-lg text-lg w-auto min-w-28 focus:border-1"
                    name="" id="" value={itm.box} 
                    onChange={(e)=>handleChange(e,"box")}>
                    <option value="hi">hi</option>
                    <option value="hello">hello</option>
                </select>
            </div>
            <input className="w-full bg-gray-200 text-lg rounded-lg file:border-0 file:bg-gray-300 file:hover:bg-gray-50" type="file" name="" id=""/>
            <label className="block text-lg">description</label>
            <textarea
                className="w-full pl-2 outline outline-1 rounded text-lg"
                value={itm.description} 
                onChange={(e)=>handleChange(e,"description")}>
            </textarea>
            <div className="flex justify-end mt-2">
                <input className="mt-2 p-1 rounded bg-cyan-700 hover:bg-cyan-300 text-white"
                    type="submit" value="submit" />
            </div>
        </form>
    )
}