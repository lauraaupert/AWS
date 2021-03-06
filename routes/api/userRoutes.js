const express = require('express');
const router = express.Router();
const AWS = require("aws-sdk");
const awsConfig = {
  region: "us-east-2",
  // endpoint: "http://localhost:8000",

};
AWS.config.update(awsConfig);
const dynamodb = new AWS.DynamoDB.DocumentClient();
const table = "Friends";

router.get('/api/users', (req, res) => {
    const params = {
      TableName: table
    };
    // Scan return all items in the table
    dynamodb.scan(params, (err, data) => {
      if (err) {
        res.status(500).json(err); // an error occurred
      }else {
        res.json(data.Items)
      }
    });
  })

  // get thoughts from a user
router.get('/api/users/:username', (req, res) => {
    console.log(`Querying for thought(s) from ${req.params.username}.`);
    const params = {
      TableName: table,
      ProjectionExpression: "#em, #sh, #loc, #th, #ca, #im",
      KeyConditionExpression: "#un = :user",
      ExpressionAttributeNames: {
        "#un": "username",
        "#ca": "createdAt",
        "#em": "email",
        "#sh": "show",
        "#loc": "location",
        "#im": "image",
        "#th": "thought"
      },
      ExpressionAttributeValues: {
        ":user": req.params.username
      }
    };
    dynamodb.query(params, (err, data) => {
      if (err) {
        console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
        res.status(500).json(err); // an error occurred
      } else {
        console.log("Query succeeded.");
        res.json(data.Items)
      }
    });
  });

  // Create new user
router.post('/api/users', (req, res) => {
    const params = {
      TableName: table,
      Item: {
        "username": req.body.username,
        "createdAt": Date.now(),
        "email": req.body.email,
        "show": req.body.show,
        "location": req.body.location,
        "image": req.body.image,
        "thought": req.body.thought
      }
    };
    dynamodb.put(params, (err, data) => {
      if (err) {
        console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
        res.status(500).json(err); // an error occurred
      } else {
        console.log("Added item:", JSON.stringify(data, null, 2));
        res.json({"Added": JSON.stringify(data, null, 2)});
        console.log("Added item:", JSON.stringify(data, null, 2));

      }
    });
  });

  router.put('/api/users', (req, res) => {
    const params = {
      TableName: table,
      Key: {
        //only partition key and sorting keys are needed
        "username": req.body.username,
        "createdAt": req.body.createdAt,
        "email": req.body.email,
        "show": req.body.show,
        "location": req.body.location,
        "thought": req.body.thought
      },
      UpdateExpression: "set image = :im",
      ExpressionAttributeValues: {
        ":im": req.body.photo
      }
    };
    console.log(params)
    dynamodb.update(params, (err, data) => {
      if (err) {
        console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
        res.status(500).json(err); // an error occurred
      } else {
        console.log("Added item:", JSON.stringify(data, null, 2));
        res.json({"Added": JSON.stringify(data, null, 2)});
        console.log("Added item:", JSON.stringify(data, null, 2));

      }
    });
  });

  module.exports = router;