'use client'
import { useTheme } from 'next-themes'
import React from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'

export default function ThemeButton() {
    const { theme, setTheme } = useTheme()
    console.log(theme)
    return (
        <button onClick={()=>setTheme(theme==='light'?'dark':'light')}>
            {theme === 'light' ? (<BsMoon />) : (<BsSun />)}
        </button>
    )
}
