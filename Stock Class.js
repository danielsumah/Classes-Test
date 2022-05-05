class Stock {
    #symbol;
    #name;
    #previousPrice;
    #currentPrice;
    
    constructor (symbol, name, previousPrice, currentPrice) {
        this.#symbol = symbol;
        this.#name = name;
        this.#previousPrice = previousPrice;
        this.#currentPrice = currentPrice;
    }

    get name () {
        return this.#name;
    }

    get symbol () {
        return this.#symbol;
    }

    get previousPrice () {
        return this.#previousPrice;
    }

    get currentPrice () {
        return this.#currentPrice;
    }

    set previousPrice (previousPrice) {
        this.#previousPrice = previousPrice;
    }

    set currentPrice (currentPrice) {
        this.#currentPrice = currentPrice;
    }

    getChangePercent () {
        const changePercent = ((this.#previousPrice - this.#currentPrice) / this.#previousPrice) * 100
        return changePercent
    }
}

const company = new Stock('INTC', 'Intel Corporation', 20.5, 20.35);
console.log("The price change percentage is", company.getChangePercent(), "percent.")