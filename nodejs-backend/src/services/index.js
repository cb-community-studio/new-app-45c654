const users = require("./users/users.service.js");
const article = require("./article/article.service.js");
const userinfo = require("./userinfo/userinfo.service.js");
const authorinfo = require("./authorinfo/authorinfo.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(article);
  app.configure(userinfo);
  app.configure(authorinfo);
  // ~cb-add-configure-service-name~
};
