import Timeline from "./components/Timeline";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white dark:bg-gray-900">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Esha Pakalapati
        </h1>
      </div>

      <div className="w-full max-w-3xl">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">Experience</h2>
        <Timeline />
      </div>
    </main>
  );
}