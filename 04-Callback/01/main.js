function checkPermission(role, yes, no) {
  if (confirm(role)) yes();
  else no();
}
function showYes() {
  alert("ACCESS GRANTED");
}
function showNo() {
  alert("ACCESS DENIED");
}
checkPermission("Are you admin?", showYes, showNo);
