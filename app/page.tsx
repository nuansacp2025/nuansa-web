import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0">
      <div className="flex flex-col items-center justify-center h-screen w-full">
        <h1 className="text-4xl md:text-6xl font-bold text-center">
          Coming Soon: NUANSA 2025
        </h1>
      </div>
      <footer className="w-full py-4 text-center text-white">
        <p>© 2025 NUANSA. All rights reserved.</p>
      </footer>
    </main>
  );
}