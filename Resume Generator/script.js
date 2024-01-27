
function addNewWEField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-group-weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 4);
    newNode.setAttribute("placeholder", "Enter Here");
    newNode.style.width = "500px";
    newNode.style.border = "2px solid #9F9892"

    let weOb = document.getElementById("we");
    let weAddButton = document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButton);
}
function Addaqfield() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-group-aqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 4);
    newNode.setAttribute("placeholder", "Enter Here");
    newNode.style.width = "500px";
    newNode.style.border = "2px solid #9F9892"

    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode, aqAddButtonOb);
}
function Addskfield() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-group-skField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 4);
    newNode.setAttribute("placeholder", "Enter Here");
    newNode.style.width = "500px";
    newNode.style.border = "2px solid #9F9892"

    let slOb = document.getElementById("sl");
    let skAddButtonOb = document.getElementById("skAddButton");

    slOb.insertBefore(newNode, skAddButtonOb);
}

//Template Function
function generateCV() {
    let nameField = document.getElementById("namefield").value;
    let nameT1 = document.getElementById("nameT1");
    nameT1.innerHTML = nameField;

    document.getElementById('nameT2').innerHTML = nameField;

    //contact
    document.getElementById('contactT').innerHTML = document.getElementById("contactfield").value;

    //address
    document.getElementById('addressT').innerHTML = document.getElementById("addressfield").value;

    //email
    document.getElementById('mailT').innerHTML = document.getElementById("emailfield").value;

    //linkedinfield
    document.getElementById('linkedT').innerHTML = document.getElementById("linkedinfield").value;

    //instafield
    document.getElementById('instaT').innerHTML = document.getElementById("Instafield").value;

    //fbfield
    document.getElementById('fbT').innerHTML = document.getElementById("fbfield").value;

    //objective
    document.getElementById('objectiveT').innerHTML = document.getElementById("ObectiveField").value;

    //we
    let wes = document.getElementsByClassName('form-group-weField');
    let str = " ";

    for (let e of wes) {
        str = str + `<li>${e.value}</li>`;
    }

    document.getElementById('weT').innerHTML = str;

    //aq
    let aqs = document.getElementsByClassName('form-group-aqField');
    let str1 = " ";

    for (let e of aqs) {
        str1 = str1 + `<li>${e.value}</li>`;
    }

    document.getElementById('aqT').innerHTML = str1;

    ////aq
    let sks = document.getElementsByClassName('form-group-skField');
    let str2 = " ";

    for (let e of sks) {
        str2 = str2 + `<li>${e.value}</li>`;
    }

    document.getElementById('skT').innerHTML = str2;

    //code of image
    let file = document.getElementById('imgField').files[0];
    console.log(file);

    let reader = new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);

    //set img to template
    reader.onloadend = function () {
        document.getElementById('imgT').src = reader.result;
    }


    document.getElementById('cv-form').style.display = 'none';
    document.getElementById('cv-template').style.display = 'block';



}
function printCV() {
    window.print();
}