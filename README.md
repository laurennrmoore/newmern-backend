## Cloning this repository

- `git clone https://github.com/babalugats76/mern-starter.git`; Alternatively, if you wanted to clone the project into a directory with a name of your choosing `git clone https://github.com/babalugats76/mern-starter.git my-project-name`
- Install the packages for both the client and server projects.
  - For the `server` project, issue the following from the parent directory: `npm i`
  - For the `client` project: `cd client` and then `npm i`

## Testing the Project

- Create `server/config/dev.js` and store your Mongo URI:

```
// dev.js -- don't commit!
module.exports = {
  mongoURI: "mongodb+srv://<username>:<password>@<host>/<db and/or options>",
};
```

- Create a collection named `todos` in your MongoDB database
- Populate your `todos` collection with a sample data of the following form:

```
{
   "id":{
      "$numberInt":"1"
   },
   "userId":{
      "$numberInt":"4"
   },
   "title":"Wash the Dog",
   "completed":true
}
```
- To test locally: `npm run dev`

## Deploying to Heroku
- Edit as appropriate the `engines` values in your `package.json`
- Create a Github project for this project, just as you would for any other project, i.e., create a repo, initialize it, etc.
- Check in your code, i.e., add, commit, push, etc.
- Login to Heroku using CLI: `heroku login`
- Create named application using Heroku command-line utility: `heroku create colestock-mern-starter`. Afterwards, you will see it in the Heroku Dashboard. Alternatively, you can use the website GUI.
- Set any needed production configuration values using the Heroku Dashboard. Alternatively, you can do it in the CLI, e.g., `heroku config:set mongoURI=connectstringgoeshere`
- Deploy to Heroku: `git push heroku main`
- Test by navigating to the appropriate URL, e.g., `http://colestock-mern-starter.herokuapp.com/`

```
