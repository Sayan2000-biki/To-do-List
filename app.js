const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var todos = [];
var works= [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){

  var today = new Date();

  var options  = {
    weekday:"long",
    day:"numeric",
    month:"long"
  }


  var day = today.toLocaleDateString("en-us", options);

  res.render("list", {ListTitle: day, Lists:todos}); //kindOfDay is marker it denotes the value of the ejs file as well.

});

app.post("/", function(req, res){

  var todo = req.body.Todo;

  if (req.body.list === "Work") {
    works.push(todo);
    res.redirect("/work")
  }else {
    todos.push(todo);
    res.redirect("/");
  }
  // todos.push(todo);
  // console.log(req.body);
  //res.render("list", {List: todo});
  // res.redirect("/");

});

app.get("/work", function(req,res){

    res.render("list", {ListTitle: "Work List", Lists:works});

})

// app.post("/work", function(req, res){
//
//   var work = req.body.Todo;
//   works.push(work);
//   // console.log(todo);
//   // res.render("list", {List: todo});
//   res.redirect("/work");
//
// });

app.get("/about", function(req,res){

  res.render("about");
})







app.listen(3000, function(){

  console.log("server is runing on port 3000");
})
