const herroArray = [
    {
        name: "Spiderman",
        skill: "make spider lines"
    },
    {
        name: "Batman",
        skill: "drive car fast"
    },
    {
        name: "Hulk",
        skill: "to be strong"
    }
]

herroArray.forEach((hero, index) => {
    var div = document.createElement('div');
    var numb = index + 1;
    if(numb % 2 == 0) {
        div.innerHTML = "Name: "+hero.name+ " " +"Skill: " +hero.skill;
        div.style.background = "blue";
        div.style.color = "white";
        document.body.appendChild(div);
    } else {
        div.innerHTML = "Name: "+hero.name+ " " +"Skill: " +hero.skill;
        document.body.appendChild(div);
    }
});