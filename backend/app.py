from flask import Flask, request, jsonify
from flask_cors import CORS
import openai
import os
import together

app = Flask(__name__)
CORS(app)


together.api_key = "tgp_v1_rb7KH6_osYP7hY6KJnUA0-U8rCN2QD2VAF2L7UDRPt4"
openai.api_base = "https://api.together.xyz/v1"
openai.api_type = "open_ai"

import traceback

@app.route("/chat", methods=["POST"])
def chat():
    data = request.get_json()
    chat_history = data.get("messages")

    if not chat_history or not isinstance(chat_history, list):
        return jsonify({"error": "Invalid or missing messages"}), 400

    last_user_message = chat_history[-1]["content"] if chat_history[-1]["role"] == "user" else ""

    messages = [
        {
            "role": "system",
            "content": (
                "You are Grainzo's AI Customer Service Assistant. "
                "Answer questions about products, company, services, and solutions clearly. "
                "If there is a typo, guess what the user meant and respond politely."
            )
        },
        {"role": "user", "content": last_user_message}
    ]

    if not messages:
        return jsonify({"error": "No messages provided"}), 400

    try:

        prompt = ""
        for msg in messages:
            role = msg["role"]
            content = msg["content"]
            prompt += f"{role.capitalize()}: {content}\n"
        prompt += "Assistant:"

        response = together.Complete.create(
            model="mistralai/Mistral-7B-Instruct-v0.1",
            prompt=prompt,
            max_tokens=512,
            temperature=0.7,
        )
        print(response)
        reply = response["choices"][0]["text"]
        return jsonify({"response": reply.strip()})

    except Exception as e:
        traceback.print_exc()
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(port=5009, debug=True)
