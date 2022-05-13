export function slider() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 70,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      390: {
        slidesPerView: 1,
        spaceBetween: 20,
        width: 390,
      },
      412: {
        slidesPerView: 1,
        spaceBetween: 40,
        width: 412,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
        width: 1024,
      },
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
    console.log(element.target.closest(".swiper-slide").id);
    document
      .querySelector(`#${element.target.closest(".swiper-slide").id} p`)
      .classList.remove("fade");
  }
}
