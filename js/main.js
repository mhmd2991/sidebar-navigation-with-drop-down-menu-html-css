let featureBtn = document.querySelector("#feautures "),
  servicesBtn = document.querySelector("#services");

featureBtn.addEventListener("click", () => {
  featureBtn.classList.toggle("active");
});

servicesBtn.addEventListener("click", () => {
  servicesBtn.classList.toggle("active");
});
