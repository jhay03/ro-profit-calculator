import { Label } from "@radix-ui/react-label";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { PlusCircle } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { DropdownMenuCheckboxes } from "./drop-down";

export function AddData() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="default">
            Add Data <PlusCircle className="h-5 w-5" />
          </Button>
        </DialogTrigger>
        <DialogContent className="w-3xl">
          <DialogHeader>
            <DialogTitle>Add Details</DialogTitle>
            <DialogDescription>
              Add details of the transaction here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-2">
            <div className="grid gap-2">
              <Label htmlFor="name-1">Name</Label>
              <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="username-1">Username</Label>
              <Input id="username-1" name="username" defaultValue="@peduarte" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="name-1">Name</Label>
              <DropdownMenuCheckboxes />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="username-1">Username</Label>
              <Input id="username-1" name="username" defaultValue="@peduarte" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="name-1">Name</Label>
              <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
