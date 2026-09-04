"use client";

import Navbar from "../components/Navbar";

export default function About() {
  return (
    <main className="min-h-screen bg-[#050816] text-white relative overflow-hidden">

      {/* Background Glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">

        {/* Navbar */}
        <Navbar />

        {/* Hero */}
        <section className="max-w-5xl mx-auto text-center px-6 pt-16 pb-14">

          <div className="
            inline-flex items-center gap-2
            px-4 py-2
            rounded-full
            bg-blue-500/10
            border border-blue-500/20
            text-blue-300
            text-sm
          ">
            <span className="w-2 h-2 rounded-full bg-blue-400" />
            ABOUT THE PLATFORM
          </div>

          <h1 className="
            text-4xl md:text-6xl
            font-extrabold
            tracking-tight
            mt-6
          ">
            From AI Idea to
            <span className="
              block
              bg-gradient-to-r
              from-blue-400
              via-cyan-400
              to-purple-500
              bg-clip-text
              text-transparent
            ">
              Project Blueprint
            </span>
          </h1>

          <p className="
            max-w-2xl
            mx-auto
            text-gray-400
            text-lg
            leading-8
            mt-6
          ">
            AI Project Mentor transforms a simple AI domain or idea into
            a practical project with research insights, system architecture,
            an implementation roadmap and career analysis.
          </p>

        </section>


        {/* What the platform does */}
        <section className="max-w-6xl mx-auto px-6 pb-16">

          <div className="mb-7">

            <p className="
              text-blue-400
              text-xs
              font-semibold
              tracking-widest
            ">
              WHAT IT DOES
            </p>

            <h2 className="text-3xl font-bold mt-2">
              One idea. Complete project direction.
            </h2>

          </div>


          <div className="grid md:grid-cols-3 gap-5">

            {/* Research */}
            <div className="
              bg-white/[0.03]
              p-7
              rounded-2xl
              border border-white/10
              hover:border-purple-500/30
              transition-all
            ">

              <div className="text-3xl mb-5">
                🔬
              </div>

              <h3 className="text-xl font-bold">
                AI Research
              </h3>

              <p className="text-gray-400 leading-7 mt-3">
                Researches relevant trends, technologies, datasets,
                APIs and industry opportunities for the selected domain.
              </p>

            </div>


            {/* Planning */}
            <div className="
              bg-white/[0.03]
              p-7
              rounded-2xl
              border border-white/10
              hover:border-blue-500/30
              transition-all
            ">

              <div className="text-3xl mb-5">
                🧠
              </div>

              <h3 className="text-xl font-bold">
                Project Planning
              </h3>

              <p className="text-gray-400 leading-7 mt-3">
                Selects a practical project idea and explains its
                problem, solution, uniqueness and technology stack.
              </p>

            </div>


            {/* System Design */}
            <div className="
              bg-white/[0.03]
              p-7
              rounded-2xl
              border border-white/10
              hover:border-cyan-500/30
              transition-all
            ">

              <div className="text-3xl mb-5">
                🏗️
              </div>

              <h3 className="text-xl font-bold">
                System Design
              </h3>

              <p className="text-gray-400 leading-7 mt-3">
                Converts the selected idea into a technical architecture
                with frontend, backend, AI, database, APIs and deployment.
              </p>

            </div>

          </div>

        </section>


        {/* How it works */}
        <section className="
          max-w-6xl
          mx-auto
          px-6
          pb-16
        ">

          <div className="
            bg-gradient-to-br
            from-[#0c1326]
            to-[#080c18]
            p-8 md:p-10
            rounded-3xl
            border border-white/10
            shadow-2xl
          ">

            <div className="mb-9">

              <p className="
                text-cyan-400
                text-xs
                font-semibold
                tracking-widest
              ">
                HOW IT WORKS
              </p>

              <h2 className="text-3xl font-bold mt-2">
                From input to intelligent output
              </h2>

            </div>


            <div className="grid md:grid-cols-4 gap-5">

              {/* Step 1 */}
              <div className="relative">

                <div className="
                  w-12 h-12
                  rounded-xl
                  bg-blue-500/10
                  border border-blue-500/20
                  flex items-center justify-center
                  text-blue-300
                  font-bold
                ">
                  01
                </div>

                <h3 className="font-bold text-lg mt-5">
                  Enter Domain
                </h3>

                <p className="text-gray-500 text-sm leading-6 mt-2">
                  Enter an AI interest such as Machine Learning,
                  NLP or Computer Vision.
                </p>

              </div>


              {/* Step 2 */}
              <div>

                <div className="
                  w-12 h-12
                  rounded-xl
                  bg-purple-500/10
                  border border-purple-500/20
                  flex items-center justify-center
                  text-purple-300
                  font-bold
                ">
                  02
                </div>

                <h3 className="font-bold text-lg mt-5">
                  Research
                </h3>

                <p className="text-gray-500 text-sm leading-6 mt-2">
                  The system gathers research and technology insights
                  related to the selected domain.
                </p>

              </div>


              {/* Step 3 */}
              <div>

                <div className="
                  w-12 h-12
                  rounded-xl
                  bg-cyan-500/10
                  border border-cyan-500/20
                  flex items-center justify-center
                  text-cyan-300
                  font-bold
                ">
                  03
                </div>

                <h3 className="font-bold text-lg mt-5">
                  Plan & Design
                </h3>

                <p className="text-gray-500 text-sm leading-6 mt-2">
                  AI creates the project concept and generates
                  a practical technical architecture.
                </p>

              </div>


              {/* Step 4 */}
              <div>

                <div className="
                  w-12 h-12
                  rounded-xl
                  bg-emerald-500/10
                  border border-emerald-500/20
                  flex items-center justify-center
                  text-emerald-300
                  font-bold
                ">
                  04
                </div>

                <h3 className="font-bold text-lg mt-5">
                  Career Analysis
                </h3>

                <p className="text-gray-500 text-sm leading-6 mt-2">
                  The project receives scores and role alignment
                  for technical and data-oriented careers.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* AI Workflow */}
        <section className="max-w-6xl mx-auto px-6 pb-16">

          <div className="mb-7">

            <p className="
              text-purple-400
              text-xs
              font-semibold
              tracking-widest
            ">
              AI WORKFLOW
            </p>

            <h2 className="text-3xl font-bold mt-2">
              Intelligent project generation pipeline
            </h2>

            <p className="text-gray-400 mt-3 max-w-2xl leading-7">
              The application uses a multi-stage AI workflow instead of
              relying on a single prompt.
            </p>

          </div>


          <div className="
            flex flex-col md:flex-row
            items-center
            justify-center
            gap-3
          ">

            <div className="
              w-full md:w-auto
              px-6 py-5
              rounded-2xl
              bg-blue-500/10
              border border-blue-500/20
              text-center
            ">
              <div className="text-2xl">🔬</div>
              <p className="font-bold mt-2">Research</p>
              <p className="text-gray-500 text-xs mt-1">
                Domain intelligence
              </p>
            </div>


            <div className="text-gray-600 text-2xl rotate-90 md:rotate-0">
              →
            </div>


            <div className="
              w-full md:w-auto
              px-6 py-5
              rounded-2xl
              bg-purple-500/10
              border border-purple-500/20
              text-center
            ">
              <div className="text-2xl">🧠</div>
              <p className="font-bold mt-2">Project Planner</p>
              <p className="text-gray-500 text-xs mt-1">
                Project selection
              </p>
            </div>


            <div className="text-gray-600 text-2xl rotate-90 md:rotate-0">
              →
            </div>


            <div className="
              w-full md:w-auto
              px-6 py-5
              rounded-2xl
              bg-cyan-500/10
              border border-cyan-500/20
              text-center
            ">
              <div className="text-2xl">🏗️</div>
              <p className="font-bold mt-2">Solution Designer</p>
              <p className="text-gray-500 text-xs mt-1">
                Architecture & roadmap
              </p>
            </div>

          </div>

        </section>


        {/* Technology Stack */}
        <section className="max-w-6xl mx-auto px-6 pb-16">

          <div className="
            bg-white/[0.03]
            p-8 md:p-10
            rounded-3xl
            border border-white/10
          ">

            <div className="mb-7">

              <p className="
                text-blue-400
                text-xs
                font-semibold
                tracking-widest
              ">
                TECHNOLOGY STACK
              </p>

              <h2 className="text-3xl font-bold mt-2">
                Built with modern technologies
              </h2>

            </div>


            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">

              {[
                ["⚛️", "Next.js", "Frontend framework"],
                ["🔷", "React", "UI development"],
                ["🐍", "Python", "Backend & AI"],
                ["⚡", "FastAPI", "REST APIs"],
                ["🧠", "LangGraph", "AI workflow"],
                ["🤖", "Groq / LLM", "AI generation"],
                ["🗄️", "MySQL", "Persistent storage"],
                ["🔗", "SQLAlchemy", "Database ORM"],
              ].map(([icon, name, description]) => (

                <div
                  key={name}
                  className="
                    p-5
                    rounded-2xl
                    bg-[#080c18]
                    border border-white/10
                    hover:border-blue-500/30
                    transition-all
                  "
                >

                  <div className="text-2xl">
                    {icon}
                  </div>

                  <h3 className="font-bold text-white mt-3">
                    {name}
                  </h3>

                  <p className="text-gray-500 text-sm mt-1">
                    {description}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>


        {/* Project Value */}
        <section className="max-w-6xl mx-auto px-6 pb-20">

          <div className="text-center">

            <p className="
              text-green-400
              text-xs
              font-semibold
              tracking-widest
            ">
              PROJECT VALUE
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Designed as a real software project
            </h2>

            <p className="
              max-w-2xl
              mx-auto
              text-gray-400
              leading-7
              mt-4
            ">
              The platform combines AI, backend engineering, database
              management, system architecture and research into one
              practical application.
            </p>

          </div>


          <div className="
            grid
            md:grid-cols-4
            gap-4
            mt-8
          ">

            <div className="text-center p-5 rounded-2xl bg-white/[0.03] border border-white/10">
              <div className="text-2xl">🤖</div>
              <p className="font-bold mt-2">AI</p>
              <p className="text-gray-500 text-xs mt-1">
                Intelligent generation
              </p>
            </div>

            <div className="text-center p-5 rounded-2xl bg-white/[0.03] border border-white/10">
              <div className="text-2xl">⚙️</div>
              <p className="font-bold mt-2">Backend</p>
              <p className="text-gray-500 text-xs mt-1">
                REST API services
              </p>
            </div>

            <div className="text-center p-5 rounded-2xl bg-white/[0.03] border border-white/10">
              <div className="text-2xl">🗄️</div>
              <p className="font-bold mt-2">Database</p>
              <p className="text-gray-500 text-xs mt-1">
                Persistent project history
              </p>
            </div>

            <div className="text-center p-5 rounded-2xl bg-white/[0.03] border border-white/10">
              <div className="text-2xl">🏗️</div>
              <p className="font-bold mt-2">Architecture</p>
              <p className="text-gray-500 text-xs mt-1">
                End-to-end system design
              </p>
            </div>

          </div>

        </section>


        {/* Footer */}
        <footer className="border-t border-white/10">

          <div className="
            max-w-6xl
            mx-auto
            px-6
            py-10
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-4
          ">

            <div>
              <p className="font-bold">
                ✦ AI Project Mentor
              </p>

              <p className="text-gray-500 text-sm mt-1">
                From AI idea to project blueprint.
              </p>
            </div>

            <p className="text-gray-600 text-xs">
              Built with Next.js • FastAPI • LangGraph • MySQL
            </p>

          </div>

        </footer>

      </div>

    </main>
  );
}