const openai = require('../config/openai');

module.exports = async function engineer(instruction) {
  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [
      { role: 'system', content: 'You are a senior software engineer who builds exactly what is requested.' },
      { role: 'user', content: instruction }
    ],
  });

  return response.choices[0].message.content;
};