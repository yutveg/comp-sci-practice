const Benchmark = require("benchmark");
var suite = new Benchmark.Suite();

const { myAtoi, myAtoi2 } = require("../numbers/stringtoNumber.js");
// add tests
suite
  .add("Implement 1", function () {
    myAtoi("   -42");
  })
  .add("Implement 2", function () {
    myAtoi2("   -42");
  })
  // add listeners
  .on("cycle", function (event) {
    console.log(String(event.target));
  })
  .on("complete", function () {
    console.log("Fastest is " + this.filter("fastest").map("name"));
  })
  // run async
  .run({ async: true });
