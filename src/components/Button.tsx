import type { ReactNode } from "react"

type ButtonProps = {
  children: ReactNode
}

export default function Button({ children }: ButtonProps) {
  return (
    <button className="bg-zinc-800 hover:bg-zinc-700 transition-colors rounded-3xl px-2 py-2 text-white text-base font-sans">
      {children}
    </button>
  )
}
