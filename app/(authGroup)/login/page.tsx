import React from 'react'
import LoginFrom from '../_components/LoginFrom';

export default function LoginPage() {
  return (
    <>
    <div className= "flex min-h-screen items-center justify-center">
        <div className="w-full.  max-w-md space-y-6 rounded-lg border py-8 shadow-lg px-5">
            {/* From Generic Content */}
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold">Welcome Back!</h1>
              <p className="text-gray-600">
                Enter your vredentials to acceess your account and continue your journey with us.
              </p>
            </div>

            {/* Login Form */}
            <LoginFrom></LoginFrom>
        </div>
    </div>
    </>
  )
}
