const fs = require('fs');
const strategist = require('./agents/strategist');
const engineer = require('./agents/engineer');
const operator = require('./agents/operator');
const logToMemory = require('./memory/logger');
const { execSync } = require('child_process');

function commitOutput(commitMessage = "🤖 AI Mission Commit") {
  try {
    execSync('git add .', { stdio: 'inherit' });
    execSync(`git commit -m "${commitMessage}"`, { stdio: 'inherit' });
    execSync('git push', { stdio: 'inherit' });
    console.log("✅ Output committed & pushed to GitHub.");
  } catch (err) {
    console.error("❌ Git push failed:", err.message);
  }
}
async function runMission() {
  const mission = JSON.parse(fs.readFileSync('./missions/bootstrapper.json'));
  console.log(`🚀 Mission: ${mission.title}\n`);

  for (const goal of mission.goals) {
    console.log(`🎯 Goal: ${goal}`);
    logToMemory('goals', `🎯 ${goal}`);

    const strategy = await strategist(goal);
    console.log(`🧠 Strategy:\n${strategy}\n`);
    logToMemory('strategy', strategy);

    const build = await engineer(strategy);
    console.log(`🔧 Build Output:\n${build}\n`);
    logToMemory('engineer', build);

    const ops = await operator(`Deploy or describe how to deploy: ${build}`);
    console.log(`🛰️ Deployment Response:\n${ops}\n`);
    logToMemory('operator', ops);

    console.log('============================================\n');
  }
  commitOutput(`🤖 Completed Mission: ${mission.title}`);
  execSync(`git tag -a "mission-${Date.now()}" -m "Auto-tag from ${commitMessage}"`);
execSync('git push --tags');
}

runMission();

runMission().catch(err => {
  console.error('❌ Mission runtime error:', err);
});