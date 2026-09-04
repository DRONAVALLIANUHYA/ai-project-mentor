"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import Navbar from "./components/Navbar";

export default function Home() {
  const [interest, setInterest] = useState("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [generatedAt, setGeneratedAt] = useState("");
  const [activeTab, setActiveTab] = useState("project");
    const selectedProject = result
    ? (() => {
        try {
          return JSON.parse(result.selected_project);
        } catch {
          return null;
        }
      })()
    : null;

  const generateProject = async () => {
    if (!interest.trim()) {
      alert("Please enter an AI interest");
      return;
    }

    setLoading(true);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;

      if (!apiUrl) {
        throw new Error("NEXT_PUBLIC_API_URL is not configured");
      }

      const response = await fetch(`${apiUrl}/generate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          interest: interest.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.detail || `Backend returned ${response.status}`
        );
      }

      setResult(data);
      setGeneratedAt(new Date().toLocaleString());
      setActiveTab("project");

    } catch (error) {
      console.error("Generation error:", error);

      if (error instanceof Error) {
        alert(`Failed to generate project:\n${error.message}`);
      } else {
        alert("Failed to generate project");
      }

    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#050816] text-white relative overflow-hidden">
      {/* Background Glow */}
<div className="fixed inset-0 pointer-events-none overflow-hidden">
  <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
  <div className="absolute top-1/3 -right-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
  <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl" />
</div>

      {/* Premium Header */}
<div className="relative z-10">

  <Navbar />

  {/* Hero */}
  <section className="max-w-6xl mx-auto text-center pt-16 pb-14 px-4">

    {/* Badge */}
    <div className="inline-flex items-center gap-2 px-4 py-2 mb-6
                    rounded-full border border-blue-500/20
                    bg-blue-500/10 text-blue-300 text-sm">

      <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />

      AI-Powered Project Engineering
    </div>

    {/* Main Heading */}
    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">

      Build Your Next

      <span className="block bg-gradient-to-r from-blue-400
                       via-cyan-400 to-purple-500
                       bg-clip-text text-transparent">
        AI Project
      </span>

    </h1>

    {/* Description */}
    <p className="max-w-2xl mx-auto mt-6 text-lg md:text-xl
                  text-gray-400 leading-8">

      Turn your AI idea into a complete project with
      <span className="text-gray-200"> research, architecture,
      implementation roadmap </span>
      and
      <span className="text-gray-200"> career insights.</span>

    </p>

    {/* Feature Pills */}
    <div className="flex flex-wrap justify-center gap-3 mt-8">

      <div className="px-4 py-2 rounded-full bg-white/5
                      border border-white/10 text-gray-300 text-sm">
        🔬 AI Research
      </div>

      <div className="px-4 py-2 rounded-full bg-white/5
                      border border-white/10 text-gray-300 text-sm">
        🏗️ System Architecture
      </div>

      <div className="px-4 py-2 rounded-full bg-white/5
                      border border-white/10 text-gray-300 text-sm">
        🗺️ Implementation Roadmap
      </div>

      <div className="px-4 py-2 rounded-full bg-white/5
                      border border-white/10 text-gray-300 text-sm">
        💼 Career Fit
      </div>

    </div>

  </section>

</div>


      {/* Generator */}
      {/* Project Generator */}
<section className="relative z-10 max-w-4xl mx-auto px-4 mb-16">

  <div className="relative p-[1px] rounded-2xl
                  bg-gradient-to-r from-blue-500/50
                  via-cyan-400/30 to-purple-500/50">

    <div className="bg-[#0b1020] rounded-2xl p-6 md:p-8">

      <div className="text-center mb-5">

        <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
          Start Building
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mt-2">
          What do you want to build?
        </h2>

      </div>

      <div className="flex flex-col md:flex-row gap-3">

        <input
          type="text"
          placeholder="e.g. Computer Vision, NLP, Machine Learning..."
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              generateProject();
            }
          }}
          className="
            flex-1
            bg-[#070b16]
            border border-white/10
            rounded-xl
            px-5 py-4
            text-white
            placeholder-gray-500
            outline-none
            focus:border-blue-500/60
            focus:ring-2
            focus:ring-blue-500/10
            transition
          "
        />

        <button
          onClick={generateProject}
          disabled={loading}
          className="
            px-7 py-4
            rounded-xl
            font-semibold
            bg-gradient-to-r
            from-blue-600
            to-purple-600
            hover:from-blue-500
            hover:to-purple-500
            disabled:opacity-50
            disabled:cursor-not-allowed
            transition-all
            duration-300
            shadow-lg
            shadow-blue-600/20
          "
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <span className="animate-spin">◌</span>
              Generating...
            </span>
          ) : (
            "Generate Project →"
          )}
        </button>

      </div>

      <p className="text-center text-gray-500 text-sm mt-4">
        Try: Machine Learning • Computer Vision • NLP •
        Agriculture • Cybersecurity
      </p>

    </div>

  </div>

</section>


      {/* Premium Loading */}
{loading && (
  <div className="relative z-10 max-w-2xl mx-auto px-4 py-16">

    <div className="
      relative overflow-hidden
      bg-gradient-to-br
      from-[#101a38]
      via-[#0c1326]
      to-[#080c18]
      border border-white/10
      rounded-3xl
      p-10
      text-center
      shadow-2xl
    ">

      {/* Glow */}
      <div className="
        absolute
        -top-24
        left-1/2
        -translate-x-1/2
        w-64
        h-64
        bg-blue-600/20
        rounded-full
        blur-3xl
      " />

      <div className="relative">

        {/* Animated Icon */}
        <div className="
          mx-auto
          w-16 h-16
          rounded-2xl
          bg-blue-500/10
          border border-blue-500/20
          flex items-center justify-center
          text-3xl
          animate-pulse
        ">
          ✨
        </div>

        <h2 className="
          text-2xl
          md:text-3xl
          font-bold
          text-white
          mt-6
        ">
          Building your AI project
        </h2>

        <p className="text-gray-400 mt-3">
          Our AI workflow is researching your domain and
          designing the project architecture.
        </p>

        {/* Progress */}
        <div className="
          max-w-md
          mx-auto
          mt-7
          h-2
          rounded-full
          bg-white/5
          overflow-hidden
        ">

          <div className="
            h-full
            w-2/3
            rounded-full
            bg-gradient-to-r
            from-blue-500
            via-cyan-400
            to-purple-500
            animate-pulse
          " />

        </div>

        <div className="
          flex
          justify-center
          flex-wrap
          gap-3
          mt-6
          text-xs
          text-gray-500
        ">

          <span>🔬 Research</span>
          <span>→</span>
          <span>🧠 Planning</span>
          <span>→</span>
          <span>🏗️ Architecture</span>

        </div>

      </div>

    </div>

  </div>
)}


      {/* Empty State */}
{!result && !loading && (
  <section className="
    relative
    z-10
    max-w-5xl
    mx-auto
    px-4
    pb-20
  ">

    <div className="
      relative
      overflow-hidden
      rounded-3xl
      border border-white/10
      bg-white/[0.02]
      p-10 md:p-14
      text-center
    ">

      <div className="
        absolute
        -top-32
        left-1/2
        -translate-x-1/2
        w-80 h-80
        bg-purple-600/10
        rounded-full
        blur-3xl
      " />

      <div className="relative">

        <div className="
          mx-auto
          w-20 h-20
          rounded-3xl
          bg-gradient-to-br
          from-blue-500/10
          to-purple-500/10
          border border-white/10
          flex items-center justify-center
          text-4xl
        ">
          🚀
        </div>

        <h2 className="
          text-3xl
          md:text-4xl
          font-bold
          mt-6
          text-white
        ">
          Your next AI project starts here
        </h2>

        <p className="
          max-w-xl
          mx-auto
          text-gray-400
          mt-4
          leading-7
        ">
          Enter an AI domain above and let the system transform
          your idea into a complete project concept, architecture,
          roadmap and career analysis.
        </p>

        <div className="
          flex
          flex-wrap
          justify-center
          gap-3
          mt-7
        ">

          <span className="
            px-4 py-2
            rounded-full
            bg-white/5
            border border-white/10
            text-gray-400
            text-sm
          ">
            🔬 Research
          </span>

          <span className="
            px-4 py-2
            rounded-full
            bg-white/5
            border border-white/10
            text-gray-400
            text-sm
          ">
            🏗️ Architecture
          </span>

          <span className="
            px-4 py-2
            rounded-full
            bg-white/5
            border border-white/10
            text-gray-400
            text-sm
          ">
            🗺️ Roadmap
          </span>

          <span className="
            px-4 py-2
            rounded-full
            bg-white/5
            border border-white/10
            text-gray-400
            text-sm
          ">
            💼 Career Fit
          </span>

        </div>

      </div>

    </div>

  </section>
)}

      {/* Results */}
      {result && (

        <div className="relative z-10 max-w-6xl mx-auto px-4 pb-20">

          <p className="text-gray-400 text-sm">
            Generated: {generatedAt}
          </p>


          {/* Tabs */}
          {/* Result Navigation */}
<div className="sticky top-4 z-20 mb-8">

  <div className="
    p-2
    rounded-2xl
    bg-[#0b1020]/90
    backdrop-blur-xl
    border border-white/10
    shadow-2xl
    shadow-black/30
  ">

    <div className="grid grid-cols-2 md:grid-cols-5 gap-2">

      <button
        onClick={() => setActiveTab("project")}
        className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
          activeTab === "project"
            ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
            : "text-gray-400 hover:text-white hover:bg-white/5"
        }`}
      >
        🚀 Project
      </button>

      <button
        onClick={() => setActiveTab("architecture")}
        className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
          activeTab === "architecture"
            ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
            : "text-gray-400 hover:text-white hover:bg-white/5"
        }`}
      >
        🏗️ Architecture
      </button>

      <button
        onClick={() => setActiveTab("roadmap")}
        className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
          activeTab === "roadmap"
            ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
            : "text-gray-400 hover:text-white hover:bg-white/5"
        }`}
      >
        🗺️ Roadmap
      </button>

      <button
        onClick={() => setActiveTab("research")}
        className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
          activeTab === "research"
            ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
            : "text-gray-400 hover:text-white hover:bg-white/5"
        }`}
      >
        🔬 Research
      </button>

      <button
        onClick={() => setActiveTab("career")}
        className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
          activeTab === "career"
            ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
            : "text-gray-400 hover:text-white hover:bg-white/5"
        }`}
      >
        💼 Career
      </button>

    </div>

  </div>

