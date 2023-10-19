'use client'
import Button from './button'

export default function Keyboard ({ keyPress, error }: { keyPress?: any, error?: boolean }) {
  const sendKey = (key: string) => {
    keyPress(key)
  }
  return (
    <div className=" bg-gray-400 border p-1 rounded-b-2xl h-50">
      <div className="flex flex-row justify-between">
        <Button color="bg-orange-400" texto="AC" keyPress={sendKey} />
        <Button color="bg-orange-400" texto="X" keyPress={sendKey} />
        <Button color="bg-orange-400" texto="%" keyPress={sendKey} />
        <Button color="bg-orange-400" texto="/" keyPress={sendKey} />
      </div>
      <div className="flex flex-row justify-between">
        <Button texto="7" keyPress={sendKey} />
        <Button texto="8" keyPress={sendKey} />
        <Button texto="9" keyPress={sendKey} />
        <Button color="bg-orange-400" texto="x" keyPress={sendKey} />
      </div>
      <div className="flex flex-row justify-between">
        <Button texto="4" keyPress={sendKey} />
        <Button texto="5" keyPress={sendKey} />
        <Button texto="6" keyPress={sendKey} />
        <Button color="bg-orange-400" texto="-" keyPress={sendKey} />
      </div>
      <div className="flex flex-row justify-between">
        <Button texto="1" keyPress={sendKey} />
        <Button texto="2" keyPress={sendKey} />
        <Button texto="3" keyPress={sendKey} />
        <Button color="bg-orange-400" texto="+" keyPress={sendKey} />
      </div>
      <div className="flex flex-row justify-between">
        <Button texto="0" keyPress={sendKey} />
        <Button texto="." keyPress={sendKey} />
        <Button color="bg-orange-400" texto="=" keyPress={sendKey} />
      </div>
    </div>
  )
}
