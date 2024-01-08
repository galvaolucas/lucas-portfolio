import ProtectedLayout from '@/app/layouts/protectedLayout';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedLayout>
      {children}
    </ProtectedLayout>
  );
}
