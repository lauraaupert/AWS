const AWS = require("aws-sdk");
const fs = require('fs');AWS.config.update({
    region: "us-east-2",
    // endpoint: "http://localhost:8000",
  });

  const dynamodb = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});


  console.log("Importing thoughts into DynamoDB. Please wait.");

  const allUsers = JSON.parse(fs.readFileSync('./seed/users.json', 'utf8'));

  allUsers.forEach(user => {
    const params = {
      TableName: "Friends",
      Item: {
        "username": user.username,
        "createdAt": user.createdAt,
        "email": user.email,
        "show": user.show,
        "location": user.location,
        "thought": user.thought
      }
    };
    dynamodb.put(params, (err, data) => {
        if (err) {
          console.error("Unable to add thought", user.username, ". Error JSON:", JSON.stringify(err, null, 2));
        } else {
          console.log("PutItem succeeded:", user.username);
        }
    });
})