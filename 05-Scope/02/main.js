function makeWorker() {
  let name = "Pete";
  return function () {
    alert(name);
  };
}
let name = "John";
let work = makeWorker();
work(); // *erro coz we let work not in block scope
