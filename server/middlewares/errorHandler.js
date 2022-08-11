function handleErrors(error, req, res, next) {
  // Can log the stack here if needed using error.stack
  res.status(res.statusCode).json({ message: error.message });
}

export default handleErrors;
