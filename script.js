document.addEventListener("DOMContentLoaded", () => {
  const bundles = document.querySelectorAll(".bundle-option");
  const totalPriceElement = document.querySelector(".total-price");

  function updateBundleSelection(selectedBundle) {
    bundles.forEach((b) => {
      b.classList.remove("expanded");
      b.querySelector(".options").style.display = "none";
    });

    selectedBundle.classList.add("expanded");
    selectedBundle.querySelector(".options").style.display = "block";

    const price = selectedBundle.getAttribute("data-price");
    totalPriceElement.textContent = `Total: $${price}.00 USD`;
  }

  bundles.forEach((bundle) => {
    const radio = bundle.querySelector("input[type='radio']");
    const options = bundle.querySelector(".options");

    bundle.addEventListener("click", () => {
      radio.checked = true;
      updateBundleSelection(bundle);
    });

    radio.addEventListener("change", () => {
      updateBundleSelection(bundle);
    });
  });

  const initiallySelected = document.querySelector(
    "input[type='radio']:checked"
  );
  if (initiallySelected) {
    updateBundleSelection(initiallySelected.closest(".bundle-option"));
  }
});
