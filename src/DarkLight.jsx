import "./DarkLight.css"
import { useState  , useEffect } from "react"

export default function DarkLight() {
    let [isDark , setIsDark] = useState(false)

    useEffect(()=> {
            document.body.className = isDark ? "dark" : "light"
    } , [isDark])

    const ToggleMode = ()=> {
        setIsDark(!isDark)
    }   


    return (
        <p onClick={ToggleMode}>
            {   
                isDark ? (
                    <button>Light</button> 
                ) : (
                    <button>Dark</button>
                )
            }
        </p>
    )
}