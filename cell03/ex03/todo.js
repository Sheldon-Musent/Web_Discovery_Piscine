function addTodo() {
    
    var task = prompt("Enter a new task:");   //opens popup, user types text, result saved in task
    if (task !== null && task !== "") {     //only continue if user typed something (not empty, not cancelled)
        var div = document.createElement("div"); //creates a new div in memory
        div.textContent = task;   //puts the text inside the div
        div.onclick = function() {    
          // when this task is clicked, ask to delete it. confirm() returns true if user clicks OK, false if Cancel. If true, div.remove() deletes it permanently.
            if (confirm("Delete this task?")) {
                div.remove();
                saveCookies();
            }
        };
        var list = document.querySelector("#ft_list");
        list.prepend(div);  //adds the new div to the top of ft_list
        saveCookies();    //saves the current list
    }
}

function saveCookies() {
    var list = document.querySelector("#ft_list");
    var tasks = [];
    var divs = list.querySelectorAll("div");
    for (var i = 0; i < divs.length; i++) {
        tasks.push(divs[i].textContent);
    }
    document.cookie = "todos=" + encodeURIComponent(tasks.join("|||")) + "; expires=Fri, 31 Dec 2027 23:59:59 GMT; path=/";
}

function loadCookies() {
    var cookies = document.cookie.split("; ");
    for (var i = 0; i < cookies.length; i++) {
        if (cookies[i].startsWith("todos=")) {
            var data = decodeURIComponent(cookies[i].substring(6));
            var tasks = data.split("|||");
            for (var j = tasks.length - 1; j >= 0; j--) {
                if (tasks[j] !== "") {
                    var div = document.createElement("div");
                    div.textContent = tasks[j];
                    div.onclick = function() {
                        if (confirm("Delete this task?")) {
                            this.remove();
                            saveCookies();
                        }
                    };
                    var list = document.querySelector("#ft_list");
                    list.prepend(div);
                }
            }
        }
    }
}

loadCookies();