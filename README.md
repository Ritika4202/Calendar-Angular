I created a mock API using JSON SERVER.Once json server is installed ,run "json-server --watch db.json" command to start the json server."db.json" is the json file which contains API data(an array of json objects-with fields 'title','date','color').Title field contains the starting/leaving time of a person on a particular date.Run "ng serve" command on a different terminal so that it builds the application and serves it locally.The calendar creates events based on the data passed as json objects.If there is no title on a particular date(i.e no starting time) ,then it marks the day in red.
