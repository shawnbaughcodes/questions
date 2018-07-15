const aws = require('aws-sdk');
const bcrypt = require('bcryptjs');
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
      users: {
        username: e.username,
        email: /\S*\@\S*\.\S+/g.test(e.email) ? e.email : false,
        password: bcrypt.hashSync(e.password, bcrypt.genSaltSync(10)),
        questions: e.questions,
        createdAt: Date.now()
      }
    },
    TableName: 'questions'
  };
  db.put(params, (err, data) => {
    if (err || params.Item.user.email === false) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  });

  userId = null;
};
