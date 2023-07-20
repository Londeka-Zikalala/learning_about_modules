import figlet from "figlet";
import greet from "./greet.js";


figlet(greet, function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});