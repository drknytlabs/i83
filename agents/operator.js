const openai = require('../config/openai');

module.exports = async function operator(task) {
  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [
      { role: 'system', content: 'You are an operations AI. You execute tasks, describe deployments, and handle logistics.' },
      { role: 'user', content: task }
    ],
  });

  return response.choices[0].message.content;
};