"use client"

import React, { useState } from 'react'
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

const Theme = () => {
    const { theme, setTheme } = useTheme()
    return (
        (theme === "dark") ? <button onClick={() => setTheme("light")}><SunIcon /></button> : <button onClick={() => setTheme("dark")}><MoonIcon /></button>
    )
}

export default Theme