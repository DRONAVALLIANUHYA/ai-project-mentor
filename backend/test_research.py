from agents.research_agent import research_trends

while True:
    topic = input("\nEnter a topic (or 'exit'): ")

    if topic.lower() == "exit":
        break

    print("\n" + "=" * 50)
    print(f"RESEARCH FOR: {topic.upper()}")
    print("=" * 50 + "\n")

    print(research_trends(topic))