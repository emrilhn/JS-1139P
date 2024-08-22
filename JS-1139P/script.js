function increaseScore(teamName) {
    const scoreId = `score${teamName}`
    const scoreElement = document.getElementById(scoreId)
    let score = parseInt(scoreElement.textContent)
    scoreElement.textContent = ++score
    if(score <= 8) {
        scoreElement.textContent = +score
    }else{
        alert("skor zaten 7 yi geçti daha ne yapıcan !")
    }
    
}

function decreaseScore(teamName) {
    const scoreId = `score${teamName}`
    const scoreElement = document.getElementById(scoreId)
    let score = Number(scoreElement.textContent)
    
    if(score > 0) {
        scoreElement.textContent = --score
    }else{
        alert("skor zaten 0  !")
    }
}

function setNamePrompt(teamName) {
    const teamId = `Team${teamName}`;
    const teamNameElement = document.getElementById(teamId);
    const teamNamePrompt = prompt("Takımın Yeni İsmini giriniz");
    teamNameElement.innerText = teamNamePrompt;
  }

function setScorePrompt(teamName) {
    const score = prompt("Takımın Skorunu Girin");
    if (!isNaN(score) && score != null) {
      const parseIntScore = Number(score);
      if (Number.isInteger(parseIntScore) && parseIntScore >= 0) {
        if (parseIntScore > 7) {
          alert("En fazla 7 olmuştu abartmasak mı :)");
        } else {
          document.getElementById(`score${teamName}`).textContent =
            parseIntScore;
        }
      }
    }
  }




document.getElementById("resetButtonA")
.addEventListener("click", function() {
    document.getElementById("scoreA").innerText = "0"

});
    


document.getElementById("resetButtonB")
.addEventListener("click", function() {
    document.getElementById("scoreB").innerText = "0"

});