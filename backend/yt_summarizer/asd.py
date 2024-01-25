from openai import OpenAI




client = OpenAI(api_key="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")
conversation=[]
prompt = f"""Give me a json for a list of 3 users"""
conversation.append({"role": "user", "content": prompt})
response = client.chat.completions.create(
            model="gpt-3.5-turbo-16k",  # Replace with the model you're using
            messages=conversation,
            max_tokens=40,
        )

response = response.model_dump()
conversation.append(dict(list(response["choices"][0]["message"].items())[:2]))
print(conversation)
response = client.chat.completions.create(
            model="gpt-3.5-turbo-16k",  # Replace with the model you're using
            messages=conversation,
        )
response = response.model_dump()
print(response)
conversation.append(dict(list(response["choices"][0]["message"].items())[:2]))

print(conversation)