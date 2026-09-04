import feedparser


def search_arxiv(topic: str):

    from urllib.parse import quote


    encoded_topic = quote(topic)

    url = (
        f"https://export.arxiv.org/api/query?"
        f"search_query=all:{encoded_topic}"
        f"&start=0&max_results=3"
    )

    feed = feedparser.parse(url)

    papers = []

    for entry in feed.entries:

        papers.append({
            "title": entry.title,
            "summary": entry.summary[:200]
        })

    return papers