const images = [
  "images/hero1.jpg",
  "images/hero2.jpg",
  "images/hero3.jpg",
  "images/hero4.jpg"
];

let currentIndex = 0;

const mainImage = document.getElementById("mainImage");

const thumbnails =
  document.querySelectorAll(".thumb");



document.querySelector(".next")
.addEventListener("click", () => {

  currentIndex =
    (currentIndex + 1) % images.length;

  updateCarousel();
});



document.querySelector(".prev")
.addEventListener("click", () => {

  currentIndex =
    (currentIndex - 1 + images.length)
    % images.length;

  updateCarousel();
});



thumbnails.forEach((thumb, index) => {

  thumb.addEventListener("click", () => {

    currentIndex = index;

    updateCarousel();
  });

});



function updateCarousel(){

  mainImage.src = images[currentIndex];

  thumbnails.forEach((thumb) => {

    thumb.classList.remove("active-thumb");
  });

  thumbnails[currentIndex]
  .classList.add("active-thumb");
}



const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {

    faqItems.forEach(faq => {

      if(faq !== item){
        faq.classList.remove("active");
      }

    });

    item.classList.toggle("active");

  });

});
