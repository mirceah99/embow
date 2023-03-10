export default class Modal {
    constructor() {
        this.modal = document.getElementById("modal");
        // When the user clicks on <span> (x), close the modal
        // @ts-ignore: Unreachable code error
        document.getElementsByClassName("close")[0].onclick = function () {
            // @ts-ignore: Unreachable code error
            document.getElementById("modal").style.display = "none";
        };
        this.content = document.getElementById("modal-content");
    }
    show() {
        this.modal.style.display = "block";
    }
}
