function handleErrors(error, req, res, next) {
  if (process.env.ENV == "dev") {
    res
      .status(res.statusCode)
      .json({ message: error.message, stack: error.stack });
  } else {
    res.status(res.statusCode).json({ message: error.message });
  }
}

export default handleErrors;
