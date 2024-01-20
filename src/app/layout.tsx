"use client";
import './globals.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();
  return (
    <html lang="pt-BR">
        <body className="font-montserrat w-screen h-screen bg-dark-black">
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </body>
    </html>
  );
}
