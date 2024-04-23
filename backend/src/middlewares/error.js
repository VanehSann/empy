const errorHandler = (err, _req, res, next) => {
  const statusCode = res.statusCode || 500;
  const errorStatusCode = err.statusCode || statusCode;
  const errorMessage = err.message || "Erro interno do servidor";

  res.status(errorStatusCode).json({ message: errorMessage });
}

export default errorHandler;
