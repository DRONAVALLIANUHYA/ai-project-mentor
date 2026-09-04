"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";

type ProjectHistory = {
  id: number;
  interest: string;
  selected_project: {
    project_name: string;
    problem: string;
    solution: string;
    why_unique: string;
    difficulty: number;
    domain_relevance: number;
    industry_value: number;
    resume_impact: number;
  };
  created_at: string;
};

export default function History() {
  const [history, setHistory] = useState<ProjectHistory[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/history")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to load history");
        }

        return res.json();
      })
      .then((data) => setHistory(data))
      .catch((error) => {
        console.error("History error:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const filteredHistory = useMemo(() => {
    const query = search.toLowerCase().trim();

    if (!query) {
      return history;
    }

    return history.filter((item) => {
      const project = item.selected_project;

      return (
        item.interest.toLowerCase().includes(query) ||
        project.project_name.toLowerCase().includes(query) ||
        project.problem.toLowerCase().includes(query)
      );
    });
  }, [history, search]);

  const getOverallScore = (project: ProjectHistory["selected_project"]) => {
    return Math.round(
      ((project.domain_relevance +
        project.industry_value +
        project.resume_impact) /
        30) *
        100
    );
  };

  return (
    <main className="min-h-screen bg-[#050816] text-white relative overflow-hidden">

      {/* Background Glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">

        <div className="
          absolute
          -top-40
          -left-40
          w-96
          h-96
          bg-blue-600/20
          rounded-full
          blur-3xl
        " />

        <div className="
          absolute
          top-1/3
          -right-40
          w-96
          h-96
          bg-purple-600/20
          rounded-full
          blur-3xl
        " />

        <div className="
          absolute
          bottom-0
          left-1/3
          w-96
          h-96
          bg-cyan-600/10
          rounded-full
          blur-3xl
        " />

      </div>


      <div className="relative z-10">

        {/* Navbar */}
        <Navbar />


        {/* Header */}
        <section className="
          max-w-6xl
          mx-auto
          px-6
          pt-16
          pb-10
        ">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">

            <div>

              <div className="
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                rounded-full
                bg-purple-500/10
                border border-purple-500/20
                text-purple-300
                text-sm
              ">
                <span>📚</span>
                PROJECT WORKSPACE
              </div>

              <h1 className="
                text-4xl
                md:text-5xl
                font-extrabold
                tracking-tight
                mt-5
              ">
                Project History
              </h1>

              <p className="
                text-gray-400
                text-lg
                mt-3
                max-w-2xl
                leading-7
              ">
                Review your previously generated AI projects,
                scores and project ideas in one place.
              </p>

            </div>


            {/* Project Count */}
            <div className="
              px-5
              py-4
              rounded-2xl
              bg-white/[0.03]
              border border-white/10
              min-w-[150px]
            ">

              <p className="text-gray-500 text-xs uppercase tracking-wider">
                Projects
              </p>

              <p className="text-3xl font-bold mt-1">
                {history.length}
              </p>

            </div>

          </div>

        </section>


        {/* Search */}
        <section className="
          max-w-6xl
          mx-auto
          px-6
          pb-8
        ">

          <div className="
            relative
            max-w-2xl
          ">

            <span className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-gray-500
            ">
              🔎
            </span>

            <input
              type="text"
              placeholder="Search projects or domains..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="
                w-full
                bg-white/[0.03]
                border border-white/10
                rounded-xl
                pl-11
                pr-5
                py-4
                text-white
                placeholder-gray-500
                outline-none
                focus:border-blue-500/40
                focus:ring-2
                focus:ring-blue-500/10
                transition
              "
            />

          </div>

        </section>


        {/* Content */}
        <section className="
          max-w-6xl
          mx-auto
          px-6
          pb-20
        ">

          {/* Loading */}
          {loading && (
            <div className="
              bg-white/[0.03]
              border border-white/10
              rounded-3xl
              p-12
              text-center
            ">

              <div className="
                mx-auto
                w-14
                h-14
                rounded-2xl
                bg-blue-500/10
                border border-blue-500/20
                flex items-center justify-center
                text-2xl
                animate-pulse
              ">
                ✨
              </div>

              <p className="text-gray-300 mt-5">
                Loading your projects...
              </p>

            </div>
          )}


          {/* Empty State */}
          {!loading && history.length === 0 && (
            <div className="
              relative
              overflow-hidden
              bg-gradient-to-br
              from-[#0c1326]
              to-[#080c18]
              border border-white/10
              rounded-3xl
              p-12
              text-center
            ">

              <div className="
                mx-auto
                w-20
                h-20
                rounded-3xl
                bg-blue-500/10
                border border-blue-500/20
                flex items-center justify-center
                text-4xl
              ">
                🚀
              </div>

              <h2 className="text-2xl font-bold mt-6">
                No projects yet
              </h2>

              <p className="
                text-gray-400
                max-w-md
                mx-auto
                mt-3
                leading-7
              ">
                Generate your first AI project and it will
                automatically appear here.
              </p>

              <Link
                href="/"
                className="
                  inline-flex
                  items-center
                  gap-2
                  mt-7
                  px-6
                  py-3
                  rounded-xl
                  bg-gradient-to-r
                  from-blue-600
                  to-purple-600
                  font-semibold
                  hover:from-blue-500
                  hover:to-purple-500
                  transition
                "
              >
                Generate Project
                <span>→</span>
              </Link>

            </div>
          )}


          {/* No Search Results */}
          {!loading &&
            history.length > 0 &&
            filteredHistory.length === 0 && (
              <div className="
                bg-white/[0.03]
                border border-white/10
                rounded-3xl
                p-10
                text-center
              ">

                <div className="text-3xl">
                  🔎
                </div>

                <h2 className="text-xl font-bold mt-4">
                  No matching projects
                </h2>

                <p className="text-gray-500 mt-2">
                  Try searching for another project or domain.
                </p>

              </div>
            )}


          {/* Project Cards */}
          {!loading && filteredHistory.length > 0 && (
            <div className="space-y-6">

              {filteredHistory.map((item) => {

                const project = item.selected_project;
                const overallScore = getOverallScore(project);

                return (
                  <article
                    key={item.id}
                    className="
                      group
                      relative
                      overflow-hidden
                      bg-gradient-to-br
                      from-[#0d1428]
                      to-[#080c18]
                      border border-white/10
                      rounded-3xl
                      p-7 md:p-8
                      shadow-xl
                      hover:border-blue-500/30
                      hover:-translate-y-0.5
                      transition-all
                    "
                  >

                    {/* Top Glow */}
                    <div className="
                      absolute
                      -top-24
                      -right-24
                      w-64
                      h-64
                      bg-blue-600/10
                      rounded-full
                      blur-3xl
                      opacity-0
                      group-hover:opacity-100
                      transition
                    " />


                    <div className="relative">

                      {/* Header */}
                      <div className="
                        flex
                        flex-col
                        md:flex-row
                        md:items-start
                        md:justify-between
                        gap-5
                      ">

                        <div>

                          <div className="flex flex-wrap items-center gap-2">

                            <span className="
                              px-3
                              py-1
                              rounded-full
                              bg-blue-500/10
                              border border-blue-500/20
                              text-blue-300
                              text-xs
                              font-semibold
                            ">
                              {item.interest}
                            </span>

                            <span className="
                              px-3
                              py-1
                              rounded-full
                              bg-white/5
                              border border-white/10
                              text-gray-500
                              text-xs
                            ">
                              #{item.id}
                            </span>

                          </div>

                          <h2 className="
                            text-2xl
                            md:text-3xl
                            font-bold
                            mt-4
                            text-white
                          ">
                            {project.project_name}
                          </h2>

                        </div>


                        {/* Overall Score */}
                        <div className="
                          flex-shrink-0
                          px-5
                          py-4
                          rounded-2xl
                          bg-blue-500/10
                          border border-blue-500/20
                          text-center
                        ">

                          <p className="
                            text-blue-300
                            text-xs
                            uppercase
                            tracking-wider
                          ">
                            Project Fit
                          </p>

                          <p className="
                            text-3xl
                            font-extrabold
                            text-white
                            mt-1
                          ">
                            {overallScore}%
                          </p>

                        </div>

                      </div>


                      {/* Problem */}
                      <div className="
                        mt-6
                        p-5
                        rounded-2xl
                        bg-white/[0.025]
                        border border-white/5
                      ">

                        <p className="
                          text-gray-500
                          text-xs
                          uppercase
                          tracking-wider
                          font-semibold
                        ">
                          Problem
                        </p>

                        <p className="
                          text-gray-300
                          leading-7
                          mt-2
                        ">
                          {project.problem}
                        </p>

                      </div>


                      {/* Metrics */}
                      <div className="
                        grid
                        grid-cols-2
                        md:grid-cols-4
                        gap-3
                        mt-5
                      ">

                        <div className="
                          bg-white/[0.03]
                          border border-white/5
                          rounded-xl
                          p-4
                        ">

                          <p className="text-gray-500 text-xs">
                            Domain
                          </p>

                          <p className="text-xl font-bold mt-1">
                            {project.domain_relevance}/10
                          </p>

                        </div>


                        <div className="
                          bg-white/[0.03]
                          border border-white/5
                          rounded-xl
                          p-4
                        ">

                          <p className="text-gray-500 text-xs">
                            Industry
                          </p>

                          <p className="text-xl font-bold mt-1">
                            {project.industry_value}/10
                          </p>

                        </div>


                        <div className="
                          bg-white/[0.03]
                          border border-white/5
                          rounded-xl
                          p-4
                        ">

                          <p className="text-gray-500 text-xs">
                            Resume
                          </p>

                          <p className="text-xl font-bold mt-1">
                            {project.resume_impact}/10
                          </p>

                        </div>


                        <div className="
                          bg-white/[0.03]
                          border border-white/5
                          rounded-xl
                          p-4
                        ">

                          <p className="text-gray-500 text-xs">
                            Difficulty
                          </p>

                          <p className="text-xl font-bold mt-1">
                            {project.difficulty}/10
                          </p>

                        </div>

                      </div>


                      {/* Bottom */}
                      <div className="
                        flex
                        flex-col
                        sm:flex-row
                        sm:items-center
                        sm:justify-between
                        gap-4
                        mt-6
                        pt-5
                        border-t border-white/5
                      ">

                        <p className="text-gray-600 text-sm">
                          Generated{" "}
                          {new Date(item.created_at).toLocaleString()}
                        </p>

                        <Link
                          href="/"
                          className="
                            inline-flex
                            items-center
                            justify-center
                            gap-2
                            px-5
                            py-2.5
                            rounded-xl
                            bg-white/5
                            border border-white/10
                            text-gray-300
                            text-sm
                            font-semibold
                            hover:bg-white/10
                            hover:text-white
                            transition
                          "
                        >
                          Generate Similar
                          <span>→</span>
                        </Link>

                      </div>

                    </div>

                  </article>
                );
              })}

            </div>
          )}

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