
"use client"
import { redirect } from "next/navigation"

function NavigateToLogin() {

   const navigateToLogin = () => {
      redirect('auth/login')
    }
  return navigateToLogin
  
}

export default NavigateToLogin