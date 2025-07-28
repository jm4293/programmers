function solution(k, score) {
    const hallOfFame = []; 
    const answer = [];

    for (let i = 0; i < score.length; i++) {
        const currentScore = score[i];

        hallOfFame.push(currentScore);
        hallOfFame.sort((a, b) => b - a);  

        if (hallOfFame.length > k) {
            hallOfFame.pop(); 
        }

        answer.push(hallOfFame[hallOfFame.length - 1]);
    }

    return answer;
}