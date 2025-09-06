require("dotenv").config();
PORT = process.env.PORT || 3000;
const app = require("./src/app");

app.listen(PORT, () => {
  console.log(`server is running on port : ${PORT}`);
});
