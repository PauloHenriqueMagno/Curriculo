function nome(name){
    const element_user_name = document.getElementById("user_name");
    element_user_name.innerText="";
    const user_name = document.createTextNode(name);
    element_user_name.appendChild(user_name);
}
const user_name = "Nome de usuário";
nome(user_name);

function change_name(){
    const element = document.getElementsByTagName("body");
    const background = document.createElement("div");
    const form = document.createElement("form");
    const input = document.createElement("input");
    const button_submit = document.createElement("input");
    const hthree = document.createElement("h3");
    
    background.id="close";
    background.style.width = "100vw";
    background.style.height = "100vh";
    background.style.background = "rgba(0, 0, 0, 0.192)";
    background.style.position = "absolute";
    background.style.display="fixed";
    background.style.top="0px";
    
    form.className="form_name"
    
    hthree.innerText="Insira um novo nome:";

    input.id="change_name";
    input.type="name";
    input.textContent = "name";
    input.style.border = "1px solid black"
    input.style.width="80%";
    input.style.padding="5px";
    input.style.borderRadius="5px";
    input.value = user_name;
    
    button_submit.id="submit_name"
    button_submit.type="submit";
    button_submit.value="Mudar nome"
    button_submit.style.margin="15px auto 0";
    button_submit.style.padding="10px";
    button_submit.style.borderRadius="4px";
    button_submit.style.border="1px solid rgb(0, 132, 255)";
    button_submit.style.cursor="pointer"
    button_submit.onclick = function(){submit_name(input.value)};
    
    form.appendChild(hthree)
    form.appendChild(input);
    form.appendChild(button_submit);
    background.appendChild(form);
    element[0].appendChild(background);
}

function submit_name(text){
    const popup_div = document.getElementById('close');
    popup_div.remove();
    nome(text);
}