</div>


          {/* Project */}
          {activeTab === "project" && selectedProject && (
  <div>

    {/* Project Header */}
    {/* Premium Project Header */}
<div className="
  relative overflow-hidden
  bg-gradient-to-br from-[#111936] via-[#0d1428] to-[#090d1a]
  p-8 md:p-10
  rounded-3xl
  border border-white/10
  shadow-2xl
  mb-6
">

  {/* Glow */}
  <div className="
    absolute -top-24 -right-24
    w-64 h-64
    bg-blue-600/20
    rounded-full
    blur-3xl
  " />

  <div className="relative">

    <div className="flex flex-wrap items-center gap-3 mb-5">

      <span className="
        px-3 py-1 rounded-full
        bg-blue-500/10
        border border-blue-500/20
        text-blue-300
        text-xs font-semibold
        tracking-wider
      ">
        AI PROJECT
      </span>

      <span className="
        px-3 py-1 rounded-full
        bg-purple-500/10
        border border-purple-500/20
        text-purple-300
        text-xs
      ">
        {interest}
      </span>

    </div>

    <h2 className="
      text-3xl md:text-5xl
      font-extrabold
      tracking-tight
      text-white
      leading-tight
    ">
      {selectedProject.project_name}
    </h2>

    <p className="
      text-gray-400
      text-lg
      mt-5
      max-w-3xl
      leading-8
    ">
      A practical AI solution designed to solve a real-world
      problem and demonstrate modern software engineering,
      AI and data skills.
    </p>

  </div>

</div>


    {/* Problem */}
    {/* Project Details */}
<div className="grid md:grid-cols-2 gap-5">

  {/* Problem */}
  <div className="
    bg-white/[0.03]
    backdrop-blur-sm
    p-7
    rounded-2xl
    border border-white/10
    hover:border-blue-500/30
    transition-all
  ">

    <div className="flex items-center gap-3 mb-4">
      <span className="text-2xl">🎯</span>
      <h3 className="text-xl font-bold">
        Problem
      </h3>
    </div>

    <p className="text-gray-400 leading-7">
      {selectedProject.problem}
    </p>

  </div>

  {/* Solution */}
  <div className="
    bg-white/[0.03]
    backdrop-blur-sm
    p-7
    rounded-2xl
    border border-white/10
    hover:border-purple-500/30
    transition-all
  ">

    <div className="flex items-center gap-3 mb-4">
      <span className="text-2xl">💡</span>
      <h3 className="text-xl font-bold">
        Solution
      </h3>
    </div>

    <p className="text-gray-400 leading-7">
      {selectedProject.solution}
    </p>

  </div>

  {/* Why Unique */}
  <div className="
    md:col-span-2
    bg-white/[0.03]
    backdrop-blur-sm
    p-7
    rounded-2xl
    border border-white/10
    hover:border-cyan-500/30
    transition-all
  ">

    <div className="flex items-center gap-3 mb-4">
      <span className="text-2xl">⭐</span>
      <h3 className="text-xl font-bold">
        Why This Project Stands Out
      </h3>
    </div>

    <p className="text-gray-400 leading-7">
      {selectedProject.why_unique}
    </p>

  </div>

</div>


    {/* Why This Project Won */}
    <div className="bg-gray-900 p-6 rounded-xl border border-gray-700 shadow-lg mb-5">

      <h3 className="text-xl font-bold text-white mb-3">
        🏆 Why This Project Won
      </h3>

      <p className="text-gray-300 leading-7">
        {selectedProject.why_project_won}
      </p>

    </div>


    {/* Tech Stack */}
    {/* Tech Stack */}
<div className="
  mt-5
  bg-white/[0.03]
  backdrop-blur-sm
  p-7
  rounded-2xl
  border border-white/10
">

  <div className="flex items-center gap-3 mb-5">

    <span className="text-2xl">🛠️</span>

    <div>
      <h3 className="text-xl font-bold">
        Technology Stack
      </h3>

      <p className="text-gray-500 text-sm mt-1">
        Technologies recommended for implementation
      </p>
    </div>

  </div>

  <div className="flex flex-wrap gap-3">

    {selectedProject.tech_stack?.map(
      (tech: string, index: number) => (

        <span
          key={index}
          className="
            px-4 py-2.5
            rounded-xl
            bg-gradient-to-r
            from-blue-500/10
            to-purple-500/10
            border border-blue-500/20
            text-blue-300
            text-sm
            font-medium
            hover:border-blue-400/50
            hover:bg-blue-500/20
            transition-all
          "
        >
          {tech}
        </span>

      )
    )}

  </div>

</div>

  </div>
)}


          {/* Architecture */}
          {activeTab === "architecture" && (
  <div>

    <div className="mb-6">

      <div className="mb-8">

  <div className="flex items-center gap-3 mb-3">

    <span className="
      w-10 h-10
      rounded-xl
      bg-blue-500/10
      border border-blue-500/20
      flex items-center justify-center
      text-xl
    ">
      🏗️
    </span>

    <div>
      <p className="text-blue-400 text-xs font-semibold tracking-widest">
        TECHNICAL DESIGN
      </p>

      <h2 className="text-3xl md:text-4xl font-bold text-white mt-1">
        System Architecture
      </h2>
    </div>

  </div>

  <p className="text-gray-400 max-w-2xl leading-7">
    A high-level view of how the frontend, backend, AI workflow,
    database and external data sources work together.
  </p>

</div>

      <p className="text-gray-400 mt-2">
        The main technologies and components used to build the project.
      </p>

    </div>


    {(() => {

      let architecture: any = null;

      try {
        architecture = JSON.parse(result.architecture);
      } catch {
        architecture = null;
      }

      if (!architecture) {
        return (
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
            <p className="text-gray-400">
              Architecture information is unavailable.
            </p>
          </div>
        );
      }

      return (
        <>

          {/* Architecture Components */}
          {/* System Architecture Diagram */}

<div className="
  bg-gradient-to-br
  from-[#0c1326]
  to-[#080c18]
  rounded-3xl
  border border-white/10
  p-6 md:p-10
  shadow-2xl
">

  <div className="text-center mb-8">

    <p className="text-gray-500 text-xs uppercase tracking-widest">
      Application Flow
    </p>

    <h3 className="text-2xl font-bold mt-2">
      How the system works
    </h3>

  </div>

  {/* Frontend */}

  <div className="flex flex-col items-center">

    <div className="
      w-full max-w-md
      p-5
      rounded-2xl
      bg-blue-500/10
      border border-blue-500/30
      text-center
    ">

      <div className="text-3xl mb-2">
        🎨
      </div>

      <h4 className="text-lg font-bold">
        Frontend
      </h4>

      <p className="text-gray-400 text-sm mt-2">
        {architecture.frontend}
      </p>

    </div>

    <div className="text-blue-400 text-2xl py-3">
      ↓
    </div>

    {/* Backend */}

    <div className="
      w-full max-w-md
      p-5
      rounded-2xl
      bg-purple-500/10
      border border-purple-500/30
      text-center
    ">

      <div className="text-3xl mb-2">
        ⚙️
      </div>

      <h4 className="text-lg font-bold">
        Backend API
      </h4>

      <p className="text-gray-400 text-sm mt-2">
        {architecture.backend}
      </p>

    </div>

    <div className="text-purple-400 text-2xl py-3">
      ↓
    </div>

    {/* AI + Database */}

    <div className="
      grid md:grid-cols-2
      gap-5
      w-full
      max-w-4xl
    ">

      <div className="
        p-6
        rounded-2xl
        bg-cyan-500/10
        border border-cyan-500/30
        text-center
      ">

        <div className="text-3xl mb-2">
          🤖
        </div>

        <h4 className="text-lg font-bold">
          AI / ML Layer
        </h4>

        <p className="text-gray-400 text-sm mt-2">
          {architecture.ai_ml}
        </p>

      </div>

      <div className="
        p-6
        rounded-2xl
        bg-emerald-500/10
        border border-emerald-500/30
        text-center
      ">

        <div className="text-3xl mb-2">
          🗄️
        </div>

        <h4 className="text-lg font-bold">
          Database
        </h4>

        <p className="text-gray-400 text-sm mt-2">
          {architecture.database}
        </p>

      </div>

    </div>

    <div className="text-cyan-400 text-2xl py-3">
      ↓
    </div>

    {/* Data Sources */}

    <div className="
      w-full max-w-md
      p-5
      rounded-2xl
      bg-orange-500/10
      border border-orange-500/30
      text-center
    ">

      <div className="text-3xl mb-2">
        📊
      </div>

      <h4 className="text-lg font-bold">
        Data Sources
      </h4>

      <p className="text-gray-400 text-sm mt-2">
        {architecture.data_sources}
      </p>

    </div>

  </div>

</div>

{/* Technical Components */}

<div className="grid md:grid-cols-3 gap-5 mt-6">

  {/* APIs */}

  <div className="
    bg-white/[0.03]
    p-6
    rounded-2xl
    border border-white/10
    hover:border-blue-500/30
    transition
  ">

    <div className="text-2xl mb-3">
      🔗
    </div>

    <h4 className="font-bold text-lg mb-2">
      APIs
    </h4>

    <p className="text-gray-400 text-sm leading-6">
      {architecture.apis}
    </p>

  </div>

  {/* Security */}

  <div className="
    bg-white/[0.03]
    p-6
    rounded-2xl
    border border-white/10
    hover:border-purple-500/30
    transition
  ">

    <div className="text-2xl mb-3">
      🔐
    </div>

    <h4 className="font-bold text-lg mb-2">
      Security
    </h4>

    <p className="text-gray-400 text-sm leading-6">
      {architecture.security}
    </p>

  </div>

  {/* Deployment */}

  <div className="
    bg-white/[0.03]
    p-6
    rounded-2xl
    border border-white/10
    hover:border-cyan-500/30
    transition
  ">

    <div className="text-2xl mb-3">
      🚀
    </div>

    <h4 className="font-bold text-lg mb-2">
      Deployment
    </h4>

    <p className="text-gray-400 text-sm leading-6">
      {architecture.deployment}
    </p>

  </div>

</div>

          {/* Data Flow */}
          <div className="
  mt-6
  bg-gradient-to-br
  from-[#0c1326]
  to-[#080c18]
  p-7 md:p-9
  rounded-3xl
  border border-white/10
  shadow-xl
">

            <div className="mb-7">

  <p className="text-cyan-400 text-xs font-semibold tracking-widest">
    REQUEST LIFECYCLE
  </p>

  <h3 className="text-2xl font-bold text-white mt-2">
    🔄 Data Flow
  </h3>

  <p className="text-gray-500 text-sm mt-2">
    How information moves through the application.
  </p>

</div>

            <div className="space-y-4">

              {result.architecture &&
                (() => {
                  try {

                    const data = JSON.parse(result.architecture);

                    return data.data_flow?.map(
                      (step: string, index: number) => (

                        <div
                          key={index}
                          className="
  flex items-start gap-4
  p-4
  rounded-xl
  bg-white/[0.03]
  border border-white/5
  hover:border-blue-500/20
  transition
"
                        >

                          <div
                            className="min-w-8 h-8 rounded-full
                                       bg-blue-600 flex items-center
                                       justify-center font-bold"
                          >
                            {index + 1}
                          </div>

                          <p className="text-gray-300 leading-6 pt-1">
                            {step}
                          </p>

                        </div>

                      )
                    );

                  } catch {
                    return null;
                  }
                })()}

            </div>

          </div>

        </>
      );

    })()}

  </div>
)}


          {/* Roadmap */}
          {activeTab === "roadmap" && (
  <div>

    <div className="mb-6">

      <p className="text-blue-400 text-sm font-semibold">
        IMPLEMENTATION PLAN
      </p>

      <h2 className="text-3xl font-bold text-white mt-1">
        🗺️ 4-Week Roadmap
      </h2>

      <p className="text-gray-400 mt-2">
        A simple step-by-step plan to build your project.
      </p>

    </div>


    <div className="space-y-5">

      {result.roadmap?.map(
        (week: any, index: number) => (

          <div
            key={index}
            className="bg-gray-900 p-6 rounded-xl border border-gray-700 shadow-lg"
          >

            {/* Week Header */}
            <div className="flex items-center gap-3 mb-5">

              <div
                className="w-10 h-10 rounded-full bg-blue-600
                           flex items-center justify-center
                           font-bold"
              >
                {index + 1}
              </div>

              <h3 className="text-xl font-bold text-white">
                {week.title}
              </h3>

            </div>


            {/* Tasks */}
            <div className="space-y-3">

              {week.tasks?.map(
                (task: string, taskIndex: number) => (

                  <div
                    key={taskIndex}
                    className="flex items-start gap-3
                               bg-gray-800 p-4 rounded-lg"
                  >

                    <span className="text-blue-400 font-bold">
                      ✓
                    </span>

                    <p className="text-gray-300 leading-6">
                      {task}
                    </p>

                  </div>

                )
              )}

            </div>

          </div>

        )
      )}

    </div>

  </div>
)}


          {/* Research */}
          {/* Research */}
{activeTab === "research" && (
  <div>

    {/* Research Header */}
    <div className="mb-8">

      <div className="flex items-center gap-3 mb-3">

        <span className="
          w-10 h-10
          rounded-xl
          bg-purple-500/10
          border border-purple-500/20
          flex items-center justify-center
          text-xl
        ">
          🔬
        </span>

        <div>
          <p className="text-purple-400 text-xs font-semibold tracking-widest">
            AI RESEARCH INTELLIGENCE
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-white mt-1">
            Research Insights
          </h2>
        </div>

      </div>

      <p className="text-gray-400 max-w-2xl leading-7">
        Explore current research trends, technologies, datasets and
        industry opportunities related to your selected domain.
      </p>

    </div>


    {/* Research Content */}
    <div className="
      bg-gradient-to-br
      from-[#0c1326]
      to-[#080c18]
      p-7 md:p-10
      rounded-3xl
      border border-white/10
      shadow-2xl
    ">

      <div className="
        flex items-center gap-3
        mb-8 pb-5
        border-b border-white/10
      ">

        <span className="text-2xl">
          ✨
        </span>

        <div>
          <h3 className="text-xl font-bold text-white">
            Research Summary
          </h3>

          <p className="text-gray-500 text-sm mt-1">
            AI-generated intelligence for {interest}
          </p>
        </div>

      </div>


      {/* Markdown Research */}
      <div className="
        research-content
        text-gray-300
        leading-7
        [&_h1]:text-2xl
        [&_h1]:font-bold
        [&_h1]:text-white
        [&_h1]:mb-6

        [&_h2]:text-xl
        [&_h2]:font-bold
        [&_h2]:text-white
        [&_h2]:mt-8
        [&_h2]:mb-3

        [&_p]:text-gray-400
        [&_p]:mb-4

        [&_ul]:space-y-3
        [&_li]:text-gray-300
        [&_li]:pl-2

        [&_strong]:text-white
      ">
        <ReactMarkdown>
          {result.research}
        </ReactMarkdown>
      </div>

    </div>


    {/* Academic Research */}
    <div className="
      mt-6
      relative overflow-hidden
      bg-gradient-to-r
      from-purple-500/10
      via-blue-500/10
      to-cyan-500/10
      p-7 md:p-8
      rounded-3xl
      border border-white/10
    ">

      <div className="
        absolute -right-20 -top-20
        w-56 h-56
        rounded-full
        bg-purple-500/10
        blur-3xl
      " />

      <div className="relative flex flex-col md:flex-row
                      md:items-center md:justify-between gap-6">

        <div>

          <div className="flex items-center gap-3 mb-3">

            <span className="text-2xl">
              📚
            </span>

            <h3 className="text-xl font-bold text-white">
              Explore Academic Research
            </h3>

          </div>

          <p className="text-gray-400 max-w-xl leading-6">
            Discover academic papers and research publications
            related to <span className="text-gray-200 font-medium">
              {interest}
            </span> using Google Scholar.
          </p>

        </div>


        <a
          href={`https://scholar.google.com/scholar?q=${encodeURIComponent(
            interest
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center justify-center
            gap-2
            px-6 py-3
            rounded-xl
            bg-white/10
            border border-white/10
            text-white
            font-semibold
            hover:bg-white/15
            hover:border-purple-400/30
            transition-all
            whitespace-nowrap
          "
        >
          Search Papers
          <span>↗</span>
        </a>

      </div>

    </div>


    {/* Research Value */}
    <div className="grid md:grid-cols-3 gap-4 mt-6">

      <div className="
        bg-white/[0.03]
        p-5
        rounded-2xl
        border border-white/10
      ">
        <div className="text-2xl mb-3">
          🔥
        </div>

        <h4 className="font-bold text-white">
          Current Trends
        </h4>

        <p className="text-gray-500 text-sm mt-2">
          Understand emerging directions in your selected domain.
        </p>
      </div>


      <div className="
        bg-white/[0.03]
        p-5
        rounded-2xl
        border border-white/10
      ">
        <div className="text-2xl mb-3">
          🧠
        </div>

        <h4 className="font-bold text-white">
          Technologies
        </h4>

        <p className="text-gray-500 text-sm mt-2">
          Identify technologies that can support your project.
        </p>
      </div>


      <div className="
        bg-white/[0.03]
        p-5
        rounded-2xl
        border border-white/10
      ">
        <div className="text-2xl mb-3">
          💡
        </div>

        <h4 className="font-bold text-white">
          Industry Opportunities
        </h4>

        <p className="text-gray-500 text-sm mt-2">
          Connect research knowledge with practical applications.
        </p>
      </div>

    </div>

  </div>
)}

          {/* Career Fit */}
        {/* Career Fit */}
{activeTab === "career" && (
  <div>

    {(() => {
      const domainRelevance = result.domain_relevance ?? 0;
      const industryValue = result.industry_value ?? 0;
      const resumeImpact = result.resume_impact ?? 0;
      const difficulty = result.difficulty ?? 0;

      const overallScore = Math.round(
        ((domainRelevance + industryValue + resumeImpact) / 30) * 100
      );

      const scoreLabel =
        overallScore >= 85
          ? "Excellent Fit"
          : overallScore >= 70
          ? "Strong Fit"
          : overallScore >= 50
          ? "Good Fit"
          : "Needs Improvement";

      return (
        <>
          {/* Header */}
          <div className="mb-8">

            <div className="flex items-center gap-3 mb-3">

              <span className="
                w-10 h-10
                rounded-xl
                bg-green-500/10
                border border-green-500/20
                flex items-center justify-center
                text-xl
              ">
                💼
              </span>

              <div>
                <p className="text-green-400 text-xs font-semibold tracking-widest">
                  PROJECT EVALUATION
                </p>

                <h2 className="text-3xl md:text-4xl font-bold text-white mt-1">
                  Career Fit
                </h2>
              </div>

            </div>

            <p className="text-gray-400 max-w-2xl leading-7">
              Understand how this project strengthens your technical,
              AI and data-oriented career profile.
            </p>

          </div>


          {/* Overall Score */}
          <div className="
            relative overflow-hidden
            bg-gradient-to-br
            from-[#101a38]
            via-[#0d1428]
            to-[#090d1a]
            p-8 md:p-10
            rounded-3xl
            border border-white/10
            shadow-2xl
            mb-6
            text-center
          ">

            <div className="
              absolute -top-24 -right-24
              w-72 h-72
              bg-blue-600/20
              rounded-full
              blur-3xl
            " />

            <div className="relative">

              <p className="text-blue-400 text-xs font-semibold tracking-widest">
                OVERALL PROJECT FIT
              </p>

              <div className="mt-4">

                <span className="
                  text-6xl md:text-7xl
                  font-extrabold
                  bg-gradient-to-r
                  from-blue-400
                  via-cyan-400
                  to-purple-500
                  bg-clip-text
                  text-transparent
                ">
                  {overallScore}%
                </span>

              </div>

              <p className="text-xl font-bold text-white mt-2">
                {scoreLabel}
              </p>

              <p className="text-gray-500 text-sm mt-2">
                Based on domain relevance, industry value and resume impact
              </p>


              {/* Score Bar */}
              <div className="
                max-w-2xl
                mx-auto
                mt-7
                h-3
                rounded-full
                bg-white/5
                overflow-hidden
              ">

                <div
                  className="
                    h-full
                    rounded-full
                    bg-gradient-to-r
                    from-blue-500
                    via-cyan-400
                    to-purple-500
                    transition-all
                    duration-1000
                  "
                  style={{
                    width: `${overallScore}%`,
                  }}
                />

              </div>

            </div>

          </div>


          {/* Evaluation Metrics */}
          <div className="grid md:grid-cols-2 gap-5 mb-6">

            {/* Domain */}
            <div className="
              bg-white/[0.03]
              p-6
              rounded-2xl
              border border-white/10
              hover:border-blue-500/30
              transition
            ">

              <div className="flex justify-between items-start">

                <div>
                  <p className="text-gray-400 text-sm">
                    Domain Relevance
                  </p>

                  <p className="text-gray-500 text-xs mt-1">
                    Alignment with your selected domain
                  </p>
                </div>

                <span className="text-2xl">
                  🎯
                </span>

              </div>

              <p className="text-4xl font-bold text-white mt-5">
                {domainRelevance}
                <span className="text-lg text-gray-500">
                  /10
                </span>
              </p>

            </div>


            {/* Industry */}
            <div className="
              bg-white/[0.03]
              p-6
              rounded-2xl
              border border-white/10
              hover:border-purple-500/30
              transition
            ">

              <div className="flex justify-between items-start">

                <div>
                  <p className="text-gray-400 text-sm">
                    Industry Value
                  </p>

                  <p className="text-gray-500 text-xs mt-1">
                    Real-world usefulness
                  </p>
                </div>

                <span className="text-2xl">
                  🏭
                </span>

              </div>

              <p className="text-4xl font-bold text-white mt-5">
                {industryValue}
                <span className="text-lg text-gray-500">
                  /10
                </span>
              </p>

            </div>


            {/* Resume */}
            <div className="
              bg-white/[0.03]
              p-6
              rounded-2xl
              border border-white/10
              hover:border-cyan-500/30
              transition
            ">

              <div className="flex justify-between items-start">

                <div>
                  <p className="text-gray-400 text-sm">
                    Resume Impact
                  </p>

                  <p className="text-gray-500 text-xs mt-1">
                    Portfolio and resume value
                  </p>
                </div>

                <span className="text-2xl">
                  📄
                </span>

              </div>

              <p className="text-4xl font-bold text-white mt-5">
                {resumeImpact}
                <span className="text-lg text-gray-500">
                  /10
                </span>
              </p>

            </div>


            {/* Difficulty */}
            <div className="
              bg-white/[0.03]
              p-6
              rounded-2xl
              border border-white/10
              hover:border-orange-500/30
              transition
            ">

              <div className="flex justify-between items-start">

                <div>
                  <p className="text-gray-400 text-sm">
                    Project Difficulty
                  </p>

                  <p className="text-gray-500 text-xs mt-1">
                    Overall implementation complexity
                  </p>
                </div>

                <span className="text-2xl">
                  ⚡
                </span>

              </div>

              <p className="text-4xl font-bold text-white mt-5">
                {difficulty}
                <span className="text-lg text-gray-500">
                  /10
                </span>
              </p>

            </div>

          </div>


          {/* Skills */}
          <div className="
            bg-white/[0.03]
            p-7
            rounded-2xl
            border border-white/10
            mb-6
          ">

            <div className="flex items-center gap-3 mb-5">

              <span className="text-2xl">
                🛠️
              </span>

              <div>
                <h3 className="text-xl font-bold">
                  Skills Demonstrated
                </h3>

                <p className="text-gray-500 text-sm mt-1">
                  Technologies and capabilities represented by this project
                </p>
              </div>

            </div>

            <div className="flex flex-wrap gap-3">

              {selectedProject?.tech_stack?.map(
                (tech: string, index: number) => (

                  <span
                    key={index}
                    className="
                      px-4 py-2.5
                      rounded-xl
                      bg-blue-500/10
                      border border-blue-500/20
                      text-blue-300
                      text-sm
                      font-medium
                      hover:bg-blue-500/20
                      hover:border-blue-400/40
                      transition
                    "
                  >
                    {tech}
                  </span>

                )
              )}

            </div>

          </div>


          {/* Career Alignment */}
          <div>

            <div className="mb-5">

              <p className="text-purple-400 text-xs font-semibold tracking-widest">
                CAREER ALIGNMENT
              </p>

              <h3 className="text-2xl font-bold text-white mt-2">
                How this project supports your target roles
              </h3>

            </div>


            <div className="grid md:grid-cols-2 gap-5">

              {/* System Engineer */}
              <div className="
                group
                bg-gradient-to-br
                from-blue-500/10
                to-transparent
                p-6
                rounded-2xl
                border border-white/10
                hover:border-blue-500/40
                transition-all
              ">

                <div className="flex items-start justify-between">

                  <div className="text-3xl">
                    🖥️
                  </div>

                  <span className="
                    px-3 py-1
                    rounded-full
                    bg-blue-500/10
                    text-blue-300
                    text-xs
                  ">
                    Strong Fit
                  </span>

                </div>

                <h4 className="text-xl font-bold text-white mt-4">
                  System Engineer
                </h4>

                <p className="text-gray-400 text-sm leading-6 mt-2">
                  Demonstrates backend APIs, database integration,
                  system architecture, software engineering and deployment.
                </p>

              </div>


              {/* AI/ML Engineer */}
              <div className="
                group
                bg-gradient-to-br
                from-purple-500/10
                to-transparent
                p-6
                rounded-2xl
                border border-white/10
                hover:border-purple-500/40
                transition-all
              ">

                <div className="flex items-start justify-between">

                  <div className="text-3xl">
                    🤖
                  </div>

                  <span className="
                    px-3 py-1
                    rounded-full
                    bg-purple-500/10
                    text-purple-300
                    text-xs
                  ">
                    Excellent Fit
                  </span>

                </div>

                <h4 className="text-xl font-bold text-white mt-4">
                  AI/ML Engineer
                </h4>

                <p className="text-gray-400 text-sm leading-6 mt-2">
                  Demonstrates AI workflow design, LLM integration,
                  research-based development and AI problem solving.
                </p>

              </div>


              {/* Data Analyst */}
              <div className="
                group
                bg-gradient-to-br
                from-cyan-500/10
                to-transparent
                p-6
                rounded-2xl
                border border-white/10
                hover:border-cyan-500/40
                transition-all
              ">

                <div className="flex items-start justify-between">

                  <div className="text-3xl">
                    📊
                  </div>

                  <span className="
                    px-3 py-1
                    rounded-full
                    bg-cyan-500/10
                    text-cyan-300
                    text-xs
                  ">
                    Strong Fit
                  </span>

                </div>

                <h4 className="text-xl font-bold text-white mt-4">
                  Data Analyst
                </h4>

                <p className="text-gray-400 text-sm leading-6 mt-2">
                  Demonstrates SQL, database management, data sources,
                  research analysis and data-driven decision support.
                </p>

              </div>


              {/* Data Scientist */}
              <div className="
                group
                bg-gradient-to-br
                from-emerald-500/10
                to-transparent
                p-6
                rounded-2xl
                border border-white/10
                hover:border-emerald-500/40
                transition-all
              ">

                <div className="flex items-start justify-between">

                  <div className="text-3xl">
                    🧪
                  </div>

                  <span className="
                    px-3 py-1
                    rounded-full
                    bg-emerald-500/10
                    text-emerald-300
                    text-xs
                  ">
                    Strong Fit
                  </span>

                </div>

                <h4 className="text-xl font-bold text-white mt-4">
                  Data Scientist
                </h4>

                <p className="text-gray-400 text-sm leading-6 mt-2">
                  Demonstrates data-driven problem solving,
                  machine learning application and research experimentation.
                </p>

              </div>

            </div>

          </div>

        </>
      );
    })()}

  </div>
)}

        </div>

      )}
   {/* Premium Footer */}
<footer className="
  relative
  z-10
  border-t border-white/10
  mt-16
">

  <div className="
    max-w-6xl
    mx-auto
    px-6
    py-10
  ">

    <div className="
      flex
      flex-col
      md:flex-row
      items-center
      justify-between
      gap-5
    ">

      <div className="text-center md:text-left">

        <div className="
          text-lg
          font-bold
          text-white
        ">
          ✦ AI Project Mentor
        </div>

        <p className="
          text-gray-500
          text-sm
          mt-1
        ">
          From AI idea to project blueprint.
        </p>

      </div>


      <div className="
        flex
        flex-wrap
        justify-center
        gap-3
        text-xs
        text-gray-500
      ">

        <span className="
          px-3 py-1.5
          rounded-full
          bg-white/5
          border border-white/10
        ">
          Next.js
        </span>

        <span className="
          px-3 py-1.5
          rounded-full
          bg-white/5
          border border-white/10
        ">
          FastAPI
        </span>

        <span className="
          px-3 py-1.5
          rounded-full
          bg-white/5
          border border-white/10
        ">
          LangGraph
        </span>

        <span className="
          px-3 py-1.5
          rounded-full
          bg-white/5
          border border-white/10
        ">
          MySQL
        </span>

      </div>

    </div>


    <div className="
      text-center
      text-gray-600
      text-xs
      mt-8
      pt-6
      border-t border-white/5
    ">
      AI-powered project research, planning and system design.
    </div>

  </div>

</footer>

    </main>
  );
}