

<script>
  document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel");
    const btnLeft = document.querySelector(".arrow.left");
    const btnRight = document.querySelector(".arrow.right");

    if (!carousel || !btnLeft || !btnRight) return;

    btnLeft.addEventListener("click", () => {
      carousel.scrollBy({ left: -300, behavior: "smooth" });
    });

    btnRight.addEventListener("click", () => {
      carousel.scrollBy({ left: 300, behavior: "smooth" });
    });
  });
</script>

