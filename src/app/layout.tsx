"use client";
import { useAuth } from '@/app/hooks/useAuth';
import './globals.css';
import { AuthContext } from './contexts/authContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, login, logout } = useAuth();
  return (
    <html lang="pt-BR">
        <body className="font-montserrat w-screen h-screen bg-dark-black">
          <AuthContext.Provider value={{ user, login, logout }}>
            {children}
          </AuthContext.Provider>
        </body>
    </html>
  );
}
