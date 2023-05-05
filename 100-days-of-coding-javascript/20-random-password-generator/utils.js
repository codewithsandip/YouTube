function splitNumber(num) {
    const part1 = Math.floor(num / 3);
    const part3 = Math.floor(num / 3);
    const part2 = num - (part1 + part3);
    return [part1, part2, part3];
}

function generateSpecialCharsString(length) {
    const chars = "!@#$%^&*()_+{}[]<>?,./~";
    let result = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        result += chars[randomIndex];
    }
    return result;
}

function generateAlphabetCharsString(length) {
    const chars = "abcdefghijklmnopqrstuvwxyz";
    let result = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        result += chars[randomIndex];
    }
    return result;
}

function generateNumberCharsString(length) {
    const numbers = "0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * numbers.length);
        result += numbers[randomIndex];
    }
    return result;
}
