// create a fun secureBankAccount that initialize a private balance
// and only allows deposit and withdrawal.

// secureBankAccount uses closure to keep 'balance' private
function secureBankAccount() {
    let balance = 0; // private variable

    // Return an object with deposit and withdrawal methods
    return {
        deposit(x) {
            balance += x;
            return balance;
        },
        withdrawal(x) {
            if (x > balance) return "Insufficient balance";
            balance -= x;
            return balance;
        },
    };
}

// let fn = secureBankAccount(); // Example usage

// createAccount is similar, but returns messages and has a pruntDetails method
function createAccount(name, city) {
    let balance = 0;

    return {
        deposit(amt) {
            balance += amt;
            return `Amount ${amt} added to the account`;
        },
        withdrawal(amt) {
            if (amt > balance) return `Insufficient balance`;
            balance -= amt;
            return `Amount ${amt} withdrawn from the account`;
        },
        printDetails() {
            // fixed typo from pruntDetails to printDetails
            console.log(`Hello ${name} from city: ${city}`);
        },
    };
}
