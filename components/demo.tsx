'use client'

import { useEffect, useState } from 'react'

export default function Demo() {
  const [count, setCount] = useState<number>(0)
  const [test, setTest] = useState<number>(0)
  useEffect(() => {
    const timeOut = setTimeout(() => {
      console.log('run')
      setCount((prev) => prev + 1)
    }, 1000)

    return () => clearInterval(timeOut)
  }, [count])

  useEffect(() => {
    const timeOut = setTimeout(() => {
      console.log('run')
      setTest((prev) => prev + 1)
    }, 3000)

    return () => clearInterval(timeOut)
  }, [test])

  return (
    <div>
      Hello word {count} -- {test}
    </div>
  )
}
