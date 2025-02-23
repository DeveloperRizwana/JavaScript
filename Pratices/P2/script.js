const storyCards = document.querySelectorAll(".story-card");
const modals = document.querySelectorAll(".modal");
const overlay = document.querySelector(".overlay");
const closeModalButtons = document.querySelectorAll(".close-modal");

// Function to open Modal
const openModal = (modal) => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// Function to close modal
const closeModal = () => {
  modals.forEach((modal) => modal.classList.add("hidden"));
  overlay.classList.add("hidden");
};

// Add EventListener to each story card
storyCards.forEach((card) => {
  card.addEventListener("click", () => {
    const modal = card.querySelector(".modal");
    openModal(modal);
  });
});

closeModalButtons.forEach((button) => {
    button.addEventListener("click", closeModal);
  });

overlay.addEventListener("click", closeModal);
