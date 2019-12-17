let startQuest = confirm(`Do you want to play a game?`),
    minNum = 1,
    maxNum = 10,
    attemptNum = 1,
    tryNums = [],
    userNum = +prompt(`Enter a number from ${minNum} to ${maxNum} and computer will try to guess it`);

while (startQuest) {
    let compNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
        tryNums.push(compNum);
    if (userNum) {
        if (userNum === compNum) {
            let newGame = confirm(`Computer choose ${compNum}.\nComputer guessed your number from ${attemptNum} attempts!\nDo you want to play again?`);
            if (newGame) {
                attemptNum = 1;
                tryNums = [];
                userNum = +prompt('Enter a number from ' + minNum + ' to ' + maxNum);
                compNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

            } else {
                alert(`Thank you for your game. Have a nice day!`);
                break
            }
        } else {
            alert(`Computer choose ${compNum}.\nComputer missed, and now he will try again`);
            attemptNum++;
            if (userNum>10 && userNum<90){
            }
        }

    } else {
        alert(`You failed the input`);
        break
    }
}
if (!startQuest) {
    alert(`Let's play next time`)
}