'use client'

import { isNotFoundError } from "next/dist/client/components/not-found"
import { useRouter } from 'next/navigation'
import { useState } from "react"

export default function Add(){
    return (
        <>
        <RoomForm/>
        <CabinetForm/>
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
const asyncSend = async (obj) => {
    localStorage.setItem("db", JSON.stringify(obj))
}
const handleSubmit = async (e) => {
    console.log(itm)
    e.preventDefault()
    setItm(defaultObj)
    await asyncSend(itm)
    router.push("/")
}
const CabinetForm = ()=>{
    const [itm,setItm] = useState({
        name:"lorem"
    })
    const handleSubmit = (e)=>{
        console.log(itm)
        e.preventDefault()
    }
    const handleChange = (e,type)=>{
        // alert()
        let nitm = {...itm}
        nitm[type] = e.target.value
        setItm(nitm)
    } 
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

const RoomForm = ()=>{
    const defaultObj = {name:""}
    const router = useRouter()
    const [itm,setItm] = useState({
        name:"lorem"
    })
    // const handleSubmit = async (e)=>{
    //     console.log(itm)
    //     e.preventDefault()
    //     setItm(defaultObj)
    //     await asyncSend(itm)
    //     router.push("/")
    // }
    const handleChange = (e,type)=>{
        // alert()
        let nitm = {...itm}
        nitm[type] = e.target.value
        setItm(nitm)
    } 
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
    const [itm,setItm] = useState({
        name:"lorem",
        number:1,
        room:"hi",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus aut perferendis exercitationem delectus iusto, molestiae quam ratione magni eum necessitatibus laborum, deleniti numquam quibusdam veniam tempora nisi voluptatibus commodi porro."
        
    })
    const handleSubmit = (e)=>{
        console.log(itm)
        e.preventDefault()
    }
    const handleChange = (e,type)=>{
        // alert()
        let nitm = {...itm}
        nitm[type] = e.target.value
        setItm(nitm)
    } 
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