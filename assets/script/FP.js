let btn = document.getElementById('submit_btn');
let step = 1;

function click(type){
    if(type == 'email'){
        var TestVar = form.email.value;
        alert ("You typed: " + TestVar);
        hideAndShow(1);
        changeTitle('FP_header', 'Enter code')
    }else{
        hideAndShow(2)
        changeTitle('FP_header', 'New password')
    }
}

function hideAndShow(type){
    if(type == 1){
        email_content = document.getElementById('email_content');
        email_content.style.display = "none";
        code_content = document.getElementById('code_content');
        code_content.style.display = "block";
    }else{
        code_content = document.getElementById('code_content');
        code_content.style.display = "none";
        password_content = document.getElementById('password_content');
        password_content.style.display = "block";
    }
}

function changeTitle(id, text){
    let header = document.getElementById(id);
    header.innerHTML = text;
    console.log(text);
    header.innerHTML = text;
}

/* Email */
btn.onclick = function() {click('email')};