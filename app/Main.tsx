export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex h-screen justify-center bg-ivory p-3">
      {children}
    </main>
  );
}
