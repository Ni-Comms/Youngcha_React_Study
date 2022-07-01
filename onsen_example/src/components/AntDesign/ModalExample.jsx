import React, { useState } from "react";
import { Button, Modal, Progress } from "antd";

export default function ModalExample() {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");

  const showModal = () => {
    setVisible(true);
    //ModalExample(true);
    setModalText("Content of the modal");
  };

  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };
  return (
    <>
      <>
        <Progress strokeLinecap="butt" percent={75} />
        <Progress strokeLinecap="butt" type="circle" percent={75} />
        <Progress strokeLinecap="butt" type="dashboard" percent={75} trailColor="red" />
        <Progress strokeLinecap="butt" type="circle" percent={75} status="success" />
        <Progress strokeLinecap="butt" type="dashboard" percent={75} status="exception" trailColor="red" />
      </>
      <Button type="primary" onClick={showModal}>
        Open Modal with async logic
      </Button>
      <Modal title="Title" visible={visible} onOk={handleOk} confirmLoading={confirmLoading} onCancel={handleCancel}>
        <p>{modalText}</p>
      </Modal>
    </>
  );
}
