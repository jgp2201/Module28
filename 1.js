class BankAccount {

    constructor(name,balance){
        this.name=name;
        this.balance=balance;
        
    }
    deposit(amount) {
        if(amount>0)
        {
            this.balance=this.balance+amount;
            console.log(`New balance after depositing ${amount} Rs. is : ${this.balance}`); 
        }
        else{
            console.log("Amount to be deposited should be positive");
            
        }
    }
    withdraw(amount) {
        if(amount>0)
        {
            if(this.balance-amount>0)
            {
                this.balance=this.balance-amount;
                console.log(`New balance after withdrawing ${amount} Rs. is : ${this.balance}`); 
            }
            else
            {
                console.log("Amount to be withdrawed should be less than the account balance");
                
            }

        }
        else
        {
            console.log('Invalid withdrawal amount. Please enter a positive amount');
            
        }
        
    }
    checkBalance(){
        console.log(`Balance in ${this.name}'s account is : ${this.balance}`);
    }
}

const myAccount = new BankAccount('jayvardhan',1000);
myAccount.checkBalance();

myAccount.deposit(500);
myAccount.deposit(-50);

myAccount.withdraw(200);
myAccount.withdraw(1500);
myAccount.withdraw(-500);

myAccount.checkBalance();