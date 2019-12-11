let startQuest = confirm('Do you want to play a game?'),
    minNum = 0,
    maxNum = 100,
    compNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum,
    attemptNum = 1,
    tryNums = [];

console.log(compNum);

while (startQuest) {
    let userNum = +prompt('Choose a number from ' + minNum + ' to ' + maxNum);

    if (userNum) {

        if (userNum === compNum) {
            let newGame = confirm(`Congratulation, you guessed the number from ${attemptNum} attempts! Do you want to play again?`);
            if (newGame) {
                attemptNum = 1;
                tryNums = [];
                compNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
                console.log(compNum);
                userNum = +prompt('Choose a number from ' + minNum + ' to ' + maxNum);

            } else {
                alert(`Thank you for your game. Have a nice day!`);
                break
            }
        }
        if (userNum < compNum) {
            tryNums.push(userNum);
            let toolTip = alert(`You missed, try the bigger number.\n You have already tried : ${tryNums}`);
            attemptNum++;
        }
        if (userNum > compNum) {
            tryNums.push(userNum);
            let toolTip = alert(`You missed, try the smaller number.\n You have already tried : ${tryNums}`);
            attemptNum++
        }
    } else {
        alert(`You failed the input`);
        break
    }

}
if (!startQuest) {
    alert(`Let's play next time`)
}