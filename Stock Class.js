class Stock {
    #symbol;
    #name;
    #previousPrice;
    #currentPrice;
    constructor (symbol, name, previousPrice, currentPrice) {
        this.#symbol = symbol;
        this.#name = name;
        this.#previousPricepreviousPrice = previousPrice;
        this.#currentPrice = currentPrice;
    }

    get stockName () {
        return this.#name;
    }

    get stockSymbol () {
        return this.#symbol;
    }

    get previousPrice () {
        return this.#previousPrice;
    }
}