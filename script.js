function findServices() {
  const services = document.querySelector(".services");

  if (services) {
    services.scrollIntoView({
      behavior: "smooth"
    });
  }
}


function becomeProvider() {
  window.location.href = "provider.html";
}


function openAdmin() {
  window.location.href = "admin.html";
}


/* =========================
   SERVICE SEARCH
========================= */

const searchInput = document.getElementById("search");

if (searchInput) {

  searchInput.addEventListener("input", function () {

    const searchText =
      searchInput.value.toLowerCase();

    const cards =
      document.querySelectorAll(".service-card");

    cards.forEach(function (card) {

      const title =
        card.querySelector("h3");

      if (!title) return;

      const serviceName =
        title.textContent.toLowerCase();

      if (serviceName.includes(searchText)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }

    });

  });

}


/* =========================
   CUSTOMER REGISTRATION
========================= */

function createCustomer(event) {

  event.preventDefault();

  const name =
    document
      .getElementById("customerName")
      .value
      .trim();

  localStorage.setItem(
    "customerName",
    name
  );

  window.location.href =
    "customer-dashboard.html";

    }
