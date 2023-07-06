import styles from "./buttons.module.scss";

export function createModal(content, onClose) {
  const modalElement = document.createElement("div");
  modalElement.classList.add(styles.modal);
  modalElement.innerHTML = `
    <p class="${styles.modalText}">${content}</p>
    <button class="${styles.modalButton}">OK</button>
  `;

  const okButton = modalElement.querySelector(`.${styles.modalButton}`);

  const closeModal = () => {
    document.body.removeChild(modalElement);
    onClose();
  };

  okButton.addEventListener("click", closeModal);

  document.body.appendChild(modalElement);
}
