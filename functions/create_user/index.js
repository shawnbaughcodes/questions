const aws = require('aws-sdk');
const bcrypt = require('bcryptjs');
const db = new aws.DynamoDB.DocumentClient({ region: 'us-west-2' });

exports.handle = function(e, ctx, cb) {
  let userId = null;
  userId =
    Math.random()
      .toString(36)
      .substring(2, 15) +
    Math.random()
      .toString(36)
      .substring(2, 15);

  let email = null;
  if (/\S*\@\S*\.\S+/g.test(e.email)) {
    email = e.email;
  }

  let params = {
    Item: {
      id: userId,
      users: {
        username: e.username,
        email: email,
        password: bcrypt.hashSync(e.password, bcrypt.genSaltSync(10)),
        questions: e.questions,
        createdAt: Date.now()
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
