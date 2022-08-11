function notFound(req, res, next) {
  const err = new Error(`Not Found: ${req.originalUrl}`);
  res.statusCode = 404;
  next(err);
}

export default notFound;
