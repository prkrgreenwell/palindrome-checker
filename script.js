const inputText = document.getElementById("text-input");
const button = document.getElementById("check-btn");
const result = document.getElementById("result");

const checkPalindrome = (str) => {
  console.log("called");
  if (str.length === 0) {
    result.innerText = "Please input a value";
  } else {
    const cleanedStr = str.toLowerCase().replace(/[^0-9a-z]/gi, ""); // Remove non-alphabetic characters
    const reversed = cleanedStr.split("").reverse().join("");
    if (cleanedStr === reversed) {
      result.innerText = `${str} is a palindrome`;
    } else {
      result.innerText = `${str} is not a palindrome`;
    }
  }
};

button.addEventListener("click", () => checkPalindrome(inputText.value));
