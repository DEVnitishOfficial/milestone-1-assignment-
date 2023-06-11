function capitalizeName(){
    const name = document.getElementById("userName").value.trim();

    const modifiedName = name.charAt(0).toLowerCase() === name.charAt(0) ? name.charAt(0).toUpperCase() + name.slice(1) : name;

    document.getElementById("blankContainer").textContent = `your name is : ${modifiedName}`;
}
