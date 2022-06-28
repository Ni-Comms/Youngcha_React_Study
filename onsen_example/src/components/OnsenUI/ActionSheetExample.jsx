import React, { useState } from "react";
import { Button, ActionSheet, ActionSheetButton } from "react-onsenui";

export default function ActionSheetExample() {
  const [open, setOpen] = useState(false);

  const handleActionClick = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button onClick={handleActionClick}>ActionSheetButton</Button>
      <ActionSheet isOpen={open} title="action sheet">
        <ActionSheetButton>Label 1</ActionSheetButton>
        <ActionSheetButton>Label 2</ActionSheetButton>
        <ActionSheetButton>Label 3</ActionSheetButton>
        <ActionSheetButton modifier="destructive">Cancle</ActionSheetButton>
        <ActionSheetButton>Save</ActionSheetButton>
      </ActionSheet>
    </div>
  );
}
