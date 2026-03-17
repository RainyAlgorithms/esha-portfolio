import Navbar from "./components/Navbar";
import Timeline from "./components/Timeline";
import ProjectGrid from "./components/ProjectGrid";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
          Building intelligence <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
            into the web.
          </span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mb-8">
          Hi, I'm Esha. A Machine Learning Developer & Full Stack Engineer.
          Currently automating ML pipelines at <span className="text-blue-600 font-semibold">Airbus</span>.
        </p>
        
        <div className="flex gap-4">
          <a 
            href="/Esha_Pakalapati_ML_Dev_Resume_2025.pdf" 
            download 
            className="px-6 py-3 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium hover:opacity-90 transition-opacity"
          >
            Download CV
          </a>
          <a 
            href="https://github.com/rainyalgorithms" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
          >
            GitHub
          </a>
          <a 
            href="https://linkedin.com/in/esha-pakalapati/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Featured Projects</h2>
        <ProjectGrid />
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Experience</h2>
        <Timeline />
      </section>
      
      <footer className="py-8 text-center text-gray-500 text-sm">
        © 2026 Esha Pakalapati. Built with Next.js & FastAPI.
      </footer>
    </main>
  );
}