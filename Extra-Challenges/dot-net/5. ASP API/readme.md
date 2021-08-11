# Title: ASP API

- Repository: `ToDoApi`
- Type of Challenge: `Learning Challenge`
- Duration: `3 days`
- Deployment strategy : `NA`
- Team challenge : `solo`

## Learning objectives
  - generating a controller
  - understanding the API paths
  - building on a backend


## The mission

We will make a full API experience with all the tools we learned, but ...
We are only going to make the backend! You will be responsible for the front.


### getting Started

LET'S DO THIS!

````
dotnet new webapi -o TodoApi
cd TodoApi
dotnet add package Microsoft.EntityFrameworkCore.InMemory
dotnet add package Microsoft.VisualStudio.Web.CodeGeneration.Design
dotnet add package Microsoft.EntityFrameworkCore.Design
dotnet add package Microsoft.EntityFrameworkCore.SqlServer

````
The Swagger page /swagger/index.html is displayed. Select GET > Try it out > Execute. The page displays:

    The Curl command to test the WeatherForecast API.
    The URL to test the WeatherForecast API.
    The response code, body, and headers.
    A drop down list box with media types and the example value and schema.


in properties -> launch settings -> Change the launchURl (but remember it for later ;) )
````
"launchUrl": "api/TodoItems",
````

Add a folder named Models.
Add a TodoItem class to the Models folder with the following code:
````
namespace TodoApi.Models
{
    public class TodoItem
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public bool IsComplete { get; set; }
    }
}
````

Add a folder named Data.
Add a DataContext (TodoContext) class to the Data folder with the following code:
````
using Microsoft.EntityFrameworkCore;

namespace TodoApi.Models
{
    public class TodoContext : DbContext
    {
        public TodoContext(DbContextOptions<TodoContext> options)
            : base(options)
        {
        }

        public DbSet<TodoItem> TodoItems { get; set; }
    }
}
````

Add it to your Startup class ConfigureServices

````
            services.AddDbContext<TodoContext>(opt =>
                                               opt.UseInMemoryDatabase("TodoList"));
````

Now generate the controller:

````
dotnet aspnet-codegenerator controller -name TodoItemsController -async -api -m TodoItem -dc TodoContext -outDir Controllers
````

Explore the generated controller! 
See the function for each action?

Use [postman](https://www.postman.com/) to test your API!

Create a new request.

Set the HTTP method to POST.

Set the URI to https://localhost:<port>/api/TodoItems. For example, https://localhost:5001/api/TodoItems.

Select the Body tab.

Select the raw radio button.

Set the type to JSON (application/json).

In the request body enter JSON for a to-do item:

````
{
  "name":"Write awesome code",
  "isComplete":true
}
````

Check the response and its headers, look for the location URI

Test all different routes! (PUT DELETE ADD ...)
Hint! Check out the /swagger/index.html swagger page ;) 

### YOUR TIME TO SHINE

- Add a persistent DB instead of inmemory
- Create your own Model(s)
- Consume the API with a different front end (you could follow [this](https://docs.microsoft.com/en-us/aspnet/core/tutorials/web-api-javascript?view=aspnetcore-5.0) guide and make it in plain HTML,CSS & JS)
- Make it your own and  
- you can now congratulate yourself for learning the first steps of .NET and C#!


#### Extra's

- Add authentication? (SPICY WARNING)
- Try hosting it? (SPICY WARNING)
- Check out the Extra's Folder (FUN WARNING)


![gg dance party](https://media.giphy.com/media/Qz5jqYCH9l5t4Dz1Di/giphy.gif)
