import React from 'react'
import { RegisterForm } from '../_components/RegisterFrom';

const RegisterPage = () => {
  return (
    <>
    <div className= "flex min-h-screen items-center justify-center">
        <div className="w-full.  max-w-md space-y-6 rounded-lg border py-8 shadow-lg px-5">
            {/* From Generic Content */}
            <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Create an Account</h1>
          <p className="text-muted-foreground">
            Enter your details to create your account and start your journey with us.
          </p>
        </div>

            {/* Register from Here */}
            <RegisterForm></RegisterForm>
        </div>
    </div>
    </>
  )
}

export default RegisterPage
