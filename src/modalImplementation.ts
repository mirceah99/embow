export default class Modal {
  //   static modal = document.getElementById("myModal") as HTMLElement;
  private modal: HTMLElement;
  public content: HTMLElement;
  constructor() {
    this.modal = document.getElementById("modal") as HTMLElement;
    // When the user clicks on <span> (x), close the modal
    // @ts-ignore: Unreachable code error
    document.getElementsByClassName("close")[0].onclick = function () {
      // @ts-ignore: Unreachable code error
      document.getElementById("modal").style.display = "none";
    };
    this.content = document.getElementById("modal-content") as HTMLElement;
  }
  public show() {
    this.modal.style.display = "block";
  }
}
