# Title: Money printer goes BRRRRR

- Repository: `ConsoleBankC#`
- Type of Challenge: `Learning Challenge`
- Duration: `<1 day`
- Deployment strategy : `NA`
- Team challenge : `solo`

## Learning objectives
- Learn how to create classes.
- Creating objects and using them.
- Some basic error handling.


## The Mission
We are going to make a tiny console bank program. The goal is to use classes and objects to handle logic and avoid duplicate code (i'm looking at you previous challenge). 

We need to know a few things before we can continue.

### Creating a class
Create a new console project. Add a new class to this project called BankAccount. Make sure it's in the same namespace!

To declare a property:
```
        private int myVar;

        public int MyProperty
        {
            get { return myVar; }
            set { myVar = value; }
        }
```

To declare a constructor (in class Myclass):
````
public MyClass(int myProperty)
{
    this.MyProperty = myProperty;
}
````

To declare a method (void stands for the return value!)
```
public void Func 
{ 
    //do the thing
}
```


### Constructing an object
In your Program.cs main function you can now create an object from this class like so:

````
BankAccount bankAccount = new BankAccount();
//if you have properties in your constructor pass them here
````


### Calling methods
And now you have this object you can call its properties and methods:

````
bankAccount.Func();
Console.WriteLine(bankAccount.MyProperty);
````

## Must have Features
A working Client and BankAccount class with some properties and methods in the console. Either hardcoded or with interaction in ReadLine.


The Client class
- A constructor

- Properties:
   - Id
   - Name
   - Date joined

The bank account class
- A constructor

- Properties:
  - Client
  - Balance
  - Type

- Methods:
  - CheckBalance
  - Withdraw
  - Deposit


  
  
### The end goal?
In the main function of the program you will create a Client and his/her bankAccount.
Here you will then make different deposits and withdrawals. 

BALANCE MAY NEVER BE LESS THAN ZERO.

Try to reread the pillars of OOP, do you see where you might be able to improve?

![pillars of oop](https://media.giphy.com/media/TlK63ES3t2xKq29QCWI/giphy.gif)
