function addFaculty() {
  var name = document.getElementById("facultyName").value;
  if (name === "") {
    alert("Please enter faculty name");
    return;
  }
  var li = document.createElement("li");
  li.textContent = name;
  document.getElementById("facultyList").appendChild(li);
  document.getElementById("facultyName").value = "";
}