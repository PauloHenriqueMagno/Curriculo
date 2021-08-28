let distance = -110;
const menu_aside = document.getElementsByClassName("menu_aside")[0];
menu_aside.style.left = distance + "%"
const menu = document.getElementById("menu_button");
menu.addEventListener("click", function(){
    if(distance === -110){
        distance = 0
        menu_aside.style.left =  distance +"%";
    }
    else if(distance === 0){
        distance = -110
        menu_aside.style.left = distance+"%";
    }
})

const add_menu = (object) => {
    const cardapio_menu = document.getElementsByClassName("cardapio")[0];
    const li = document.createElement("li");
    const div = document.createElement("div");
    const div_img = document.createElement("div");
    const div_content = document.createElement("div");
    const h4 = document.createElement("h4");
    const img = document.createElement("img");
    const details = document.createElement("details");
    const price = document.createElement("p");

    price.innerText = `R$${object.price.toFixed(2)}`;
    details.innerText = `Descrição: ${object.description}\nAlerta alérgicos: ${object.alert}`;
    h4.innerText = object.name;
    img.src = object.image
    div_img.className = "div_img";
    div_content.className = "div_content"
    div_img.appendChild(img)
    div.appendChild(h4);
    div.appendChild(price);
    div_content.appendChild(div);
    div_content.appendChild(details);
    li.appendChild(div_img);
    li.appendChild(div_content);
    cardapio_menu.appendChild(li);
}
cardapio.forEach(add_menu);