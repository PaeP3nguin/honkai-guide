const pointsPerSecond = 53 + 1 / 3;

function generateScores(seconds: number) {
    const scoresByTime = [];
    for (let i = 0; i < seconds; i += 1) {
        const rawScore = 32000 - pointsPerSecond * (i + 1);
        const score = Math.floor(rawScore);
        const up = Math.round(rawScore * 1.2);
        scoresByTime.push({
            score: score,
            up: up,
            elapsedSec: i,
        });
    }
    return scoresByTime;
}

function countdownSecondsFilter(elapsedSecStr: string) {
    let elapsedSec = 300 - parseInt(elapsedSecStr);
    let minutes = Math.floor(elapsedSec / 60);
    let seconds = (elapsedSec - minutes * 60) % 60;

    let dMins = minutes > 9 ? minutes : "0" + minutes;
    let dSecs = seconds > 9 ? seconds : "0" + seconds;

    return dMins + ":" + dSecs;
}

export { generateScores, countdownSecondsFilter };
