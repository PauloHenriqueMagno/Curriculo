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

const add_menu = (array) => {
    const cardapio_menu = document.getElementsByClassName("cardapio")[0];
    const li = document.createElement("li");
    const div = document.createElement("div");
    const h4 = document.createElement("h4");
    const p = document.createElement("p");
    const price = document.createElement("p");

    price.innerText = `R$${array.price.toFixed(2)}`;
    p.innerText = `Descrição: ${array.description}\nAlerta alérgicos: ${array.alert}`;
    h4.innerText = array.name;
    div.appendChild(h4);
    div.appendChild(price);
    li.appendChild(div);
    li.appendChild(p);
    cardapio_menu.appendChild(li);
}
cardapio.forEach(add_menu);