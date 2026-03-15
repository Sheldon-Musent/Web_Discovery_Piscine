function addTodo() {
    //opens popup, user types text, result saved in task
    var task = prompt("Enter a new task:");

    //only continue if user typed something (not empty, not cancelled)
    if (task !== null && task !== "") {
        var div = document.createElement("div"); //creates a new div in memory
        div.textContent = task;                  //puts the text inside the div

        // when this task is clicked, ask to delete it. confirm() returns true if user clicks OK, false if Cancel. If true, div.remove() deletes it permanently.
        div.onclick = function() {
            if (confirm("Delete this task?")) {
                div.remove();       
                saveCookies();
            }
        };

        var list = document.querySelector("#ft_list"); //find the todo list element
        list.prepend(div);  //adds the new div to the top of ft_list
        saveCookies();      //saves the current list
    }
}

function saveCookies() {
    var list = document.querySelector("#ft_list"); //find the todo list element,let it read.
    var tasks = [];                                //decler tasks in a empty space
    var divs = list.querySelectorAll("div");       //grab all task divs inside the list
    //var i = 0 — start from the first div, i < divs.length — keep going until the last div, i++ — move to the next div each time
    for (var i = 0; i < divs.length; i++) {       
    //divs[i] — the current div in the loop, .textContent — gets the text inside it, .push() — adds it to the end of the tasks array
        tasks.push(divs[i].textContent);         
    }
    //join all tasks into one string with ||| as separator, then save to cookie
    document.cookie = "todos=" + encodeURIComponent(tasks.join("|||")) + "; expires=Fri, 31 Dec 2027 23:59:59 GMT; path=/";
}

function loadCookies() {
    var cookies = document.cookie.split("; ");      //split all cookies into an array
    for (var i = 0; i < cookies.length; i++) {
        if (cookies[i].startsWith("todos=")) {      //find the cookie that belongs to this app
            var data = decodeURIComponent(cookies[i].substring(6)); //decode and remove "todos=" prefix
            var tasks = data.split("|||");          //split the string back into individual tasks
            for (var j = tasks.length - 1; j >= 0; j--) { //loop in reverse to keep original order
                if (tasks[j] !== "") {              //skip empty entries
                    var div = document.createElement("div"); //create a div for each task
                    div.textContent = tasks[j];     //set the task text
                    div.onclick = function() {      //add click to delete behaviour
                        if (confirm("Delete this task?")) {
                            this.remove();
                            saveCookies();
                        }
                    };
                    var list = document.querySelector("#ft_list");
                    list.prepend(div);              //add task to the top of the list
                }
            }
        }
    }
}

loadCookies();

//Grab the list — find the element
//Collect tasks — loop through divs, push text into array
//Save — join array into string, store in cookie

//Read the cookie — get the saved string
//Split back into array — reverse the join("|||") with split("|||")
//Loop through — create a new div for each task
//Add to page — prepend each div back into the list
//So saveCookies = page → cookie, loadCookies = cookie → page.