function addClassToElementsByClassName(className, targetClass) {
    const elements = document.getElementsByClassName(className);
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.add(targetClass);
    }
  }
  
  export default addClassToElementsByClassName;  