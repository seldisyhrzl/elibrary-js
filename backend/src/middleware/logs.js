const logRequest = (req, res, next) => {
  console.log(`a Request to path ${req.path}`);
  next();
};

export default logRequest;
