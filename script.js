function findServices() {
  document.querySelector(".services").scrollIntoView({
    behavior: "smooth"
  });
}

function becomeProvider() {
  alert(
    "Welcome to Good News Campus Connect!\
n\
nProvider registration will be available soon."
  );
}

const searchInput = document.getElementById("search");

searchInput.addEventListener("input", function () {

  const searchText = searchInput.value.toLowerCase();

  const cards = document.querySelectorAll(".service-card");

  cards.forEach(function (card) {

    const serviceName =
      card.querySelector("h3").textContent.toLowerCase();

    if (serviceName.includes(searchText)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }

  });

});function createCustomer(event) {
  event.preventDefault();

  const name = document.getElementById("customerName").value;

  localStorage.setItem("customerName", name);

  window.location.href = "customer-dashboard.html";
                             }
