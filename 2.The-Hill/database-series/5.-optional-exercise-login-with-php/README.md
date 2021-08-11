# Challenge: MySQL

- Repository: `php-mysql-introduction`
- Type of Challenge: `Learning challenge`
- Duration: `3 days`
- Team challenge : `solo`

## Learning objectives
- Learn how to view and edit a db in a db manager
- Learn to write SQL queries
- Learn to make a Create, Read, Update & Delete (CRUD) system
- Learn to write a login and registration form
- Learn to manage login state

## The mission
We will create software, step by step, that manages the students in BeCode.
Then we will create a login & registration form for the students to manage their data.

### Step 1: Create a database
- Go to your local database manager
- Create a database, called `becode`
- Create a table, called `student`
- Give it the following structure:
    - `id` | Primary Key & Index | Auto Increment
    - `first_name`
    - `last_name`
    - `email` 
    - `created_at` *(auto fills in the timestamp when you create an entry, lookup how to do this, hint:look for this column name)*
    
### Step 2: 
- Create a `connection.php` file with a working PDO connection in it, like you learned from previous exercises.

### Step 3: 
![Lets goooooo!!!](resources/rambo.png)

- Create `index.php`, `insert.php`
- Include the `connection.php` file in both, but make sure your `PHP` code won't run if the connection file isn't included
- Create a form that allows you to fill in the table with your data in `insert.php`
- Make sure your form requires every column of the table to be filled
- Test by inserting your data
- Check your database program to see if all your data is correctly entered into the database

### Step 4:
We have managed to push our info to a local database, now let's try and pull that same information out of there, follow these instructions:

- On `index.php`, list a table with summaries of most of the details of all people
- Make sure the table shows the following:
    - Their first name
    - Their last name
    - Their email
    - A link to their personal page (`profile.php?user=$user_id`) (the link can also be, on their name or any other column you prefer)

### Step 5:
- On `profile.php` get the required user's details from the database
- Print them out on a profile page you design, if you need inspiration, you can look [here](https://www.google.com/search?q=profile+page+design&source=lnms&tbm=isch&sa=X&ved=0ahUKEwis5Juh07HkAhUIJFAKHeJKASYQ_AUIESgB&biw=2560&bih=1297#imgrc=jjirWCPSxqfBFM:)
- Include an API call to the following API: [Be Like Bill](https://github.com/gautamkrishnar/Be-Like-Bill), use the documentation to understand how you need to use it, do this using either `curl` in PHP or `ajax` in Javascript.
- The received image (from the api) needs to be worked into the profile page somewhere
- Every column of the database table needs to be shown someway
- The final result needs to be a coherent profile page

### Step 6:
Next up we want to create some delete and edit functionality, sadly though we can't yet.
Imagine a webapp where you can edit other people's info, or delete their profile... That wouldn't be good... 
So let's make a login / registration system:

- Create a `login.php` file and fill it up with a login form (email/password)
- Rename `insert.php` to `register.php` and add a password & password confirmation field to the form
- Create an `auth.php` file and write both the login and registration logic in them
- The registration logic should:
    - Check if the email is valid (validate all other fields as well if necessary)
    - Check if password and password confirm are equal. Use `password_verify` for this.
    - Hash the password and add it to the database in it's hashed form (**NEVER** store unhashed / unencrypted passwords). Use `password_hash` for this.
    - If the registration fails, go back to the previous form, fill in all the previously filled in data (except the passwords) and show an error on the correct field
    - If the registration succeeds, go to `profile.php` and show the user's own profile.
- The login logic should:
    - Check if the filled in email can be found on a user with that credential
    - Check if the hashed database password, can be matched to the newly hashed (filled in) password
    - If not, go back to the login page, giving an error (**WATCH OUT:** never say whether the password or the email was incorrect, always say either one of them could be wrong) 
    - If it's correct, move to the `index.php` page
- Now, obviously we don't want non-logged-in people to see `index.php` with all our data, so protect `index.php` so that it checks for the user's login status and redirects to `login.php` when not logged in.

### Step 7:
So now that authentication is out of the way, we want to give the user's right to edit, though obviously we only want them to edit or remove their own profiles.

- On `profile.php` check if the logged in user's ID equals that of the one requested on the profile page, if so, show edit and delete buttons somewhere on the page.
- When those buttons are clicked, again your code should check whether this person has the rights to do the delete / edit action before executing it
- Obviously once executed, the edit action goes back to the profile, delete action, should go back to register page 

> This way, we eliminate any and all means of `hacking` our code

### Step 8: 
- Review for yourself, the different MySQLI / PDO functions you have learned
- Write down a small cheatsheet for yourself regarding the SQL functions 
- Congratulate yourself, you just taught yourself `MySQL` without any help, without any guidance... I'm impressed, honestly! :unicorn: