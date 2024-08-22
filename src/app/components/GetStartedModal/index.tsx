import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";

export default function GetStartedModal({ isOpen, onOpenChange }:any) {
  return (
    <>
      <Modal backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange} className="bg-[#00555a]">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Sign In</ModalHeader>
              <ModalBody>
                <p> 
                  Testtt
                </p>
                {/* Add more content as needed */}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Sign In
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
