global.fetch = require('node-fetch');
const aws = require('aws-sdk');
const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
const { UserPoolId, ClientId, Secret } = require('./keys');
const db = new aws.DynamoDB.DocumentClient({ region: 'us-west-2' });

const poolData = {
  UserPoolId: UserPoolId,
  ClientId: ClientId
};
let userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

exports.handle = function(e, ctx, cb) {
  let attributeList = [];
  let dataEmail = {
    Name: 'email',
    Value: 'b@b.com'
  };
  let attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(
    dataEmail
  );

  attributeList.push(attributeEmail);
  let userId = null;
  let cognitoUser = null;
  userPool.signUp('alexcomes', 'Password1!', attributeList, null, function(
    err,
    result,
    cognitoUser
  ) {
    if (err) {
      return err;
    } else {
      cognitoUser = result;
    }
  });
  console.log('USER POOL User: ', cognitoUser);

  // let date = new Date();
  // let params = {
  //   Item: {
  //     id: userId,
  //     users: {
  //       questions: e.questions,
  //       createdAt: date
  //     }
  //   },
  //   TableName: 'questions'
  // };

  // db.put(params, (err, data) => {
  //   if (err || params.Item.users.email === null) {
  //     cb(err, null);
  //   } else {
  //     cb(null, data);
  //   }
  // });
};
