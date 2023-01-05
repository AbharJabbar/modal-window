showModal = () => {
  //   alert("Hi");
  let test = document.getElementById("myId");
  test.classList.remove("hidden");
};
closeModal = () => {
  //   alert("Hi");
  let test = document.getElementById("myId");
  test.classList.add("hidden");
};
// closebyEsc = () => {
//   window.onkeyup = function (event) {
//     if (event.keyCode == 27) {
//       document.getElementById("myId").classList.remove("hidden");
//     }
//   };
// };
// closebyEsc();

let modal = document.querySelector(".modal");

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    // this.alert("Testing");
    modal.classList.add("hidden");
  }
});
