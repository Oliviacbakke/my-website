import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#120017] via-[#1a001f] to-[#0f0014] text-purple-100">
      
{/* Header */}
<header className="py-12 text-center flex flex-col items-center">
  <div className="flex items-center gap-4">
    {/* Northwestern Logo with purple tint */}
    <img 
      src="/northwestern-logo.png" 
      alt="Northwestern University Logo" 
      className="h-12"
    />
    {/* Name with gradient text */}
    <h1 className="text-5xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-purple-500 font-serif">
      Olivia Bakke
    </h1>
  </div>
  <p className="mt-3 text-purple-300 text-lg">
    Computer Science Student at Northwestern University
  </p>
</header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-6 space-y-10">
        
        {/* About Me */}
        <section className="bg-white/5 backdrop-blur rounded-2xl p-8 shadow-lg border border-purple-500/20 text-center">
          <h2 className="text-2xl font-semibold text-purple-400 mb-6">
            About Me
          </h2>
          <p className="leading-relaxed text-purple-100/90">
            Hi! I’m Olivia, a computer science student in my first year at Northwestern University from Minneapolis, Minnesota.
          </p>
        </section>

        {/* Projects */}
<section className="bg-white/5 backdrop-blur rounded-2xl p-8 shadow-lg border border-purple-500/20">
  <h2 className="text-2xl font-semibold text-purple-400 mb-4 text-center">
    Projects
  </h2>

  <p className="text-gray-300 text-center mb-6">
    Here are a few projects I've worked on recently. More coming soon!
  </p>

  <div className="grid md:grid-cols-2 gap-6">
    <div className="bg-black/30 rounded-xl p-6 border border-purple-500/20">
      <h3 className="text-lg font-semibold text-purple-300 mb-2">
        Alarmageddon
      </h3>
<p className="text-gray-400 text-sm mb-3">
Designed and programmed a “mobile alarm clock” car via Photon 2. The “clock” vehicle would drive away while the alarm sounded. Our group also created a corresponding web-UI to set the clock. </p>
<a
href="https://github.com/Oliviacbakke"
target="_blank"
rel="noopener noreferrer"
className="inline-flex items-center gap-2 text-purple-300 hover:text-purple-400 text-sm font-medium"
>
<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
<path d="M12 .5C5.7.5.5 5.8.5 12.2c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.8 1.6 2.8 1.1.1-.7.4-1.1.7-1.3-2.5-.3-5.1-1.3-5.1-5.8 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.4.1-2.9 0 0 1-.3 3.3 1.2.9-.3 1.9-.4 2.9-.4s2 .1 2.9.4c2.3-1.5 3.3-1.2 3.3-1.2.6 1.5.2 2.6.1 2.9.8.9 1.2 2 1.2 3.3 0 4.5-2.6 5.5-5.1 5.8.4.3.8 1 .8 2.1v3.1c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.8 18.3.5 12 .5z" />
</svg>
View on GitHub
</a>
    </div>

    <div className="bg-black/30 rounded-xl p-6 border border-purple-500/20">
      <h3 className="text-lg font-semibold text-purple-300 mb-2">
        HydroCatch
      </h3>
      <p className="text-gray-400 text-sm">
Designed and built a table gutter for a center for disabled adults for the Design Thinking and Communication course in fall 2025. Interviewed the client, collected project requirements, built prototypes, refined the final design, and delivered the completed design to the client.       </p>
<a
href="/hydro-catch.pdf"
target="_blank"
rel="noopener noreferrer"
className="inline-flex items-center gap-2 mt-2 text-purple-300 hover:text-purple-400 text-sm font-medium"
>
<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h10M7 11h10M7 15h6M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" />
</svg>
View Project PDF
</a>
    </div>
  </div>
</section>




        {/* Links */}
        <section className="bg-white/5 backdrop-blur rounded-2xl p-8 shadow-lg border border-purple-500/20 text-center">
          <h2 className="text-2xl font-semibold text-purple-400 mb-6">
            Connect
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/resume-olivia-bakke.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-500/20 hover:bg-purple-500/30 text-purple-200 px-6 py-4 rounded-xl font-medium transition shadow"
            >
              Resume
            </a>
            <a
              href="https://www.linkedin.com/in/oliviabakke1/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-500/20 hover:bg-purple-500/30 text-purple-200 px-6 py-4 rounded-xl font-medium transition shadow"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Oliviacbakke/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-500/20 hover:bg-purple-500/30 text-purple-200 px-6 py-4 rounded-xl font-medium transition shadow"
            >
              GitHub
            </a>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="mt-16 pb-6 text-center text-purple-300/60 text-sm">
        © {new Date().getFullYear()} Olivia Bakke
      </footer>
    </div>
  );
}
