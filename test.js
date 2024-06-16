function openPage(pageName, elemt, color) {
    let i, tablink, tabcontent;

    tabcontent = document.getElementsByClassName("tabcontent");
    for(i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablink = document.getElementsByClassName("tablink");
    for(i = 0; i < tablink.length; i++) {
        tablink[i].style.backgroundColor = "";
    }

    document.getElementById(pageName).style.display = "block";
    elemt.style.backgroundColor = color;
}

document.getElementById("defaultOpen").click();