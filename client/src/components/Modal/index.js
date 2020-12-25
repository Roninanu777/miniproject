import { useState } from "react";
import CreateProject from "../CreateProject";
import Payment from "../Payment";
import "./modal.css";

const Modal = (props) => {
  const [step, setStep] = useState(1);

  const next = () => {
    setStep((prev) => prev + 1);
  };

  const switchSteps = (step) => {
    switch (step) {
      case 1:
        return <CreateProject next={next} closeModal={props.closeModal} />;

      case 2:
        return <Payment closeModal={props.closeModal} />;

      default:
        return <></>;
    }
  };

  return (
    <div className="overlay">
      <div className="content">{switchSteps(step)}</div>
    </div>
  );
};

export default Modal;
