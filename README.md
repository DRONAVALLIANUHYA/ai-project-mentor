✦ AI Project Mentor

> **From AI idea to project blueprint.**

AI Project Mentor is an AI-powered web application that converts a technology interest into a practical project blueprint with **research insights, project evaluation, system architecture, development roadmap, and career-fit analysis**.

## 🚀 Features

- 🔎 AI-powered research using **arXiv and GitHub**
- 💡 Intelligent project generation and evaluation
- 📊 Domain, industry, resume-impact and difficulty scoring
- 🏗️ Automated system architecture and data flow
- 🗺️ 4-week development roadmap
- 💾 MySQL-based project history
- 🎯 Career-fit analysis for technical roles
- 🔐 API rate limiting and input validation
- ⚠️ Centralized error handling and logging

## 🧠 AI Workflow

```text
User Technology Interest
          ↓
    Research Agent
          ↓
    Project Planner
          ↓
   Solution Designer
          ↓
    Project Blueprint

Research Agent

Collects relevant research from arXiv and GitHub and summarizes useful trends, technologies, datasets, APIs, and industry opportunities.

Project Planner

Creates and evaluates a practical project using domain relevance, industry value, resume impact, and difficulty.

Solution Designer

Generates the project's architecture, data flow, security considerations, deployment approach, and 4-week roadmap.


🏗️ Architecture
Next.js + React + TypeScript
            ↓
         FastAPI
            ↓
       LangGraph
            ↓
        Groq LLM
       ↙         ↘
   Research      MySQL
 arXiv/GitHub   SQLAlchemy


🗄️ Database

The application uses MySQL + SQLAlchemy ORM.

ai_project_mentor
├── projects
├── project_architecture
├── roadmap_weeks
└── history

Projects, architecture details, evaluation scores, and development roadmaps are stored for later access through the History page.


🔌 REST API
Method	Endpoint	Purpose
GET	/	API status
GET	/hello	Connectivity test
POST	/generate	Generate project blueprint
GET	/history	Retrieve project history


🛡️ Backend Engineering
FastAPI REST API
Pydantic request and AI-output validation
SlowAPI rate limiting
CORS configuration
Centralized exception handling
Application logging
SQLAlchemy database integration

🧰 Tech Stack

Frontend: Next.js, React, TypeScript, Tailwind CSS
Backend: Python, FastAPI, Pydantic, Uvicorn
AI: LangGraph, LangChain, Groq LLM
Database: MySQL, SQLAlchemy, PyMySQL
Research: arXiv, GitHub
Tools: Git, GitHub, npm

🎯 Career Relevance
Role	Relevant Skills
System Engineer	APIs, SQL, database design, architecture, logging, error handling
AI/ML Engineer	LLMs, LangGraph, LangChain, AI workflows
Data Analyst	MySQL, metrics, scoring, historical data
Data Scientist	Research analysis, evaluation, structured data

🖥️ Application
The application provides three main pages:

Home — Generate AI project blueprints
About — Understand the workflow and technology
History — View previously generated projects

⚙️ Run Locally
Backend
cd backend
pip install -r requirements.txt
uvicorn main:app --reload

Create backend/.env:

GROQ_API_KEY=your_groq_api_key
DATABASE_URL=mysql+pymysql://root:your_mysql_password@localhost:3306/ai_project_mentor
Frontend
cd frontend
npm install
npm run dev

Create frontend/.env.local:

NEXT_PUBLIC_API_URL=http://127.0.0.1:8000

Open:

http://localhost:3000

🔮 Future Improvements
Automated API and integration testing
GitHub Actions CI/CD
Production deployment
User authentication
Advanced project analytics
Industry-specific project recommendations

👩‍💻 Author

Anuhya

Built with AI, Python, Next.js and MySQL.