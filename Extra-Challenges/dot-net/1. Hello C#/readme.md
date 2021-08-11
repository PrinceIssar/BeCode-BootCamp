# Title: helloWorld and installing

- Repository: `helloC#`
- Type of Challenge: `Learning Challenge`
- Duration: `>0.5 day`
- Deployment strategy : `NA`
- Team challenge : `solo`

## Learning objectives
- Install the .NET sdk
- Setup your IDE
- Learn to use the .NET CLI
- How to get started with c#
- Learn the basics of c#

## The Mission
Today we are going to install the .NET SDK and get started with C#. 
We will be making a tiny console app with which we can talk. :)

If at some point you have any issues do NOT forget about the [Microsoft Documentation](https://docs.microsoft.com/)!

### Install .NET
We are installing the .NET 5.0 SDK. (I'm using windows Developer 5.0.4, I recommend having the latest on your machine as well to avoid issues!)

Should you be using Visual Studio as your IDE chances are you already have everything we need, good for you. ^^

Just make sure you can type ``dotnet --version`` in the terminal and get the number back you installed. 

[You can find instructions to install .NET here.](https://docs.microsoft.com/en-us/dotnet/core/sdk#acquiring-the-net-sdk)


### Pick an IDE
For the IDE it's players choice... Do your research and pick which one you like. ^^

Suggestions: 
 - Rider
 - Visual Studio

### New Project Time
In a new terminal, navigate to your projects folder and type ``dotnet new console -o helloWorld``. PS: never use dashes!!!

This command will create a folder with:
 - bin -> Temp and build folder
 - object -> Everything we need to compile this code
 - helloWorld.csproj -> Managing all relations (your project file)
 - program.cs -> The actual code we are gonna write

You could directly open program.cs in any editor (Notepad.exe ftw) but it's handier to open it as an project ;).

Read the (few) lines that are there and then open up your terminal again and make sure you are in the project.

 ``dotnet run``

This will output the expected "Hello World!". Try to edit this text to something more fun. :)

### Your time to shine!
I will give you 3 tools and the rest is up to you!

```
Console.ReadLine(); 
//This will read whatever is typed in the console. 
```

```
string pickName; 
//This is how you declare a string variable 
```

```
Console.WriteLine("This Is logging to the console."); 
```

## Must have Features
- A few interactions where you talk to the machine.
- An if statement changing the outcome on said answers.

A very basic(and honestly uncreative) example could be:
```
            Hello, who are you?
            Sicco
            Hello Sicco! How are you?
            Good
            I feel Good as well, Sicco :)
```

## Keep going!
- Add a Date! And play with it (Maybe you could calculate the age? :o)
- Maybe you like numbers more than text? Maybe you could make a math game?
- Be creative! Make your coach laugh with your interactions or make a thrilling text adventure!


![see sharp!](https://media.giphy.com/media/KB7Moe2Oj0BXeDjvDp/giphy.gif)



