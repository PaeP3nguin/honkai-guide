const pointsPerSecondSS = 53 + 1 / 3;
const pointsPerSecondBase = 13 + 1/3;
//const pointsPerSecondUp = 16;

function generateScores(seconds: number) {
  const scoresByTime = [];
  for (let i = 0; i < seconds; i += 1) {
    const ssScoreRaw = 32000 - pointsPerSecondSS * (i + 1);
    const ssScore = Math.floor(ssScoreRaw);

    const baseRaw = 40000 - pointsPerSecondBase * (i + 1);
    const base = Math.floor(baseRaw);
    const up = Math.round(baseRaw * 1.2);

    scoresByTime.push({
      ssScore: ssScore,
      base: base,
      up: up,
      elapsedSec: i,
    });
  }
  return scoresByTime;
}

function countdownSecondsFilter(elapsedSecStr: string) {
  const elapsedSec = 300 - parseInt(elapsedSecStr);
  const minutes = Math.floor(elapsedSec / 60);
  const seconds = (elapsedSec - minutes * 60) % 60;

  const dMins = minutes > 9 ? minutes : "0" + minutes;
  const dSecs = seconds > 9 ? seconds : "0" + seconds;

  return dMins + ":" + dSecs;
}

export { generateScores, countdownSecondsFilter };
