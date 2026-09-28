function addStudent() {
  var name = document.getElementById("studentName").value;
  if (name === "") {
    alert("Please enter student name");
    return;
  }
  var li = document.createElement("li");
  li.textContent = name;
  document.getElementById("studentList").appendChild(li);
  document.getElementById("studentName").value = "";
}