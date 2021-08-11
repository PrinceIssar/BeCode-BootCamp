# PHP tooling
To become a professional in any industry, you need professional tools.
Programming is no exception, which  is why we are going to look into several tools to automate your workflow.

The core of this setup is [grumphp](https://github.com/phpro/grumphp), a great tool by a Belgium company to run several checks each time you attempt to commit your code.
More advanced setups might run these types of checks each time you want to merge with Main/Master, in a setup often called *Continuous Integration (CI)*.

## What is Continuous Integration (CI)?
Continuous Integration (CI) is a development practice where developers integrate code into a shared repository frequently, preferably several times a day. Each integration can then be verified by an automated build and automated tests. While automated testing is not strictly part of CI it is typically implied.

## The mission
Select a previous exercise you made with PHP, ideally it should have several classes in the code base to get the most benefit of this exercise.
We are going to install Grumphp, and some plugins for it to improve to code quality of your previous exercise.

### Install composer 
*If you do not have composer on your machine, [install it](https://getcomposer.org/doc/00-intro.md)!*

### Grumphp
Let us start with installing the core of our CI, grumphp. 

`composer require --dev phpro/grumphp`

After installation Grumphp will hook into our GIT commits, and start running all the tasks mentioned in the `grumphp.yml` file.
You can copy the [grumphp.yml](resources/grumphp.yml) provided with this exercise in the root of your project.

In most cases the git hooks should register themselves, but some Windows users might get an error message that the hooks are not registered.
Then run the command `vendor/bin/grumphp git:init` to fix this.

Grumphp will not provide anything useful by itself, so let us install some plugins for this.
Each of these plugins is also a stand alone project and could be used seperatly from grumphp.

### Phan
Phan is a static analyser for your PHP code. Static analysis, also called static code analysis, is a method of computer program debugging that is done by examining the code without executing the program. The process provides an understanding of the code structure and can help ensure that the code adheres to industry standards. In a compilation language like Java or C++ the compiler does a lot of these checks, but because PHP is a dynamic compliation language, static analysers like Phan (or competitors like [psalm](https://psalm.dev/) or [phpstan](https://phpstan.org/)) are needed to get the same functionality.

You can find a great article about the benefits of these *static analysers* on the site of [phpstan](https://phpstan.org/blog/find-bugs-in-your-code-without-writing-tests).

Follow the installation guide at https://github.com/phpro/grumphp/blob/master/doc/tasks/phan.md.

You can configure Phan to be more or less strict, --init-level=1 generates a very strict config, --init-level=5 generates a weak config.

- If you start a new project, feel free to pick the strictest rule you feel comfortable with (Something between 1 and 3).
- If you start using Phan on an existing code base, I would suggest starting at a lower level (4 or 5) and making it more strict when the most urgent problems have been solved.

Just for the sake of the exercise let us use level 1!

Run `vendor/bin/phan --init --init-level=1` which will generate a .phan/config.php for your project.

Now add the directories where you have code inside the option `directory_list`.

if you want to manually trigger phan (outside grumphp) you can run:
`vendor/bin/phan`

#### Problems installing Phan?
You might need to install the PHP extension AST.
On linux do 
`apt-get install php-ast`

For the other operating systems
https://github.com/phan/phan/wiki/Getting-Started

### phpcsfixer
Phpcsfixer (cs stands for Code Style) is a tool that will make sure everybody in your team is using the same [Coding Style](https://en.wikipedia.org/wiki/Coding_conventions).

This includes when to user enters, how to capitalize variables, and just in general makes for a very uniform code.
This makes it easier for different developers to understand and work in each other code.

Phpcsfixer goes even above telling you that your code is not follow convention; it will actively format all your code for you!

Follow the installation guide at https://github.com/phpro/grumphp/blob/master/doc/tasks/phpcsfixer.md.

if you want to manually trigger phpcsfixer (outside grumphp)
`vendor/bin/php-cs-fixer fix YOUR_CODE_DIR`

### PhpUnit
Like seen previously with an exercise about TDD Unit Tests are an important part of increasing the quality of your code base.
You can make the Unit test run automatically before each commit, making it impossible to commit code that breaks unit tests.

Follow the installation guide at https://github.com/phpro/grumphp/blob/master/doc/tasks/phpunit.md.

You can find a [default configuration file](resources/phpunit.xml) for phpunit in this exercise.
It tells phpunit all tests can be found in the `tests` directory. Make sure to create this directory!

Because it is unlikely you already have a unit test in your previous project, feel free to copy the [the provided example test](resources/EmailTest.php) in your project into the `tests/` directory just to see if it works.

Maybe this is a great opportunity to write some much needed unit tests for your previous project!
