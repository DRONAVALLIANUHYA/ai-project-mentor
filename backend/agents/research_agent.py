from agents.github_intelligence_agent import github_intelligence
from models.llm import llm
from tools.arxiv_search import search_arxiv


def research_trends(user_interest: str):

    try:
        github_trends = github_intelligence()
        papers = search_arxiv(user_interest)

        prompt = f"""
You are a concise AI industry research analyst.

DOMAIN:
{user_interest}

RESEARCH PAPERS:
{papers}

GITHUB TRENDS:
{github_trends}

Summarize the most useful research information
for building an AI project in this domain.

Focus ONLY on:

1. Key Trends
2. Important Technologies
3. Useful Datasets/APIs
4. Real Industry Opportunities

RULES:

- Maximum 4 sections.
- Maximum 2 bullet points per section.
- Each bullet must be one short sentence.
- Do not repeat the same information.
- Do not discuss unrelated industries.
- Do not give career advice.
- Do not write a long explanation.
- Use Markdown only.
- Do not use HTML tags such as <br>.

RETURN EXACTLY:

# Research Insights

## 🔥 Key Trends
- ...
- ...

## 🛠 Technologies
- ...
- ...

## 📊 Datasets & APIs
- ...
- ...

## 💡 Industry Opportunities
- ...
- ...
"""

        response = llm.invoke(prompt)

        research = response.content.strip()

        # Keep research concise even if the model
        # produces more content than requested.
        lines = research.splitlines()

        clean_lines = []

        for line in lines:
            if line.strip():
                clean_lines.append(line.strip())

        # Limit the number of non-empty lines.
        research = "\n".join(clean_lines[:18])

        return research

    except Exception as e:
        return f"Research temporarily unavailable: {str(e)}"