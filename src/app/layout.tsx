"use client";
import { useAuth } from '@/app/hooks/useAuth';
import './globals.css';
import { AuthContext } from './contexts/authContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, login, logout } = useAuth();
  const queryClient = new QueryClient()
  return (
    <html lang="pt-BR">
        <body className="font-montserrat w-screen h-screen bg-dark-black">
          <QueryClientProvider client={queryClient}>
            <AuthContext.Provider value={{ user, login, logout }}>
              {children}
            </AuthContext.Provider>
          </QueryClientProvider>
        </body>
    </html>
  );
}
