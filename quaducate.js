// let menu = document.querySelector("#menu-bar");
// let navbar = document.querySelector(".navbar");

// menu.addEventListener("click", () => {
//   menu.classList.toggle("bx-x");
//   navbar.classList.toggle("active");
// });

// window.onscroll = () => {
//   menu.classList.remove("bx-x");
//   navbar.classList.remove("active");
// };



// let answers = document.querySelectorAll (".frequently");
// answers.forEach((event) =>{
//     event.addEventListener("click", () =>{
//         if (event.classList.contains("active")){
//             event.classList.remove("active");
        
//         }else {
//             event.classList.add("active");
//         }
//     });
// });


// const frequentheader = document.querySelectorAll("frequent-container.frequentheader");
// frequentheader .forEach(header, i) => {
//     header.addEventListener("click", () =>{
//         header.nextElementSibling.classList.toggle("active")

//     });
// }
const freq = document.getElementsByClassName("frequent-question");
var i;
for (i = 0; i < freq.length; i++) {
    freq[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");
        /* Toggle between hiding and showing the active panel */
        const body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}



function totop () {
    window.scroll({
      top: 0, left: 0, behavior: "smooth"
    });
  }
  
  // (B) SHOW/HIDE BUTTON
  function togtop () {
    if (window.scrollY >= 100) {
      document.getElementById("backtop").classList.add("show");
    } else {
      document.getElementById("backtop").classList.remove("show");
    }
  }
  window.addEventListener("scroll", togtop);
  window.addEventListener("resize", togtop);