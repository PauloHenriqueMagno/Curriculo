
function date(){
    const months = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];
    const day = new Date();
    const month = new Date();
    return `${day.getDate()} de ${months[month.getMonth()]}`
}

function submit_post(){
    const textarea = document.getElementById("publication");
    const text = textarea.value;
    if(text===""){
        return;
    }else{
    const popup_div = document.getElementById('poster_form');
    const publication_place = document.getElementById("publications");
    const section = document.createElement("section");
    const div = document.createElement("div");
    const header = document.createElement("header");
    const img = document.createElement("img");
    const hfour = document.createElement("h4");
    const date_p = document.createElement("p");
    const main = document.createElement("main");
    const p = document.createElement("p");
    const footer = document.createElement("footer");
    const footer_img = document.createElement("img");
    const footer_input = document.createElement("input");
    
    section.className="publication_posts";
    
    img.src = "../image/user.png";
    hfour.innerText = user_name;
    hfour.className = "user_name";
    date_p.innerText = date();
    footer_input.type = "text";
    footer_input.placeholder = "Escreva um comentário...";
    footer_img.src = "../image/user.png";
    
    div.className="flex_column";
    div.appendChild(hfour);
    div.appendChild(date_p);
    header.appendChild(img);
    header.appendChild(div);
    
    p.innerHTML = text;
    main.appendChild(p);

    footer.appendChild(footer_img);
    footer.appendChild(footer_input);

    section.appendChild(header);
    section.appendChild(main);
    section.appendChild(footer);
    publication_place.appendChild(section);
    
    popup_div.style.display = "none"
    }
}

const button_submit_post = document.getElementById("submit_post");
button_submit_post.addEventListener("click", submit_post);

const button_post_content = document.getElementById('button_post_content');
button_post_content.addEventListener("click", function(){
    const publication = document.getElementById("publication");
    publication.value = "";
    const poster_form = document.getElementById("poster_form");
    poster_form.style.display = "block";
});