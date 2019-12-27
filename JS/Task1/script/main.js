function fibonacci() {
    const newFibGen = (function* () {
        const startArr = [0, 1];
        let forward = true;
        for (; true;) {
            const flag = yield startArr[0];
            if (flag === true || flag === false) {
                forward = flag;
            }
            if (forward) {
                const next = startArr[0] + startArr[1];
                startArr.push(next);
                startArr.shift();
            } else {
                const prev = startArr[1] - startArr[0];
                startArr.unshift(prev);
                startArr.pop();
            }
        }
    })();
    const step = (flag) => newFibGen.next(flag).value;
    return (amount, flag) => {
        const result = [];
        for (let i = 0; i < amount; i++) {
            result.push(step(flag))
        }
        return result
    }
}

const fibGen = fibonacci();

let userNum = +prompt("How much numbers do u want to see?");

while (userNum) {
    let oneMore = confirm(`Your numbers are ${fibGen(userNum)} Again?`);

    if (oneMore) {
        userNum = +prompt("How much numbers do u want to see?")
    } else {
        break
    }
}
if (!userNum) {
    alert("You failed the input")
}




