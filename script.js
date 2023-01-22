document.getElementById("yes").addEventListener("click",resize)
let body = document.getElementsByTagName("body")[0]; // this
let is_main = true
var window_width = window.innerWidth 
function resize() {
    let yes = document.getElementById("yes")
    let name = document.getElementById("name")
    let main = document.getElementById("main")
    let no = document.getElementById("no")
    let features = document.getElementById("features")
    let button = document.getElementsByClassName("button")
    let duration_of_animation = 2;

    if(window_width > 950){
        yes.style.opacity = 0
        no.style.opacity = 0

        main.style.animation = "opening "+duration_of_animation+"s ease-in forwards"
        
        setTimeout(()=>{
            document.getElementById("question").innerHTML = "So, what do you want to know ?";
            yes.style.display = "none";
            no.style.display = "none";
        },duration_of_animation*500)
    }
    else {
            yes.style.display = "none";
            no.style.display = "none";
    }
    features.style.display = "block"

    if(window_width > 950){
//For monitor sizes 
        features.style.display = "flex"
        features.style.animation = "show_features 3s ease-in forwards"
    }
}

let skills = document.getElementById("skills")
let hobby = document.getElementById("hobby")
let contact = document.getElementById("contact")
let title_skills = document.querySelector("#skills > .title")
let title_hobby = document.querySelector("#hobby > .title")
let title_contact = document.querySelector("#contact > .title")
let content = document.querySelector(".content")


 title_skills.addEventListener("click",()=>{
    if (is_main == true){   
        let delay = 1
        hobby.style.animation = "fadeaway "+delay+"s forwards"
        contact.style.animation = "fadeaway "+delay+"s forwards"

        setTimeout(()=>{
            body.style.height = "auto";
            document.getElementById("question").innerHTML = "These are my Skills ";
            hobby.style.display ="none"
            contact.style.display="none"

            if(window_width > 950){content.style.display = "flex"}

            else{
                content.style.display = "block"     
                let skill = document.querySelectorAll(".skill")
                skill.forEach((item)=>{
                    item.style.display = "block"

                    })
                }
            title_skills.innerHTML = "Get back"
            title_skills.style.backgroundColor="var(--color-background)"


        }, delay *1000)
        is_main = false
    }
    else{
        getBack();
        is_main = true
    }
    
})

title_hobby.addEventListener("click",()=>{
    if (is_main == true){   
        let delay = 1
        skills.style.animation = "fadeaway "+delay+"s forwards"
        contact.style.animation = "fadeaway "+delay+"s forwards"

        setTimeout(()=>{

            body.style.height = "auto";
            document.getElementById("question").innerHTML = "Theses are my hobbies";

            skills.style.display ="none"
            contact.style.display="none"
            
            document.querySelector("#hobby > .content").style.display = "block";

            title_hobby.style.display = "block"
            title_hobby.innerHTML = "get back"
            title_hobby.style.backgroundColor="var(--color-background)"


        }, delay *1000)
        is_main = false
    }
    else{
        getBack();
        is_main = true
    }
    
}) 
function getBack(){ 
    let hobby = document.getElementById("hobby")
    let contact = document.getElementById("contact")
    let skills = document.getElementById("skills")

    body.style.height = "100vh";
    document.getElementById("question").innerHTML = "Is there anything else You would like to know?";

    hobby.style.display ="block";
    contact.style.display="block";
    skills.style.display="block";

    content.style.display = "none"
    document.querySelector("#hobby > .content").style.display = "none";
    document.querySelector("#contact > .content").style.display = "none"


    title_contact.innerHTML = "Contact"
    title_hobby.innerHTML = "Hobby"
    title_skills.innerHTML = "Skills"

    hobby.style.animation = "fadein 2s"
    contact.style.animation = "fadein 2s"
    skills.style.animation = "fadein 2s"
}
title_contact.addEventListener("click",()=>{
    if (is_main == true){   
        let delay = 1
        hobby.style.animation = "fadeaway "+delay+"s forwards"
        skills.style.animation = "fadeaway "+delay+"s forwards"

        setTimeout(()=>{
            body.style.height = "auto";
            document.getElementById("question").innerHTML = "Contact me  ";
            hobby.style.display ="none"
            skills.style.display="none"

            if(window_width > 950){document.querySelector("#contact > .content").style.display = "flex"}

            else{
                document.querySelector("#contact > .content").style.display = "block"     
                let skill = document.querySelectorAll(".skill")
                skill.forEach((item)=>{
                    item.style.display = "block"

                    })
                }
            title_contact.innerHTML = "Get back"
            title_contact.style.backgroundColor="var(--color-background)"



        }, delay *1000)
        is_main = false
    }
    else{
        getBack();
        is_main = true
    }
})
//testing 