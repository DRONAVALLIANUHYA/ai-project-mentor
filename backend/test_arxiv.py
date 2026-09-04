from tools.arxiv_search import search_arxiv

papers = search_arxiv("agentic ai")

for paper in papers:
    print("\nTITLE:")
    print(paper["title"])

    print("\nSUMMARY:")
    print(paper["summary"])

    print("\n" + "=" * 50)