import { Button, AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogCloseButton, AlertDialogBody, AlertDialogFooter } from "@chakra-ui/react";
import React from "react";

interface DeletionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const DeletionModal: React.FC<DeletionModalProps> = ({ isOpen, onClose, onConfirm }) => {
  const cancelRef = React.useRef<HTMLButtonElement>(null);

  return (
    <>
      <AlertDialog
        motionPreset='slideInBottom'
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogHeader>Tem certeza que deseja deletar esta categoria?</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            Essa ação é irreversível e não poderá ser desfeita. Deseja continuar?
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              cancelar
            </Button>
            <Button bg={'#FF7A50'} _hover={{ bg: '#FF5823' }} color={'white'} ml={3} onClick={onConfirm}>
              Sim
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
} 