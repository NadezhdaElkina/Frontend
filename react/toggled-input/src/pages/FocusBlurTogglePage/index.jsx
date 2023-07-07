import React, { useRef, useState } from "react";
import { Wrapper } from "./index.style";
import { Input } from "../../components/Input/index.style";
import {
  Checkbox,
  CheckboxLabel,
  CheckboxBackground,
  CheckboxToggle,
} from "../../components/Checkbox/index.style";


export function FocusBlurToggle() {
  const inputRef = useRef(null);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked((prevValue) => !prevValue);

    if (isChecked) {
      inputRef.current.blur();
    } else {
      inputRef.current.focus();
    }
  };

  return (
    <Wrapper>
      <Input type="text" ref={inputRef} checked={isChecked}/>
      <CheckboxLabel>
        <Checkbox type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
        <CheckboxBackground checked={isChecked}/>
        <CheckboxToggle checked={isChecked} />
      </CheckboxLabel>
    </Wrapper>
  );

}
