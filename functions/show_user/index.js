const aws = require('aws-sdk');
const db = new aws.DynamoDB.DocumentClient({
  region: 'us-west-2'
});
exports.handle = function(e, ctx, cb) {
  let params = {
    TableName: 'questions',
    Key: {
      username: e.username
    }
  };
  db.query(params, (err, data) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
};
