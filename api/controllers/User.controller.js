export const test = (req, res) => {
  res.json({
    message: "Api is working",
    status: 200,
    success: true,
    error: false
  });
}