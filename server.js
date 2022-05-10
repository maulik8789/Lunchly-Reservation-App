/** Start server for Lunchly. */

const app = require("./app");

app.listen(3000, '0.0.0.0', function() {
  console.log("listening on 3000");
});
