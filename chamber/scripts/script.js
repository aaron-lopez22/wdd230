/// script and code taken from Lesson 07 codepenio
const visitsDisplay = document.querySelector("#visits");

let numVisits = Number(window.localStorage.getItem("visits-ls")); 

if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

numVisits++;
localStorage.setItem("visits-ls", numVisits);

document.querySelector(
	"#lastModified"
).textContent = `Last Modification: ${document.lastModified}`;


function toggleMenu(){
	document.getElementById("primarynav").classList.toggle("open");
	document.getElementById("hamburgerbtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerbtn");
x.onclick = toggleMenu;

// select the elements to manipulate (output to)
const datefield = document.querySelector(".date");
const datefieldUK = document.querySelector("aside"); // for european/family history format with day first.

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);
// long, medium, short options ... try them

datefield.innerHTML = `<em>${fulldate}</em>`;
datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;

//looked at logans javascript for an idea of what I could do. 
if (now.getDay() == 1 || now.getDay() == 2) {
	const banner = document.querySelector('.banner');
	banner.style.display = 'block';
}


//dates visited code from codepenio learning actvity 07


