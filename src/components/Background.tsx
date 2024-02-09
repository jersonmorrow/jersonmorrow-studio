'use client'

import { motion } from 'framer-motion'
import {
  ReactElement,
  ReactFragment,
  ReactNode,
  ReactPortal,
  useEffect,
  useState,
} from 'react'

const variants = {
  blue: { backgroundColor: '#7d99c6' },
  green: { backgroundColor: '#0bb27a' },
  gray: { backgroundColor: '#cbd5e0' },
}

enum Color {
  Blue = 'green',
  Green = 'gray',
  Gray = 'blue',
}

interface ColorMap {
  blue: Color.Green
  green: Color.Gray
  gray: Color.Blue
}

interface BackgroundProps {
  children: ReactNode
}

function Background({ children }: BackgroundProps) {
  const [color, setColor] = useState<Color>(Color.Blue)

  useEffect(() => {
    const intervalId = setInterval(() => {
      const colorMap: ColorMap = {
        blue: Color.Green,
        green: Color.Gray,
        gray: Color.Blue,
      }

      setColor((prevColor) => {
        return colorMap[prevColor]
      })
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <motion.div
      className="min-h-screen"
      animate={color}
      variants={variants}
      transition={{ duration: 2 }}
    >
      {children}
    </motion.div>
  )
}

export default Background
