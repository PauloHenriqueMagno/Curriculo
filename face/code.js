let user_name = "Nome de usuário";

function date(){
    const months = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];
    const day = new Date();
    const month = new Date();
    return `${day.getDate()} de ${months[month.getMonth()]}`
}

const nome_class = (name) =>{ 
    const element = document.getElementsByClassName("user_name");
    /*Alterar*/
    for(let i = 0; i<element.length; i++){
        element[i].innerText = name;
    }
    /*Alterar*/
}
function nome(name){
    const element_user_name = document.getElementById("user_name");
    element_user_name.innerText="";
    const user_name_element = document.createTextNode(name);
    element_user_name.appendChild(user_name_element);
    nome_class(name);
}
nome(user_name);

function submit_name(name){
    const popup_div = document.getElementById('close');
    popup_div.remove();
    user_name = name;
    nome(user_name);
}

function change_name(){
    const element = document.getElementsByTagName("body");
    const background = document.createElement("div");
    const form = document.createElement("form");
    const input = document.createElement("input");
    const button_submit = document.createElement("input");
    const hthree = document.createElement("h3");
    
    background.id="close";
    background.style.width = "100%";
    background.style.height = "100%";
    background.style.background = "rgba(0, 0, 0, 0.192)";
    background.style.position = "absolute";
    background.style.display= "fixed";
    background.style.top= "0px";
    background.style.zIndex="2";
    
    form.className="form_name";
    form.id="form_name";
    form.action = "#";
    
    hthree.innerText="Insira um novo nome:";
    
    input.id="change_name";
    input.type="text";
    input.placeholder = user_name;
    
    button_submit.id="submit_name"
    button_submit.type="button";
    button_submit.value="Mudar nome"
    button_submit.onclick = function(){submit_name(input.value)};
    
    form.appendChild(hthree)
    form.appendChild(input);
    form.appendChild(button_submit);
    form.onsubmit="return false"
    background.appendChild(form);
    element[0].appendChild(background);
}

function submit_post(text){
    if(text===""||text===" "){
        const popup_div = document.getElementById('close');
        popup_div.remove();
        return;
    }else{
    const publication_place = document.getElementById("publications");
    const section = document.createElement("section");
    const div = document.createElement("div");
    const header = document.createElement("header");
    const main = document.createElement("main");
    const p = document.createElement("p");
    const img = document.createElement("img");
    const hfour = document.createElement("h4");
    const date_p = document.createElement("p");
    
    section.className="publication_posts";
    
    img.src = "../image/user.png";
    hfour.innerText = user_name;
    hfour.className = "user_name";
    date_p.innerText = date();
    
    div.className="flex_column";
    div.appendChild(hfour);
    div.appendChild(date_p);
    header.appendChild(img);
    header.appendChild(div);
    
    p.innerHTML = text;
    main.appendChild(p);
    section.appendChild(header);
    section.appendChild(main);
    publication_place.appendChild(section);
    
    const popup_div = document.getElementById('close');
    popup_div.remove();
    }
}

function poster(){
    const element = document.getElementsByTagName("body");
    const background = document.createElement("div");
    const form = document.createElement("form");
    const input = document.createElement("textarea");
    const button_submit = document.createElement("input");
    const hthree = document.createElement("h3");

    background.id="close";
    background.style.width = "100%";
    background.style.height = "100%";
    background.style.background = "rgba(0, 0, 0, 0.192)";
    background.style.position = "absolute";
    background.style.display= "fixed";
    background.style.top= "0px";
    background.style.zIndex="2";

    form.className="form_publication flex_column";
    
    hthree.innerText="Criar publicação";

    input.id="publication";
    input.type="text";
    input.placeholder = "No que você está pensando?";
    input.rows="10";
    
    button_submit.id="submit_post"
    button_submit.type="button";
    button_submit.value="Publicar"
    button_submit.onclick = function(){submit_post(input.value);};
    
    form.appendChild(hthree)
    form.appendChild(input);
    form.appendChild(button_submit);
    background.appendChild(form);
    element[0].appendChild(background);
}
