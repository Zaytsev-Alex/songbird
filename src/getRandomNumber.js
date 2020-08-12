const getRandomNumber = (min, max, used) => {
    let number;

    if (used.length === (max - min + 1)) {
        number = null
    } else {
        do {
            number = Math.floor(Math.random() * (max - min + 1)) + min
        } while (used.indexOf(number) >= 0)
    }

    return number;
}

export default getRandomNumber;
