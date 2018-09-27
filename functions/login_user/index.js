global.fetch = require('node-fetch');
const aws = require('aws-sdk');
const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
const db = new aws.DynamoDB.DocumentClient({
  region: 'us-west-2'
});
const { UserPoolId, ClientId, Secret } = require('./keys');
const poolData = {
  UserPoolId: UserPoolId,
  ClientId: ClientId
};
let userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

let authenticatedUser = {
  Username: 'bobbo23',
  Password: 'Password2!',
  Pool: userPool
};
let authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(
  authenticatedUser
);
let cognitoUser = new AmazonCognitoIdentity.CognitoUser(authenticatedUser);

exports.handle = function(e, ctx, cb) {
  cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: result => {
      let accessToken = result.getAccessToken().getJwtToken();
    },
    onFailure: err => {
      console.log(err);
    }
  });
  // let scanningProperties = {
  //   TableName: 'questions',
  //   Key: 'users'
  // };
  // let userData = null;
  // db.query(scanningProperties, (err, data) => {
  //   if (err) {
  //     cb(err, null);
  //   } else {
  //     userData = data;
  //   }
  // });
};
