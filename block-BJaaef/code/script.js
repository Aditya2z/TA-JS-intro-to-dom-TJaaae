let conatiner = document.querySelector(`.container`);

got.houses.forEach(house => {
    

    house.people.forEach(person => {
        let character = document.createElement("div");
        character.classList.add("character");

        let img = document.createElement("img");
        img.src = person.image;

        let h2 = document.createElement("h2");
        h2.innerText = person.name;

        let charname = document.createElement("div");
        charname.classList.add("charname");

        charname.append(img, h2);

        let p = document.createElement("p");
        p.innerText = person.description;

        let btn = document.createElement("button");
        let anchor = document.createElement("a");
        anchor.innerText = "Learn More!"
        anchor.setAttribute("target", "_blank");
        anchor.href = person.wikiLink;
        btn.append(anchor);
        
        character.append(charname, p, btn);

        conatiner.append(character);
    })

    
});
