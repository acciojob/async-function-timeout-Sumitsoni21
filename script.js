//your JS code here. If required.


// Helper function that returns a promise resolving after 'ms' milliseconds
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

document.getElementById("btn").addEventListener("click", async () => {
  const textInput = document.getElementById("text").value;
  const delayInput = parseInt(document.getElementById("delay").value, 10);

  // Clear any previous output
  const outputDiv = document.getElementById("output");
  outputDiv.textContent = "";

  // Wait for the specified delay
  await sleep(isNaN(delayInput) ? 0 : delayInput);

  // After the delay, display the text
  outputDiv.textContent = textInput;
});
