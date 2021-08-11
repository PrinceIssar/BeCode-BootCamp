# Title: PHP basics

Anything unclear, or you found a great addition?
Let any of the coaches know so we can update the information.

## Why do I have to install so much? What is PHP / Apache / MySQL for?

To properly understand what PHP does, it's useful to look at how a website works.
1. Browser --> requests yoursite.com.
2. Server prepares a response (e.g. looks for an index.php to load).
3. PHP is interpreted (= executed: if statements, loops, ...).
4. The resulting webpage is sent to the browser (= the response).
5. Browser receives the response and renders the html: shows text, loads images and executes any Javascript.

Up until now, we've mainly worked on step 5: write styling in css of logic in Javascript.
We can give them to any browser, and it properly knows what to do - except Internet Explorer maybe :-)

A browser can't read PHP - a server can.
So, you need a server first. Commonly used are Apache (most used) and Nginx, both are fine choices.
During development a local server is used to prevent the need for an external one.
A server can react to incoming (browser) requests and send the webpage as a response.
To interpret the PHP, PHP needs to be installed (a server can interpret other stuff as well, as long as you install it).

Installation can be built in (can be on Mac), manually or via a tool like MAMP (Mac) / WAMP (Windows).
Manual installs give your more control, while installation via a tool can be much easier.
Tools commonly include the full package: a server + PHP.
Once you have this, you are ready to start working with PHP.

When data is saved or loaded from a database (let's say you build a registration form), this is done via MySQL.

## Learning the syntax

You'll benefit from a lot of concepts you know from JS.
Variables, loops, if statements, ... are all available in both languages.
Time to get familiar with the new syntax! (= way of writing for a language)

- [Syntax (video)](https://www.youtube.com/playlist?list=PL0eyrZgxdwhxhsuT_QAqfi-NNVAlV4WIP)
- [Syntax (docs)](https://www.w3schools.com/php/php_syntax.asp)
- [PHP basics book (thorough but a bit old)](https://daylerees.com/php-pandas/)
- [Official docs (mostly handy if you know what you're looking for)](https://www.php.net/)
- [MySQL intro (for database connections)](https://www.w3schools.com/sql/sql_intro.asp)

## Check the PHP version

If you look at the request lifecycle above, you can see that the used Javascript depends on the browser.
For PHP, this depends on the server.
If a function does not work (while it should), make sure you check what PHP versions this function exists in and what you are using now. 
`phpinfo();` can give you all this information. Be careful with (very) old answers on Stackoverflow!

## Config everywhere

Both PHP and Apache have a general config file which will always be loaded.
Then, there is a project level config file to overwrite / extend these settings.
In most occasions, you only read these files when you have specific instructions on what to change.

### Apache config

1. httpd.conf - overall
    - Loads different PHP modules (the server loads PHP, remember)
    - Example: if you need an extra module to modify images via PHP
2. .htaccess (project level). This can overwrite the global settings.
    - Overwrites global settings
    - Example: instructions for how long a browser should cache (= remember) images

### PHP config

1. php.ini - overall
    - Example: a time limit how long PHP can take to execute before the server thinks it's not working.
2. Config directly in your PHP files - project level
    - Overwrites global settings
    - Example: a bigger file upload limit if users are allowed to upload big files.
    
## Errors ~ white screen of death

Errors are helpful: when something goes wrong, they show you the exact problem.
A stacktrace shows you everything that happened before to help you understand the flow.
In some occasions, you end up with a white screen where nothing works. Now what?

The white screen means an error occurred, but it isn't shown.
Use the following PHP (project level) settings to see the error:
```php
ini_set('display_errors', '1');
ini_set('display_startup_errors', '1');
error_reporting(E_ALL);
```

> Never do this in production for safety reasons! Errors show of lot of application sensitive info.