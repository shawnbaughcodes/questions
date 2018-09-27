exports.handle = (event, context, callback) => {
  event.response.autoConfirmUser = true;
  callback(null, event);
  context(null, event);
};
