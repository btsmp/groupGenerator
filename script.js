

function randOrd() {
    return Math.round(Math.random()) - 0.5;
} // função para aleatorizar elementos de um arrray

function catchMembers() {
    var members = document.getElementById("members").value;
    var initialGroup = members.split("\n");
    initialGroup.sort(randOrd);
    var mid = initialGroup.length / 2;
    var group1 = initialGroup.slice(0, mid);
    var group2 = initialGroup.slice(mid, initialGroup.length);
    var strgroup1 = group1.toString().replace(/,/g, "<br>");
    var strgroup2 = group2.toString().replace(/,/g, "<br>");
    var element1 = document.getElementById('g1');
    var element2 = document.getElementById('g2');
    element1.innerHTML = strgroup1
    element2.innerHTML = strgroup2
    removeDisabled()
}

function removeDisabled(){
    e = document.getElementById('group')
    e.classList.remove('disabled');
}