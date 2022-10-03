var billAmount = document.querySelector(".bill-Amount");
var cashGiven = document.querySelector(".cash-given");
var CheckButton = document.querySelector(".check-button");
var message = document.querySelector("#error-message");
var noOfNotes = document.querySelectorAll(".no-of-notes");
var availableNotes = [2000,500,100,20,10,5,1];
CheckButton.addEventListener("click", function validateBillAndCashAmount() {
    hideMessage ();
if (billAmount.value > 0) {
    if (Number(cashGiven.value) >= Number (billAmount.value)){
        var amountToBEReturned = cashGiven.value - billAmount.value;
        calculateChange(amountToBEReturned);
} else {
    showMessage ("The cash you have to provided when it bill be equal to bill Amount and greater then amount");
}
} else {
   showMessage("The bill amount should be greater then 0");
}
});
function calculateChange(amountToBEReturned) {
    for (var i = 0; i < availableNotes.length; i++) {
    var numberOfNotes = Math.trunc (amountToBEReturned / availableNotes[i]);
    amountToBEReturned = (amountToBEReturned % availableNotes[i]);
    noOfNotes[i].innerText = numberOfNotes;}}
function hideMessage () {
    message.style.display ="none";}
function showMessage (msg) {
    message.style.display ="block";
    message.innerText = msg;}