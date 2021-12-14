var character = document.getElementById("character");
var playingHitbox = document.querySelector("#playing-hitbox");
var playingSpriteSheet = document.querySelector("#playing-spritesheet");
var block = document.getElementById("block");

console.log(playingSpriteSheet);

function jump() {
  character.classList.add("jump");
  setTimeout(function () {
    character.classList.remove("jump");
  }, 500);
}

document.addEventListener("keyup", animateChar);

function animateChar(e) {
  //left arrow
  switch (e.keyCode) {
    case 37:
      playingSpriteSheet.setAttribute(
        "src",
        "./image/iddle-left-spritesheet.png"
      );
      playingSpriteSheet.classList.remove("looking-right");
      playingSpriteSheet.classList.add("looking-left");

      break;
    //arrow up
    case 38:
      if (playingSpriteSheet.classList.contains("looking-right")) {
        playingSpriteSheet.setAttribute(
          "src",
          "./image/attack-right-spritesheet.png"
        );
        setTimeout(function () {
          playingSpriteSheet.setAttribute(
            "src",
            "./image/iddle-right-spritesheet.png"
          );
        }, 500);
      } else {
        playingSpriteSheet.setAttribute(
          "src",
          "./image/attack-left-spritesheet.png"
        );
        setTimeout(function () {
          playingSpriteSheet.setAttribute(
            "src",
            "./image/iddle-left-spritesheet.png"
          );
        }, 500);
      }

      break;
    //right arrow
    case 39:
      playingSpriteSheet.setAttribute(
        "src",
        "./image/iddle-right-spritesheet.png"
      );
      playingSpriteSheet.classList.remove("looking-left");
      playingSpriteSheet.classList.add("looking-right");
      break;
    // bottom arrow
    case 40:
      if (playingSpriteSheet.classList.contains("looking-right")) {
        playingSpriteSheet.setAttribute(
          "src",
          "./image/parry-right-spritesheet.png"
        );
        setTimeout(function () {
          playingSpriteSheet.setAttribute(
            "src",
            "./image/iddle-right-spritesheet.png"
          );
        }, 1000);
      } else {
        playingSpriteSheet.setAttribute(
          "src",
          "./image/parry-left-spritesheet.png"
        );
        setTimeout(function () {
          playingSpriteSheet.setAttribute(
            "src",
            "./image/iddle-left-spritesheet.png"
          );
        }, 1000);
      }
      break;
  }
}

var checkDead = setInterval(function () {
  var characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  var blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  if (blockLeft < 40 && blockLeft > 0 && characterTop >= 130) {
    character.classList.add("death");
    block.style.animation = "none";
    block.style.display = "none";
    alert("you lose.");
  }
}, 10);
