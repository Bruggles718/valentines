currentLoveItem = 0;

window.onload = () => {

  const balloonContainer = document.getElementById("balloon-container");
  
  console.log(balloonContainer);
  
  function random(num) {
    return Math.floor(Math.random() * num);
  }
  
  
  function getRandomStyles() {
    var r = random(255);
    var g = random(255);
    var b = random(255);
    var mt = random(200);
    var ml = random(50);
    var dur = random(5) + 5;
    //    background-color: rgba(${r},${g},${b},0.7);
    // color: rgba(${r},${g},${b},0.9); 
    return `
  
    
    box-shadow: inset -7px -3px 10px rgba(${r - 10},${g - 10},${b - 10},0.7);
    margin: ${mt}px 0 0 ${ml}px;
    animation: float ${dur}s ease-in-out forwards
    `;
  }
  
  function createBalloons(num) {
    for (var i = num; i > 0; i--) {
      var balloon = document.createElement("div");
      balloon.className = "heart";
      balloon.id = `heart-${i}`;
      balloon.style.cssText = getRandomStyles();
      if (balloonContainer) balloonContainer.append(balloon);
    }
  }

  createBalloons(15);
  
  const revealButton = document.getElementById("reveal-button");
  revealButton.onclick = () => {
    loveItems = document.getElementsByClassName("love-item");
    loveItems[currentLoveItem].style["display"] = "block";
    currentLoveItem += 1;
    if (currentLoveItem == loveItems.length) {
      revealButton.style["display"] = "none";
    }
  }
}

