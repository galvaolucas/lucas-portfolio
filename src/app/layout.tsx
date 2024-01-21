import './globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Devfolio',
  description: 'Devfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="font-montserrat w-screen h-screen bg-dark-black">
        {children}
      </body>
    </html>
  );
}
