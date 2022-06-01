const closeMessage = document.querySelector("#close");
const message = document.querySelector("#message");


closeMessage.addEventListener("click", function (){
    message.style.display = "none"
})


function showModal(id) {
    var element = document.getElementById(id);
    element.classList.add("show-modal");
};

function hideModal(id) {
    var element = document.getElementById(id);
    element.classList.remove("show-modal");
};
