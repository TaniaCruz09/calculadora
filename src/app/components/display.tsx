'use client'

export default function Display ({ texto, error }: { texto?: string, error?: boolean }) {
  return (
      <div className={'border rounded-t-2xl bg-purple-50 h-20  text-2xl font-bold text-center align-middle ' }>
        <span>{texto}</span>
      </div>
  )
}
