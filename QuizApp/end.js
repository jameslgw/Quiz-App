const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const MAX_HIGH_sCORES = 5;
console.log(highScores);

finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
    e.preventDefault();

    const score = {
        score: Math.floor(Math.random()*100),
        name: username.value,
    };
    highScores.push(score);

    //Sorting scores; if b.score > a.score, put b before a 
    highScores.sort((a, b) =>  b.score - a.score)
//Cuts off scores after top 5 scores
    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('/')
    console.log(highScores);
};

