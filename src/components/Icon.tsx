import { ReactNode } from 'react'

interface IconProps {
  url: string | undefined
  children: ReactNode
  name: string
}

export default function Icon({ children, url, name }: IconProps) {
  return (
    <a
      rel="noopener noreferrer"
      target="_blank"
      href={url}
      className="flex items-center gap-2"
    >
      <div className="flex items-center">
        {children}
        <div className="ml-3">{name}</div>
      </div>
    </a>
  )
}
