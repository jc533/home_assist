'use client'
import { isNotFoundError } from "next/dist/client/components/not-found"
import { useRouter } from 'next/navigation'
import { useState } from "react"


export default function Form({children,defaultObj,submit}){
    const router = useRouter()
    const [itm,setItm] = useState(defaultObj)
    const handleSubmit = async (e)=>{
        e.preventDefault()
        setItm(defaultObj)
        await send(itm)
        router.push("/")
    }
    const handleChange = (e,type)=>{
        let nitm = {...itm}
        console.log(e.target.type)
        nitm[type] = e.target.value
        setItm(nitm)
    } 
    return (
        <form onSubmit={handleSubmit}>
            {children}
            <input type="submit" value="submit" />
        </form>
    )
}