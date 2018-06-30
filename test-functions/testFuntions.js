const aws = require('aws-sdk');
const db = new aws.DynamoDB.DocumentClient({ region: 'us-west-2' });

export const sampleWrite = (e, ctx, callback) => {
  let params = {
    Item: {
      date: Date.now(),
      messsage: 'Dope place'
    },
    TableName: 'questions'
  };
  db.put(params, (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
};

// SCAN LOOPS THROUGH YOUR WHOLE DATABASE AND CAN BE EXPENSIVE TO DO SO
export const sampleReadScan = (e, ctx, callback) => {
  let scanningProperties = {
    TableName: 'questions',
    Limit: 100
  };

  db.scan(scanningProperties, (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
};

// LOOPS USIND YOUR PRIMARY KEY
export const sampleReadQuery = (e, ctx, callback) => {
  let scanningProperties = {
    TableName: 'questions',
    Key: 'players'
  };

  db.query(scanningProperties, (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
};
