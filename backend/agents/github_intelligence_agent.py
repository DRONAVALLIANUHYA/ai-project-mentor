from tools.github_search import get_trending_ai_repos


def github_intelligence():

    repos = get_trending_ai_repos()

    insights = []

    for repo in repos:

        insights.append(
            f"{repo['name']} : {repo['description']}"
        )

    return insights