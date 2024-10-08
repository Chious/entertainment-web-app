import Navbar from '@/components/Navbar';

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="w-full h-full flex flex-col lg:flex-row">
      <Navbar />
      <section className="container w-full h-full flex-1 p-4 overflow-scroll">
        {children}
      </section>
    </main>
  );
}
