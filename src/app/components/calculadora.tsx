"use client"

import { useState } from "react"
import Display from "./display"
import Keyboard from "./keyboard"

const sumaRetiro: number = 0
export default function Calculadora (): React.ReactElement {
  const [texto, setTexto] = useState("")

  const pressEnter = (texto: number) => {}

  const pressCancelar = () => {
    setTexto("")
  }

  return (
    <div className="border-white w-45">
      <Display texto={texto} />
      <Keyboard />
    </div>
  )
}
