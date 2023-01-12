export const renderHome = (req, res) => {
  const ip =
    req.ip || req.headers["x-forwarded-for"] || req.socket.remoteAdress;

  const number = +req.query.number;

  const countdownNumber = +req.query.countdownNumber;

  res.render("index", {
    title: "Code academy",
    pageName: "Home",
    ip,
    number,
    countdownNumber,
  });
};
