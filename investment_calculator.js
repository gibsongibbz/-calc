const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const criteria = [
  'Diversification',
  'Risk Assessment',
  'Regular Income Assessment',
  'Tactical Allocation',
  'Risk Mitigation Strategies',
  'Regular Rebalancing',
  'Long-Term Perspective',
  'Research and Due Diligence',
  'Income Reinvestment',
  'Regular Review and Adaptation',
];

const scores = {};

function askForCriteriaScore(index) {
  if (index === criteria.length) {
    calculateTotalScore();
    rl.close();
    return;
  }

  const criterion = criteria[index];
  rl.question(`Please score ${criterion} (1-5): `, (answer) => {
    const score = parseInt(answer);
    if (isNaN(score) || score < 1 || score > 5) {
      console.log('Please enter a valid score between 1 and 5.');
      askForCriteriaScore(index);
    } else {
      scores[criterion] = score;
      askForCriteriaScore(index + 1);
    }
  });
}

function calculateTotalScore() {
  let totalScore = 0;
  for (const criterion in scores) {
    totalScore += scores[criterion];
  }
  console.log('\nCriteria Scores:');
  for (const criterion in scores) {
    console.log(`${criterion}: ${scores[criterion]}`);
  }
  console.log(`\nTotal Score: ${totalScore}`);
}

console.log('Investment Criteria Scoring Calculator');
askForCriteriaScore(0);
