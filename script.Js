 function tod(){
    // Priority
    var item = document.getElementById("first").value;
    var text = document.createTextNode(item);
    var newItem = document.createElement("li")
    newItem.appendChild(text)
    document.getElementById("pp").appendChild(newItem)
    // Title
    var item = document.getElementById("title").value;
    var text = document.createTextNode(item);
    var newItem = document.createElement("li")
    newItem.appendChild(text)
    document.getElementById("ptitle").appendChild(newItem)
    // notes
    var item = document.getElementById("notes").value;
    var text = document.createTextNode(item);
    var newItem = document.createElement("li")
    newItem.appendChild(text)
    document.getElementById("pnotes").appendChild(newItem)
    // completion
    var item = document.getElementById("completed").value;
    var text = document.createTextNode(item);
    var newItem = document.createElement("li")
    newItem.appendChild(text)
    document.getElementById("pcomplete").appendChild(newItem)

    // date
    var item = document.getElementById("date").value;
    var text = document.createTextNode(item);
    var newItem = document.createElement("li")
    newItem.appendChild(text)
    document.getElementById("pdate").appendChild(newItem)
    
    var item = document.getElementById("bi").value;
    item.style.backgroundColor="red";
    var text = document.createTextNode(item);
    var newItem = document.createElement("li")
    newItem.appendChild(text)
    document.getElementById("paction").appendChild(newItem)
    

}

