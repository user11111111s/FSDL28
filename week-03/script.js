const player = document.getElementById('player');
const obstacle = document.getElementById('obstacle');
const gameContainer = document.getElementById('game-container');

let playerX = 150;
let playerY = 550;
let obstacleY = -50;
let obstacleSpeed = 2;

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft' && playerX > 0) {
        playerX -= 10;
    }
    if (event.key === 'ArrowRight' && playerX < 350) {
        playerX += 10;
    }
    player.style.left = playerX + 'px';
});

function moveObstacle() {
    obstacleY += obstacleSpeed;
    if (obstacleY > 600) {
        obstacleY = -50;
        obstacle.style.left = Math.floor(Math.random() * 350) + 'px'; // Random position
    }

    // Check for collision
    if (
        playerX < parseInt(obstacle.style.left) + 50 &&
        playerX + 50 > parseInt(obstacle.style.left) &&
        playerY < obstacleY + 50 &&
        playerY + 50 > obstacleY
    ) {
        alert("Game Over! You collided!");
        resetGame();
    }

    obstacle.style.top = obstacleY + 'px';
}

function resetGame() {
    playerX = 150;
    playerY = 550;
    obstacleY = -50;
    player.style.left = playerX + 'px';
    obstacle.style.top = obstacleY + 'px';
}

function gameLoop() {
    moveObstacle();
    requestAnimationFrame(gameLoop);
}
// function-addplayer7
gameLoop();
