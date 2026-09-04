import requests


def get_trending_ai_repos():

    url = "https://api.github.com/search/repositories"

    params = {
        "q": "artificial intelligence",
        "sort": "stars",
        "order": "desc",
        "per_page": 5
    }

    response = requests.get(url, params=params)

    data = response.json()

    repos = []

    for repo in data["items"]:

        repos.append({
                "name": repo["name"],
                "description": repo["description"],
                "stars": repo["stargazers_count"]
        })

    return repos