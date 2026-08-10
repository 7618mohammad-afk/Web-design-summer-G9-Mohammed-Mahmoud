var course = prompt("enter your course")
var courses = ["html", "css", "js"]
var index = courses.findIndex(item => item == course)
    alert("index :" + index)
if (index == -1) {
    courses[courses.length] = course
    console.log(courses);
    
}