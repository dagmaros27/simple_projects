const input = document.getElementById("username");
const sub = document.getElementById("sub");
const recentScore = localStorage.getItem("mostRecentScore");
const score =  document.getElementById('score');
const highScores = JSON.parse(localStorage.getItem("highScores")) || "";
console.log(highScores);
const MAX_HIGH_SCORES = 5;

score.innerText = recentScore;



input.addEventListener('keyup',()=>{
    sub.disabled = !input.value;
})
function saveHS(e){
    console.log('clicked');
 e.preventDefault();
 const sc = {
    score: recentScore,
    name: input.value
 };
 highScores.push(sc);
 highScores.sort((a,b)=> b.sc - a.sc);
 highScores.splice(MAX_HIGH_SCORES);
 console.log(highScores);

}