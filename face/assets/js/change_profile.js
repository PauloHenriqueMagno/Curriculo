let user_name = "Nome de usuário";

const nome_class = (name) =>{ 
    const elements = document.getElementsByClassName("user_name");
    for(let i = 0; i<elements.length; i++){
        elements[i].innerText = name;
    }
}
nome_class(user_name);

function submit_name(name){
    user_name = name;
    nome_class(user_name);
}

function change_name(){
    const input = document.getElementById("change_name");
    input.placeholder = user_name;
    return input.value
};

const button_submit_profile_info = document.getElementById("submit_name");
button_submit_profile_info.addEventListener("click", function(){
    submit_name(change_name());
    document.getElementById("change_info").style.display = "none"
});

const button_change_profile_info = document.getElementById("button_change_profile_info");
button_change_profile_info.addEventListener("click", (change_name, function(){
    document.getElementById("change_info").style.display="block"
}))