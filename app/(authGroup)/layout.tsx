import { Navbar } from '@/components/shared/navbar';
import { getMyProfile } from '@/service/getMe';
import React from 'react'

const AuthLayout = async (
    {children} : {children: React.ReactNode}
) => {

  const user = await getMyProfile();
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar user={user}></Navbar>
      {children}
    </div>
  )
}

export default AuthLayout
