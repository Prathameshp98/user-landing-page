let myArray = [];

const randomNumbers = () => {
    for (let i = 0; i < 4; i++) {
        while (!myArray[i]) {
            let newRandomInt = Math.floor(Math.random() * 9);
            if (!myArray.includes(newRandomInt)) {
                myArray.push(newRandomInt)
            }
        }
    }

    return myArray
}

export default randomNumbers