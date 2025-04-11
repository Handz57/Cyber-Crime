// Navbar
var nav = document.querySelector("nav")
 window.addEventListener("scroll", ()=> {
   if (document.documentElement.scrollTop > 20) {
      nav.classList.add("sticky");
   }
   else {
      nav.classList.remove("sticky");
   }
});

// Active navbar
let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('nav ul li a');

window.onscroll = () => {
   sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if(top >= offset && top < offset + height) {
         navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('nav ul li a[href*=' + id + ']').clasList.add('active');
         })
      }
   })
};


// Accordion
const accordionContent = document.querySelectorAll(".accordion-content");

accordionContent.forEach((item, index) => {
   let header = item.querySelector("header");
   header.addEventListener("click", () => {
      item.classList.toggle("open");

      let description = item.querySelector(".accordion-desc");
      if(item.classList.contains("open")) {
         description.style.height = `${description.scrollHeight}px`;
         item.querySelector("i").classList.replace("ri-arrow-down-s-line", "ri-arrow-up-s-line");
      } else {
         description.style.height = "0px";
         item.querySelector("i").classList.replace("ri-arrow-up-s-line", "ri-arrow-down-s-line");
      }
      removeOpen(index);
   })
})

function removeOpen(index1){
   accordionContent.forEach((item2, index2) => {
      if(index1 != index2){
         item2.classList.remove("open");

         let des = item2.querySelector(".accordion-desc");
         des.style.height = "0px";
         item2.querySelector("i").classList.replace("ri-arrow-up-s-line", "ri-arrow-down-s-line");
      }
   })
}

// Popup card
function openReview(title, text, imageSrc) {
   document.getElementById("review-title").textContent = title;
   document.getElementById("review-text").textContent = text;
   document.getElementById("review-image").src = imageSrc;  // Set gambar
   document.getElementById("quickReview").style.display = "flex";
}

function closeReview() {
   document.getElementById("quickReview").style.display = "none";
}
