"use client";

import {useState} from "react";
import {Dialog, DialogTrigger} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";

/**
 * @returns a modal
 * DialogTrigger controls it
 */
const UploadButton = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Dialog
      open={isOpen}
      onOpenChange={(visible) => {
        if (!visible) setIsOpen(visible);
      }}
    >
      {/* As child change it to have a button component children */}
      <DialogTrigger
        onClick={() => setIsOpen(true)}
        asChild
      >
        <Button>Upload PDF</Button>
      </DialogTrigger>
    </Dialog>
  );
};

export default UploadButton;
