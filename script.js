let currentData = document.querySelector(".currentData");
let now = new Date();

now.setHours(now.getHours() - 2);

function formatAMPM(date) {
	var hours = date.getHours();
	var minutes = date.getMinutes();
	minutes = minutes < 10 ? "0" + minutes : minutes;
	var strTime = hours + ":" + minutes;
	return strTime;
}

document.querySelector('span.currentDate').innerHTML = now.toLocaleDateString(
	"en-EN", 
	{
		month: "long",
		day: "numeric",
		year: "numeric",
	}
);


// script for data-end

let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');		//January is 0!
let yyyy = today.getFullYear();

today = dd + '/' + mm + '/' + yyyy;

let rand = Math.floor(Math.random() * (15 - 5) + 5);
$('.data-end-place').text(rand)
$('.data-end-scr').text(today)