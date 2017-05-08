var evenMoreTrue = function () {
  console.log("Richard is Cooler")
}

module.exports = {

  name: "My First Module",
  run: function truth() {
    console.log ("Beer is cool")
     return evenMoreTrue();
  }

};


