'use client'
import { ThemeProvider } from 'next-themes'
import React, { useEffect, useState } from 'react'

export default function Providers({children}) {

  const [mount,setMount]=useState(false)

  useEffect(()=>{
    setMount(true)
  },[])

  if(!mount){
    return <>{children}</>
  }

  return (
    <ThemeProvider attribute='class' enableSystem>{children}</ThemeProvider>
  )
}
