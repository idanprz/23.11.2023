
const add = (num1, num2) => {
    if (num1 == 0 || num2 == 0) {
        return
    }
    return num1 + num2
}

const sub = (num1, num2) => {
    return num1 - num2
}

const mul = (num1, num2) => {
    return num1 * num2
}

const div = (num1, num2) => {
    if (num2 == 0) {
        throw new Error(`cannot divide by zero. ${num1} / ${num2}`)
    }
    return num1 / num2
}

module.exports = {
    add, sub, mul, div
}

