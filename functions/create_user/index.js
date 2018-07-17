import { UserPoolId, ClientId } from './keys';
import {
  CognitoUserAttribute,
  CognitoUserPool,
  CognitoUser
} from 'amazon-cognito-identity-js';
const aws = require('aws-sdk');
const bcrypt = require('bcryptjs');
const db = new aws.DynamoDB.DocumentClient({ region: 'us-west-2' });
const poolData = {
  UserPoolId: UserPoolId,
  ClientId: '4pe2usejqcdmhi0a25jp4b5sh3'
};
const userPool = new CognitoUserPool(poolData);

exports.handle = function(e, ctx, cb) {
  let attributeList = [];
  let dataEmail = {
    Name: 'email',
    Value: 'anemail@email.com'
  };
  let attributeEmail = new CognitoUserAttribute(dataEmail);

  attributeList.push(attributeEmail);
  let userId = null;
  userPool.signUp(
    'username',
    'password',
    attributeList,
    null,
    (err, result) => {
      if (err) {
        return err.message;
      } else {
        CognitoUser = result.user;
        console.log(`UserName is ${CognitoUser.getUsername()}`);
      }
    }
  );
  let date = new Date();
  let params = {
    Item: {
      id: userId,
      users: {
        questions: e.questions,
        createdAt: date
      }
    },
    TableName: 'questions'
  };

  db.put(params, (err, data) => {
    if (err || params.Item.users.email === null) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
};
