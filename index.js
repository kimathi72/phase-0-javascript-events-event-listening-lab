
function addingEventListener() {
    let button;
    function beforeEach (){
        button = undefined;
    }
    beforeEach();
    button = document.getElementById("button");

    
    button.addEventListener("click", ()=> {alert("i have been clicked")})
}
addingEventListener();