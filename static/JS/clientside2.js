//homepage2

//active nav bar
var activePage = window.location.pathname;

console.log(activePage);

const navLinks = document.querySelectorAll("nav a").forEach(link => {
    if (link.href.includes(`${activePage}`)) {
        link.classList.add("active");
    }
});

//personilazia
const logeduser = JSON.parse(localStorage.getItem('logedin'))
document.querySelector('#loged').innerHTML = `Hello ${logeduser.username}`

//popup form function
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

const movies=[{name:"Violent Night",actors:"David Harbour, John Leguizamo, Alex Hassell", director:"Tommy Wirkola",length:"112 minutes",place:"United States",year:"2022",genres:"action, comedy",image:'<img src="pics/Violent_Night.png">'},
    {name:"Strange World",actors:"Jake Gyllenhaal, Dennis Quaid", director:"Don Hall",length:"102 minutes",place:"United States",year:"2022",genres:"animation, science-fiction, adventure",image:'<img src="pics/Strange_World_poster.jpg">'},
    {name:"The Menu",actors:"Ralph Fiennes, Anya Taylor-Joy, Nicholas Hoult", director:"Mark Mylod",length:"106 minutes",place:"United States",year:"2022",genres:"comedy, horror, thriller",image:'<img src="pics/The_Menu_(2022_film).jpg">'},
    {name:"Black Panther: Wakanda Forever",actors:"Letitia Wright, Lupita Nyong'o, Danai Gurira", director:"Ryan Coogler",length:"161 minutes",place:"United States",year:"2022",genres:"action, adventure, drama",image:'<img src="pics/Black_Panther_Wakanda_Forever.jpg">'},
    {name:"Black Adam",actors:"Dwayne Johnson, Aldis Hodge, Noah Centineo", director:"Jaume Collet-Serra",length:"125 minutes",place:"United States",year:"2022",genres:"action, adventure, fantasy",image:'<img src="pics/Black_Adam_(film)_poster.jpg">'},
    {name:"Don't Worry Darling",actors:"Harry Styles, Olivia Wilde", director:"Olivia Wilde",length:"123 minutes",place:"United States",year:"2022",genres:"drama, thriller",image:'<img src="pics/Dont_Worry_Darling.jpg">'},
    {name:"Smile",actors:"Sosie Bacon, Jessie T. Usher", director:"Parker Finn",length:"115 minutes",place:"United States",year:"2022",genres:"horror, mystery, thriller",image:'<img src="pics/Smile.jpg">'},
    {name:"Ticket to Paradise",actors:"Julia Roberts, George Clooney", director:"Ol Parker",length:"104 minutes",place:"United States",year:"2022",genres:"Comedy, Romance",image:'<img src="pics/Ticket_to_Paradise.jpg">'}];

let list = document.querySelector ('.list')

// on load function
window.onload = function addmovietolist() {
       movies.forEach(movie => {
      const li = document.createElement('li')
    li.innerHTML = movie.name
        document.querySelector('#list').appendChild(li);
      li.classList.add('movies')
        console.log(li)
    })
}
console.log(list)


// search movie in the search bar
function search_movie() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('movies');

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";
        }
    }
}
// //active nav bar
// var currentPage = window.location.pathname;
// console.log(currentPage);

// const activePage = document.querySelectorAll("nav a").forEach(
//     link =>{
//         if (link.href.includes(`${currentPage}`)) {
//             link.classList.add('active');
//         }
//     }
// );
// console.log(activePage);


