import { isMobileDevice } from "@/utils/responsive";
import React, { useRef } from "react";
import Modal from "react-modal";

interface IModalComponentProps {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const customStyles = {
  content: {
    top: "55%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: isMobileDevice() ? "90vw" : "35vw",
    transform: "translate(-50%, -50%)",
    padding: "0px",
    overflow: "hidden",
    maxHeight: "90vh",
    zIndex: 1000000,
    minWidth: "800px",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.75)",
  },
};

const ModalComponent: React.FC<IModalComponentProps> = (props) => {
  const modalRef = useRef<HTMLDivElement | null>(null); // Specify the type of modalRef

  return (
    <Modal
      isOpen={props.isVisible}
      style={customStyles}
      onRequestClose={props.onClose}>
      {/* @ts-ignore */}
      <div ref={modalRef}>{props.children as React.ReactNode}</div>
    </Modal>
  );
};

export default ModalComponent;
