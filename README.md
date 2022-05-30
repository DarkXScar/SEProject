# How to use the project

Clone the project into desired directory by navigating to desired directory openning bash and running:

```
git clone https://github.com/FarukIm/SEProject.git
```

## After download

The database folder contains a file which is sample database we used for the project, personally we used mySQL workbench version 8.0.28 into which we imported the file from the database folder.

After importing the database to desired mySQL program, the user needs to configure username and password in **Server/index.js** lines **10** and **12**

### Server

Once the above steps are completed you should navigate to the Server directory within your terminal and install all dependencies by running:

```
npm install
```

Once that is done, to run the server you use the command:

```
npm run devStart
```

If you followed the steps above the server should be up and running

### Client

Next, you should navigate to the Client directory within your terminal and install all dependencies by running:

```
npm install
```

Once that is done, to run the server you use the command:

```
npm start
```

If you followed the steps above the a window will shortly pop up navigating you to the login screen from which you can start using the application.
