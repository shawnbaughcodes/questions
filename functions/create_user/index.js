const aws = require('aws-sdk');
const db = new aws.DynamoDB.DocumentClient({ region: 'us-west-2' });

exports.handle = function(e, ctx, cb) {
  let params = {
    user: {
      username: e.username,
      email: e.email,
      password: e.password
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
