const add = (a, b) => {
    return a + b;
}

const isEven = (a) => {
    if (a % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

const createObject = (name, color) => {
    const myObject = {
        name,
        color
    }

    return myObject;
}

const numberSequence = num => {
    const sequence = [];

    for (let i = 1; i <= num; i++) {
        sequence.push(i);
    }

    return sequence;
}

const convertToString = num => {
    return num.toString();
}

const getPlanet = num => {
    const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
    if (num < 0 || num > planets.length) {
        return "No Planet";
    } else {
        return planets[num-1];    
    }
}

const countStudents = attendanceArray => {
    let count = 0;
    
    attendanceArray.forEach(student => {
        if (student) {
            count++;
        }
    });

    return count;
}

const squareAndConcat = num => {
    let digits = num.toString().split('');
    let squares = digits.map(digit => digit ** 2);
    return squares.join('') * 1;
}

const getCentury = year => {
    return Math.floor(year / 100);
}

const binary = array => {
    let total = 0;
    let positionValue = 1;
    let position = array.length - 1;
    while (position > 0)
    {
        total += (array[position] * positionValue);
        positionValue *= 2;
        position--;
    }
    return total;
}

module.exports = {
    add,
    isEven,
    createObject,
    numberSequence,
    convertToString,
    getPlanet,
    countStudents,
    squareAndConcat,
    getCentury,
    binary
}