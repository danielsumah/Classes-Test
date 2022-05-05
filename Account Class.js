// Create an account class
class Account {
    constructor(id = 0, balance = 100, annualInterestRate = 0) {
        this._id = id;
        this._balance = balance;
        this._annualInterestRate = annualInterestRate;
    }

    // To get id 
    get id() {
        return this._id;
    }

// To get balance 
    get balance() {
        return this._balance;
    }

    // To get annual interest rate
    get annualInterestRate() {
        return this._annualInterestRate;
    }

    // To get monthly interest rate
    get monthlyInterestRate() {
        return ((this._annualInterestRate / 100) / 12)
    }

    // To get monthly interest 
    get monthlyInterest() {
        return (this._balance * this.monthlyInterestRate)
    }

    // To set id
    set id(id) {
        this._id = id
    }

    // Set balance
    set balance(balance) {
        this._balance = balance
    }

    // Set annual interest rate
    set annualInterestRate(annualInterestRate) {
        this._annualInterestRate = annualInterestRate
    }

    // To get balance after withdrawal
    withdraw(amount) {
        this._balance = this.balance - amount
        return this._balance
    }

    // To get balance after deposit
    deposit(amount) {
        this._balance = this._balance + amount
        return this._balance
    }
};  

// Write a main program
const user = new Account(1122, 20000, 4.5);
user.withdraw(2500);
user.deposit(3000);
console.log("The id is", user.id, "the balance is", user.balance, "monthly interest rate is", user.monthlyInterestRate, 
"the monthly interest is", user.monthlyInterest);
