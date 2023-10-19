export default function Button ({
  alto,
  ancho = 'w-100',
  color = 'bg-gray-500',
  texto,
  keyPress,
  error
}: {
  alto?: string
  ancho?: string
  color?: string
  texto: string
  keyPress?: any
  error?: boolean
}): React.ReactElement {
  const sendKey = (key: string) => {
    keyPress(key)
  }
  return (
      <button
        className={`${ancho}  white-black px-4 py-2 rounded ${color} m-2 hover:cursor-pointer hover:bg-red-700`}
        onClick={(e) => {
          sendKey(texto)
        }}
      >
        {texto}
      </button>
  )
}
