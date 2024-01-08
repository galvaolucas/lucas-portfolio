"use client";
import { useLayoutEffect, useState } from 'react';
import { redirect } from 'next/navigation';
import { UserContext } from '../contexts/userContext';
import { IAuthUser } from '@/global/types';

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<IAuthUser | undefined>(undefined);
  useLayoutEffect(() => {
    const user = localStorage.getItem('user');
    if(!user){
      redirect("/")
    }
    setUser(JSON.parse(user));
  }, [])
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className='w-full h-full'>
        {children}
      </div>
    </UserContext.Provider>
  );
}
