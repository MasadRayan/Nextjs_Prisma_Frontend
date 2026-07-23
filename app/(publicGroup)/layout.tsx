import { Navbar } from '@/components/shared/navbar';
import { getMyProfile } from '@/service/getMe';
import React from 'react'

const DashboardLayout = async (
    {children}: {children: React.ReactNode}
) => {

  const user = await getMyProfile();

  return (
    <div>
      <Navbar user={user}></Navbar>
      {children}
    </div>
  )
}

export default DashboardLayout
