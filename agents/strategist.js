const openai = require('../config/openai');

module.exports = async function strategist(goal) {
  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [
      { role: 'system', content: 'You are a business strategist. Your job is to break down goals into steps and define approach.' },
      { role: 'user', content: `Goal: ${goal}` }
    ],
  });

  return response.choices[0].message.content;
};