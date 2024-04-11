'use client'

import { isNotFoundError } from "next/dist/client/components/not-found"
import { useState } from "react"

export default function Add(){
    return (
        <>
        <RoomForm/>
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
const asyncSend = ()=>{

}
const RoomForm = ()=>{
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
            <h3>Room</h3>
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