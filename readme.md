## TG AI Bot 🤖

This Telegram bot leverages the Vercel AI SDK to provide access to popular large language models. It offers a simple and convenient way to interact with powerful AI models directly within your Telegram chats. 💬

## Features ✨

* **Multiple Model Support:** Choose from a wide range of popular models including OpenAI's GPT models, Anthropic's Claude models, Google's Gemini models, Mistral's models, and Groq's Llama models. 🧠
* **Model Switching:** Easily switch between different models using the `/setmodel` command. 🔄
* **Rich Text Formatting:** Responses are automatically formatted for better readability within Telegram, including bold, italic, and bullet points.  📝

## Usage 🚀

1. **Set up environment variables:**
   * Create a `.env` file in the project root and add your API keys for the desired models:
     ```
     BOT_TOKEN=YOUR_TELEGRAM_BOT_TOKEN
     GROQ_API_KEY=YOUR_GROQ_API_KEY
     GOOGLE_GENERATIVE_AI_API_KEY=YOUR_GOOGLE_GENERATIVE_AI_API_KEY
     MISTRAL_API_KEY=YOUR_MISTRAL_API_KEY
     OPENAI_API_KEY=YOUR_OPENAI_API_KEY
     ANTHROPIC_API_KEY=YOUR_ANTHROPIC_API_KEY
     ```
2. **Deploy the bot:**
   * Ensure you have Node.js and npm installed.
   * Run `npm install` to install dependencies.
   * Start the bot using `npm start`.
3. **Start a conversation:**
   * Open your Telegram app and search for your bot by its username (which should be set in your bot's configuration).
   * Send messages to the bot, and it will respond using the current active model.
   * Use the `/setmodel` command followed by the model name to switch models (e.g., `/setmodel gpt_4_turbo`).

## Supported Models 🤖

* **OpenAI:**
  * gpt_4o
  * gpt_4
  * gpt_4_turbo
  * gpt_3_5_turbo
* **Anthropic:**
  * claude_3_ops
  * claude_3_haiku
  * claude_3_sonnet
* **Google:**
  * gemini_pro
  * gemini_1_5_pro
* **Mistral:**
  * small
  * large
* **Groq:**
  * llama3_8b_8192
  * llama3_70b_8192

## Contributing 🤝

Contributions are welcome! Please feel free to open an issue or submit a pull request.

## TODO 📝

* **Image Input:**  Allow users to send images to the bot for image-based responses. 🖼️
* **Formatting Fixes:** Improve text formatting consistency in responses. 🎨
* **Docker:**  Implement Docker support for easier deployment. 🐳
* **Model Selection:** Add a more user-friendly model selection method. 🧭
* **Error Handling:** Improve error messages for better user experience. 🚨
