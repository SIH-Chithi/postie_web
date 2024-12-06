"use client"

import React, {  useEffect } from 'react'
import { useRouter } from 'next/navigation'

function Page() {
  const Router = useRouter()
  useEffect(() => {
    Router.push('/spo')
  }, [])
  return (
    <div>page</div>
  )
}

export default Page