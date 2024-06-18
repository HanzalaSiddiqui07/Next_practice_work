'use client'
import { useTheme } from 'next-themes'
import React from 'react'
import {BsSun} from 'react-icons/bs'

export default function ThemeButton() {
    const {theme,setTheme}=useTheme()
  return (
    <button>
        <BsSun/>
    </button>
  )
}

