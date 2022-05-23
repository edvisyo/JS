// var footballist = document.getElementById("footballer");

// const footballer =
//     {
//         name: "Mark",
//         surname: "Miller",
//         years: 25,
//         height: 1.75,
//         speed: 12.3,
//     }

// footballist.innerHTML = "Name: "+footballer.name+" Surname: "+footballer.surname+" Old: "+footballer.years+" height: "+footballer.height+" speed: "+footballer.speed;    


const footballers = [
    {
        name: "Mark",
        // name: "E",
        surname: "Miller",
        years: 25,
        height: 1.75,
        speed: 12.3,
    },
    {
        name: "Todd",
        // name: "C",
        surname: "Bern",
        years: 21,
        height: 1.65,
        speed: 14.3,
    },
    {
        name: "Bert",
        // name: "A",
        surname: "Kuck",
        years: 27,
        height: 1.84,
        speed: 11.8,
    },
    {
        name: "Micke",
        // name: "B",
        surname: "Kile",
        years: 25,
        height: 1.78,
        speed: 13.1,
    },
    {
        name: "Zack",
        // name: "D",
        surname: "Zbignev",
        years: 28,
        height: 1.89,
        speed: 14.8,
    },
]


// Display All at Once
// function display() {
//     var sportsmen = document.getElementById("footballers");
//     footballers.forEach((footballer) => {
//         let h3 = document.createElement("h3");
//         let p = document.createElement("p");
//         let small = document.createElement("small");
//         let hr = document.createElement("hr");
        
//         h3.innerHTML = footballer.name+ " " +footballer.surname
//         p.innerHTML = footballer.years+ "m." + " " +footballer.height+ "cm."
//         small.innerHTML = footballer.speed+ "km/h"
        
//         sportsmen.append(h3, p, small, hr)
//     });
// }

// display();


// Sort By Name and Surname
const sortedArray = []

function sortedPlayers() {
    footballers.sort((a, b) => {
        if(a.name && a.surname < b.name && b.surname) {
            return -1
        } else if(a.name && a.surname == b.name && b.surname) {
            return 0
        } else {
            return 1
        }
    });
    return this.sortedArray = footballers;
}
sortedPlayers();
console.log(this.sortedArray);

// Display Sorted Players
function display() {
    var sportsmen = document.getElementById("footballers");

    this.sortedArray.forEach((footballer) => {
        let h3 = document.createElement("h3");
        let p = document.createElement("p");
        let small = document.createElement("small");
        let hr = document.createElement("hr");

        h3.innerHTML = footballer.name+ " " +footballer.surname
        p.innerHTML = footballer.years+ "m." + " " +footballer.height+ "cm."
        small.innerHTML = footballer.speed+ "km/h"
        
        sportsmen.append(h3, p, small, hr)
    })
}
display();


// Checking witch players are faster
