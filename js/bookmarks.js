function display(json){
    const content = document.getElementById("bookmarks");

    for(var i in json){
        var title = document.createElement("h2");
        var icon = document.createElement("i");
        icon.setAttribute("class", json[i]["icon"]);
        title.append(icon);

        var div = document.createElement("div");
        div.setAttribute("class", "column");
        div.append(title);

        var ul = document.createElement("ul");

        for(var j in json[i]["links"]){
            var link = document.createElement("a");
            link.setAttribute("href", json[i]["links"][j]["url"]);
            link.setAttribute("target", "_blank");
            link.textContent = json[i]["links"][j]["name"];
            
            var li = document.createElement("li");
            li.append(link);
            ul.append(li);
        }
        div.append(ul)
        content.append(div);
    }
}

display(links);