
function addCourse() {
  var name = document.getElementById("courseName").value;
  if (name === "") {
    alert("Please enter course name");
    return;
  }
  var li = document.createElement("li");
  li.textContent = name;
  document.getElementById("courseList").appendChild(li);
  document.getElementById("courseName").value = "";
}