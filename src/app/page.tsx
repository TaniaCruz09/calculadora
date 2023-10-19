'use client'
import React, { useState } from "react"
import * as math from 'mathjs'

export default function App () {
  const [display, setDisplay] = useState("0")

  function updateDisplay (token: string) {
    if (display === "0" || display === "Error") {
      setDisplay(token)
    } else {
      setDisplay(display + token)
    }
  }

  function calculate () {
    try {
      const result = math.evaluate(display) // Utilizamos math.js para calcular la expresión
      setDisplay(result.toString()) // Muestra el resultado en el display
    } catch (error) {
      setDisplay("Error")
    }
  }

  return (
    <section className="bg-gray-500 w-screen h-screen justify-center items-center flex flex-col">
      <div className="sm:hidden">
      Por favor, agrande la ventana de su aplicación para ver esta aplicación.
      </div>
      <div className="hidden sm:block App w-3/4 bg-gray-300 p-5 bg-gradient-to-t rounded shadow">
        <h1 className="text-center sm:text-3xl font-bold text-black">Calculadora</h1>
        <div className="bg-gray-300 p-2 my-4">{display}</div>
        <div className="flex justify-between my-3">
          <button
            onClick={() => updateDisplay("7")}
            className="p-2 bg-gray-500 w-20 rounded-xl border-2 border-gray-500 shadow-md"
          >
            7
          </button>
          <button
            onClick={() => updateDisplay("8")}
            className="p-2 bg-gray-500 w-20 rounded-xl border-2 border-gray-500 shadow-md"
          >
            8
          </button>
          <button
            onClick={() => updateDisplay("9")}
            className="p-2 bg-gray-500 w-20 rounded-xl border-2 border-gray-500 shadow-md"
          >
            9
          </button>
          <button
            onClick={() => updateDisplay("/")}
            className="p-2 bg-orange-300 font-bold w-20 rounded-xl border-2 border-gray-500 shadow-md"
          >
            ÷
          </button>
        </div>
        <div className="flex justify-between my-3">
          <button
            onClick={() => updateDisplay("4")}
            className="p-2 bg-gray-500 w-20 rounded-xl border-2 border-gray-500 shadow-md"
          >
            4
          </button>
          <button
            onClick={() => updateDisplay("5")}
            className="p-2 bg-gray-500 w-20 rounded-xl border-2 border-gray-500 shadow-md"
          >
            5
          </button>
          <button
            onClick={() => updateDisplay("6")}
            className="p-2 bg-gray-500 w-20 rounded-xl border-2 border-gray-500 shadow-md"
          >
            6
          </button>
          <button
            onClick={() => updateDisplay("*")}
            className="p-2 bg-orange-300 font-bold w-20 rounded-xl border-2 border-gray-500 shadow-md"
          >
            ×
          </button>
        </div>
        <div className="flex justify-between my-3">
          <button
            onClick={() => updateDisplay("1")}
            className="p-2 bg-gray-500 w-20 rounded-xl border-2 border-gray-500 shadow-md"
          >
            1
          </button>
          <button
            onClick={() => updateDisplay("2")}
            className="p-2 bg-gray-500 w-20 rounded-xl border-2 border-gray-500 shadow-md"
          >
            2
          </button>
          <button
            onClick={() => updateDisplay("3")}
            className="p-2 bg-gray-500 w-20 rounded-xl border-2 border-gray-500 shadow-md"
          >
            3
          </button>
          <button
            onClick={() => updateDisplay("-")}
            className="p-2 bg-orange-300 font-bold w-20 rounded-xl border-2 border-gray-500 shadow-md"
          >
            -
          </button>
        </div>
        <div className="flex justify-between my-3">
          <button
            onClick={() => updateDisplay("0")}
            className="p-2 bg-gray-500 w-20 rounded-xl border-2 border-gray-500 shadow-md"
          >
            0
          </button>
          <button
            onClick={() => setDisplay("Please press button")}
            className="p-2 bg-gray-500 w-20 rounded-xl border-2 border-gray-500 shadow-md text-white"
          >
            C
          </button>
          <button
            onClick={calculate}
            className="p-2 bg-gray-500 w-20 rounded-xl border-2 border-gray-500 shadow-md"
          >
            =
          </button>
          <button
            onClick={() => updateDisplay("+")}
            className="p-2 bg-orange-300 font-bold w-20 rounded-xl border-2 border-gray-500 shadow-md"
          >
            +
          </button>
        </div>
      </div>
    </section>
  )
}
