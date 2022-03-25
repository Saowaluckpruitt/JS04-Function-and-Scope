function login(username, password) {
  if (username === "admin" && password === "P@ssw0rd") {
    alert("success!!");
  } else {
    alert("unsuccess!!");
  }
}
console.log(login("admi", "P@ssw0rd"));
