export function slider() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 70,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

export function sliderAnimation() {
  document
    .querySelectorAll(".link")
    .forEach((element) => element.addEventListener("mouseover", hover));

  document
    .querySelectorAll(".link")
    .forEach((element) => element.addEventListener("mouseout", unhover));

  function hover(element) {
    console.log(element.target.closest(".swiper-slide").id);
    document
      .querySelector(`#${element.target.closest(".swiper-slide").id} p`)
      .classList.add("fade");
  }

  function unhover(element) {
    document.querySelector("p").classList.remove("fade");
  }
}
