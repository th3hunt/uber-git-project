export default class {

    constructor({ color = "green" } = {}) {
        this.color = color;
    }

    repeat(sentence = 'Whazup?') {
        return `${sentence} Peabrain!`;
    }

}