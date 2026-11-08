function checkForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if (name == "" || email == "" || message == "") {
    document.getElementById("error").innerText = "Please fill all fields!";
    document.getElementById("success").innerText = "";
  } else if (!email.includes("@")) {
    document.getElementById("error").innerText = "Please enter valid email!";
    document.getElementById("success").innerText = "";
  } else {
    document.getElementById("error").innerText = "";
    document.getElementById("success").innerText = "Form submitted successfully!";
  }
}

function addTask() {
  let input = document.getElementById("taskInput");
  let task = input.value;

  if (task == "") {
    alert("Please write a task!");
    return;
  }

  let li = document.createElement("li");
  li.innerText = task;

  let btn = document.createElement("button");
  btn.innerText = "Delete";
  btn.onclick = function() {
    li.remove();
  };

  li.appendChild(btn);
  document.getElementById("taskList").appendChild(li);
  input.value = "";
}