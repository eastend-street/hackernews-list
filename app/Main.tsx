export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <main className="bg-ivory h-screen flex justify-center p-3">
      {children}
    </main>
  );
}
