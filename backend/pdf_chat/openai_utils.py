# # pdf_chat/openai_utils.py
# import openai

# def generate_openai_response(api_key, pdf_content, user_question):
#     openai.api_key = api_key

#     pdf_content = """Who Owns OpenAI Today?
#     To dig down into OpenAI history, the initial phase of OpenAI saw massive support from industry tycoons, including notable contributions from Elon Musk and Peter Thiel.

#     Their shared dream was to ensure AI’s immense potential didn’t end up concentrated in a few hands.

#     As the landscape evolved, Musk’s AI ambitions were overshadowed, leading the visionary to make the strategic decision to resign from the board in 2018, avoiding any potential conflicts with his numerous ventures like Tesla and SpaceX.

#     The soaring ambitions and financial needs of OpenAI led to its metamorphosis from a nonprofit to a “capped-profit” for-profit entity in 2019.

#     This significant transition was supercharged by a colossal $1 billion investment from Microsoft, which also secured certain rights to license and utilize OpenAI’s groundbreaking technology.

#     Today, the ownership pie is divided between Microsoft (49%), other stakeholders (49%), and the original OpenAI non-profit foundation, which staunchly preserves its autonomy as the leading firm continues to write OpenAI history.

#     OpenAI Inc. serves as the overarching non-profit umbrella, while the commercial aspirations are handled by OpenAI LP, its for-profit arm."""

#     user_question = "Who owns OpenAI today?"

#     # Customize this query based on your requirements
#     # query = f"PDF content: {pdf_content}\nUser question: {user_question}"
#     query = f"PDF content: {pdf_content}\nUser question: {user_question}"

#     response = openai.completions.create(
#         engine="gpt-3.5-turbo",  # You can choose a different engine if needed
#         prompt=query,
#         max_tokens=150,  # Adjust based on your requirements
#     )
#     print(response.choices[0].text.strip())
#     return response.choices[0].text.strip()

# generate_openai_response("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", "", "")