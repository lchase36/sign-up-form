const passElem = document.querySelector("#password");
const confPassElem = document.querySelector("#confirm-password");
const passError = document.querySelector("#password + span.error");
const confPassError = document.querySelector("#confirm-password + span.error");

confPassElem.addEventListener("input", checkPass);
passElem.addEventListener("input", checkPass);
function checkPass() {
	let msg = "";
	if (passElem.value != confPassElem.value && confPassElem.value != "") {
		msg = "* Passwords do not match";
		passElem.className = "input-error";
		confPassElem.className = "input-error";
	} else {
		passElem.className = "";
		confPassElem.className = "";
	}
	confPassError.textContent = msg;
}