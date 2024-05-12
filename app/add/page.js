'use client'

import { isNotFoundError } from "next/dist/client/components/not-found"
import { useRouter } from 'next/navigation'
import { useState } from "react"
import Form from "../components/form"

export default function Add(){
    return (
        <>
        <RoomForm/>
        <CabinetForm/>
        <BoxForm/>
        <ItemForm/>
        <Msg/>
        </>
    )
}
const Msg = ()=>{
    return (
        <>
        <p>sucess</p>
        <p>error</p>
        </>
    )
}
function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const asyncSend = async (obj) => {
    console.log("store")
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

const CabinetForm = ()=>{
    const defaultObj = {name:""}
    const [itm,setItm] = useState({
        name:"lorem"
    })
    const handleSubmit = submitHandler(setItm,defaultObj,
        async ()=>{await asyncSend(itm)})
    const handleChange = changeHaldler(setItm,itm)
    return (
        <form onSubmit={handleSubmit}>
            <h3>Cabinet</h3>
            <label>name</label>
            <input 
                value={itm.name} 
                onChange={(e)=>handleChange(e,"name")}></input>
            {/* <br/> */}
            <input type="submit" value="submit" />
        </form>
    )
}
const BoxForm = ()=>{
    const defaultObj = {name:""}
    const router = useRouter()
    const [itm,setItm] = useState({
        name:"lorem"
    })
    const handleSubmit = submitHandler(setItm,defaultObj,async ()=>{await asyncSend(itm)})
    const handleChange = changeHaldler(setItm,itm)
    return (
        <form onSubmit={handleSubmit}>
            <h3>Room</h3>
            <label>name</label>
            <input 
                value={itm.name} 
                onChange={(e)=>handleChange(e,"name")}></input>
            {/* <br/> */}
            <select name="" id="">
                <option value="test">test</option>
            </select>
            <input type="submit" value="submit" />
        </form>
    )
}
const RoomForm = ()=>{
    const defaultObj = {name:""}
    const router = useRouter()
    const [itm,setItm] = useState({
        name:"lorem"
    })
    // const 
    const handleSubmit = submitHandler(setItm,defaultObj,async ()=>{await asyncSend(itm)})
    const handleChange = changeHaldler(setItm,itm)
    return (
        <form onSubmit={handleSubmit}>
            <h3>Room</h3>
            <label>name</label>
            <input 
                value={itm.name} 
                onChange={(e)=>handleChange(e,"name")}></input>
            {/* <br/> */}
            <input type="submit" value="submit" />
        </form>
    )
}
const ItemForm = ()=>{
    const defaultObj = {
        name:"lorem",
        number:1,
        room:"hi",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus aut perferendis exercitationem delectus iusto, molestiae quam ratione magni eum necessitatibus laborum, deleniti numquam quibusdam veniam tempora nisi voluptatibus commodi porro."
    }
    const [itm,setItm] = useState({
        name:"lorem",
        number:1,
        room:"hi",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus aut perferendis exercitationem delectus iusto, molestiae quam ratione magni eum necessitatibus laborum, deleniti numquam quibusdam veniam tempora nisi voluptatibus commodi porro."
        
    })
    const handleSubmit = submitHandler(setItm,defaultObj,async ()=>{await asyncSend(itm)})
    const handleChange = changeHaldler(setItm,itm)
    return (
        <form onSubmit={handleSubmit}>
            <h3>Item</h3>
            <label>name</label>
            <input 
                value={itm.name} 
                onChange={(e)=>handleChange(e,"name")}></input>
            <br/>
            <label>number</label>
            <input 
                type="number" value={itm.number} 
                onChange={(e)=>handleChange(e,"number")}></input>
            <br/>
            <label>room</label>
            <select 
                name="" id="" value={itm.room} 
                onChange={(e)=>handleChange(e,"room")}>
                <option value="hi">hi</option>
                <option value="hello">hello</option>
            </select>
            <br/>
            <label>description</label>
            <textarea 
                value={itm.description} 
                onChange={(e)=>handleChange(e,"description")}>
            </textarea>
            <input type="submit" value="submit" />
        </form>
    )
}