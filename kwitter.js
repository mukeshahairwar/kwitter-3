function addUser(){
    
    get_item = document.getElementById("user_name").value;

    localStorage.setItem("user_name", get_item);

    window.location = "kwitter_room.html";
}