const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".navbar");
const navBar = document.querySelector(".logo");
const resumeLink = document.getElementById("resumeLink");

navToggle.addEventListener("click", () => {
	if (links.classList.contains("show-links")) {
		links.classList.remove("show-links");
		navToggle.style.transform = "rotate(0deg)";
	} else {
		links.classList.add("show-links");
		navBar.classList.add("active-nav");
		navToggle.style.transform = "rotate(450deg)";
	}
});

resumeLink.addEventListener("click", () => {
	event.preventDefault();

	const downloadLink = document.createElement("a");
	downloadLink.href =
		"https://docs.google.com/document/d/1AUhmGOF5lnim3gDaDx0DyCgOWp6a9uYtdiA2weEzd4c/export?format=pdf";
	downloadLink.download = "ToluwalaseAdejuwon-cv.pdf";

	document.body.appendChild(downloadLink);
	downloadLink.click();
	document.body.removeChild(downloadLink);

	window.open("https://hello.cv/toluwalase-adejuwon-gmcpn", "_blank");
});
