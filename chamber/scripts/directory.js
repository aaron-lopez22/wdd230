const source = "json/data.json";
let listDisplay = false;


async function getCompaniesData() {
    const response = await fetch(source);
    const data = await response.json();
    displayCompanies(data.companies);
}

getCompaniesData();

const displayCompanies = (companies) => {
    const cards = document.querySelector('div.cards');

    companies.forEach((company) => {

        let card = document.createElement('section');
        let img = document.createElement('img');
        let name = document.createElement('h2');
        let phone = document.createElement('h3');
        let address = document.createElement('h3');
        let web = document.createElement('h3');
        let membership = document.createElement('h3');

        img.setAttribute('src', company.image);
        img.setAttribute('alt', `logo ${company.name}`);
        img.setAttribute('loading', 'lazy');
        img.setAttribute('width', '394');
        img.setAttribute('height', '440');
        // I had to look at class mates for help with this part of grid or list. 
        img.classList.add("not-list");

        name.textContent = `${company.name}`;
        address.textContent = `${company.address}`;
        phone.textContent = `${company.phone}`;
        web.textContent = `${company.website}`;
        membership.textContent = `${company.membership}`;


        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(phone);
        card.appendChild(address);
        card.appendChild(web);
        card.appendChild(membership);

        cards.appendChild(card);
    });

    const gridbutton = document.querySelector("#grid");
    const listbutton = document.querySelector("#list");
    const display = document.querySelector("article");
    
    // The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.
    
    gridbutton.addEventListener("click", () => {
        // example using arrow function
        display.classList.add("grid");
        display.classList.remove("list");
    });
    
    listbutton.addEventListener("click", showList); // example using defined function
    
    function showList() {
        display.classList.add("list");
        display.classList.remove("grid");
    }
    
    
 

}