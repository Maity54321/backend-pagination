const { pages } = require("../services/userService");

exports.pagi = (req, res) => {
  pages(req.query).then((response) => {
    console.log(response);
  });
};
