// This referes to the object of the class
class Bank {
    // private;
    balance = 0;

    constructor(balance) {
        this.balance = this.balance + balance;
    }

    credit(balance) { // +
        // Guard clause
        if(balance <= 0) return;
        
        this.balance = this.balance + balance;
    }
    debit(balance) { // -
        if(balance <= 0 && balance > this.balance) return;

        this.balance = this.balance - balance;
    }
    getBalance() {
        return this.balance;
    }
}
const user1 = new Bank(500);
user1.credit(100);
user1.credit(100);
user1.credit(100);
user1.debit(500)
user1.debit(500)
console.log('Your balance is :' + user1.getBalance())