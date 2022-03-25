const sender = "Matt";

function sendTo(from, to) {
  console.log(`From ${from} to ${to}`);
}

sendTo(sender, "Sarah"); // * From Matt to Sarah; coz from input from sender and sender input from sender variable
sendTo(null); // ** From null to undefined coz from input from null
//
const sender = "Matt";

function sendTo(to, from = "CC") {
  console.log(`From ${from} to ${to}`);
}

sendTo("Max"); // *** From Max to CC coz to input from Max and from input from CC
sendTo("Ben", "Jay"); // **** From Ben to Jay coz to input from Ben and from  is defined
