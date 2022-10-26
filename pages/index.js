import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <main>
        {/* Sidebar */}
        <Sidebar />
        {/* Center */}
      </main>

      <footer>{/* Player */}</footer>
    </div>
  );
}
