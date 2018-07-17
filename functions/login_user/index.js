const aws = require('aws-sdk');
const bcrypt = require('bcryptjs');
const db = new aws.DynamoDB.DocumentClient({
  region: 'us-west-2'
});

exports.handle = function(e, ctx, cb) {
  let scanningProperties = {
    TableName: 'questions',
    Key: 'users'
  };
  let userData = null;
  db.query(scanningProperties, (err, data) => {
    if (err) {
      cb(err, null);
    } else {
      userData = data;
    }
  });
};
