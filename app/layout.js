"use client"
import "./global.css"
import { createContext } from "react"
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
