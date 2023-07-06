import addClassToElementsByClassName from "../../utils/classByClassName";
import addClassToElementById from "../../utils/classById";
import styles from "./buttons.module.scss";
import { createModal } from "./modal";

addClassToElementById("buttonsWrapper", styles.buttonsWrapper);
addClassToElementsByClassName("button", styles.button);

export function handleButtonClick() {
  const buttons = Array.from(document.getElementsByClassName("button"));
  const bombButton = Math.floor(Math.random() * buttons.length);
  let clickedButtonsCount = 0;
  let isBombClicked = false;

  const handleClick = (event) => {
    const clickedButton = event.target;
    if (clickedButton.classList.contains("button")) {
      const buttonIndex = buttons.indexOf(clickedButton);
      if (buttonIndex === bombButton) {
        clickedButton.textContent = "Boom!";
        clickedButton.style.backgroundColor = "red";
        clickedButton.style.color = "white";
        clickedButton.classList.add(styles.buttonAnimate);
        buttons.forEach((button) => {
          button.removeEventListener("click", handleClick);
        });
        setTimeout(() => {
          clickedButton.classList.remove(styles.buttonAnimate);
          showModal("Game over! Try again!");
        }, 1000);
        isBombClicked = true;
      } else {
        clickedButton.textContent = "not a bomb";
        clickedButton.style.backgroundColor = "green";
        clickedButton.style.color = "white";
        clickedButtonsCount++;
        if (clickedButtonsCount === buttons.length - 1 && !isBombClicked) {
          showModal("You won!");
        }
      }
    }
  };

  buttons.forEach((button) => {
    button.addEventListener("click", handleClick);
  });

  function showModal(content) {
    createModal(content, () => {
      location.reload();
    });
  }
}

handleButtonClick();





