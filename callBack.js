function delayCallback(callback) {
  setTimeout(callback, 2000); // Delaying for 2000 milliseconds (2 seconds)
}
function myCallback() {
  console.log("Callback function is invoked after 2 seconds!");
}

delayCallback(myCallback);
