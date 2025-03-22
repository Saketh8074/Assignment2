document.getElementById("reverse-btn").addEventListener("click", function () {
    let inputStr = document.getElementById("reverse-input").value;
    let reversedStr = reverseString(inputStr);
    document.getElementById("reverse-result").textContent = reversedStr;
  });
  
  function reverseString(str) {
    return str.split("").reverse().join("");
  }
  document.getElementById("palindrome-btn").addEventListener("click", function () {
    let inputStr = document.getElementById("palindrome-input").value;
    let result = isPalindrome(inputStr) ? "It's a palindrome!" : "Not a palindrome.";
    document.getElementById("palindrome-result").textContent = result;
  });
  
  function isPalindrome(str) {
    let cleaned = str.replace(/\s+/g, "");
    return cleaned === cleaned.split("").reverse().join("");
  }
  document.getElementById("tip-btn").addEventListener("click", function () {
    let subtotal = parseFloat(document.getElementById("subtotal-input").value);
    let tipPercent = parseFloat(document.getElementById("tip-input").value);
    
    if (isNaN(subtotal) || isNaN(tipPercent)) {
      alert("Please enter valid numbers for both fields.");
      return;
    }
    
    let total = calculateTotal(subtotal, tipPercent);
    document.getElementById("total-result").textContent = total.toFixed(2);
  });
  
  function calculateTotal(subtotal, tipPercent) {
    let tipAmount = subtotal * (tipPercent / 100);
    return subtotal + tipAmount;
  }
  