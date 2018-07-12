const aws = require('aws-sdk');
const db = new aws.DynamoDB.DocumentClient({ region: 'us-west-2' });

const userId =
  Math.random()
    .toString(36)
    .substring(2, 15) +
  Math.random()
    .toString(36)
    .substring(2, 15);

exports.handle = function(e, ctx, cb) {
  let params = {
    Item: {
      id: userId,
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
