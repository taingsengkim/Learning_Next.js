import React from "react";
import { animalList } from "../../animalPhoto";
import Image from "next/image";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function ModalComponent({ id }: { id: string }) {
  const animalITC = animalList.find((a) => a.id === id);
  return (
    // <AlertDialog>
    //   <AlertDialogTrigger
    //     render={<Button variant="outline">Show Dialog</Button>}
    //   />

    //   <AlertDialogContent>
    //     <AlertDialogHeader>
    //       <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
    //       <AlertDialogDescription>
    //         This action cannot be undone. This will permanently delete your
    //         account from our servers.
    //       </AlertDialogDescription>
    //     </AlertDialogHeader>
    //     <AlertDialogFooter>
    //       <AlertDialogCancel>Cancel</AlertDialogCancel>
    //       <AlertDialogAction>Continue</AlertDialogAction>
    //     </AlertDialogFooter>
    //   </AlertDialogContent>
    // </AlertDialog>

    <Dialog open={true}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Animal Image</DialogTitle>
          {/* <DialogDescription>{photo.description}</DialogDescription> */}
        </DialogHeader>
        <Image
          src={animalITC?.src}
          alt={animalITC?.title}
          className="object-cover rounded-4xl  w-full h-100"
        />
      </DialogContent>
    </Dialog>
  );
}
