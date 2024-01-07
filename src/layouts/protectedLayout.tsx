"use client";
import { useLayoutEffect } from 'react';
import { redirect } from 'next/navigation';

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useLayoutEffect(() => {
    const user = localStorage.getItem('user');
    if(!user){
      redirect("/")
    }
  }, [])
  return (
    <div className='w-full h-full'>
      {children}
    </div>
  );
}
