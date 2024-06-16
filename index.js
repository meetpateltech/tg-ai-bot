const { Telegraf } = require('telegraf');
const { generateText } = require('ai');
require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN);

const googleModels = require('./models/google');
const groqModels = require('./models/groq');
const mistralModels = require('./models/mistral');
const openaiModels = require('./models/openai');
const anthropicModels = require('./models/anthropic');

const formatResponse = require('./utils/formatter');

let currentModel = groqModels.llama3_8b_8192;  // Default model

console.log('Bot is starting...');

bot.command('setmodel', async (ctx) => {
  const modelName = ctx.message.text.split(' ')[1];
  if (groqModels[modelName]) {
    currentModel = groqModels[modelName];
  } else if (googleModels[modelName]) {
    currentModel = googleModels[modelName];
  } else if (mistralModels[modelName]) {
    currentModel = mistralModels[modelName];
  } else if (openaiModels[modelName]) {
    currentModel = openaiModels[modelName];
  } else if (anthropicModels[modelName]) {
    currentModel = anthropicModels[modelName];
  } else {
    return ctx.reply('Invalid model name. Please choose a valid model.');
  }
  // console.log(`Model set to ${modelName}`);
  ctx.reply(`Model set to ${modelName}. Now ask me anything!`);
});

bot.on('text', async (ctx) => {
  const userInput = ctx.message.text;
  // console.log(`Received request from user: ${ctx.message.from.username} - ${userInput}`);

  try {
    const { text } = await generateText({
      model: currentModel.model,
      prompt: userInput,
    });

    const formattedResponse = formatResponse(text);
    console.log(`Sending response: ${formattedResponse}`);
    ctx.reply(formattedResponse, { parse_mode: 'HTML' });
  } catch (error) {
    // console.error('Error generating response:', error);
    ctx.reply('An error occurred while processing your request.');
  }
});

bot.launch().then(() => console.log('Bot is running!'));

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
