const aws = require('aws-sdk');
const db = new aws.DynamoDB.DocumentClient({
  region: 'us-west-2'
});

exports.handle = function(e, ctx, cb) {
  let params = {
    Item: {
      user: {
        username: e.username !== null && e.username,
        email: e.email !== null && e.email,
        password: e.password !== null && e.password
      }
    },
    TableName: 'questions'
  };
  db.put(params, (err, data) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
};
