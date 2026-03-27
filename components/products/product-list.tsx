"use client";

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  useDeleteProdutMutation,
  useGetProductsQuery,
} from "@/lib/features/products/productApi";
import { Button } from "../ui/button";
import { Delete, MoreHorizontalIcon } from "lucide-react";
import DeleteModal from "../PopUp";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Spinner } from "@heroui/react";

export default function ProductList() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const { data, isLoading } = useGetProductsQuery();
  const [deleteProduct] = useDeleteProdutMutation();
  const router = useRouter();
  if (isLoading) {
    return (
      <div className="flex items-center gap-4">
        <Spinner />
      </div>
    );
  }
  const handleDelete = async (id: number) => {
    setSelectedId(id);
    // if (confirm("Are you sure you want to delete this product?")) {
    //   try {
    //     await deleteProduct(id).unwrap();
    //     alert("Product deleted successfully!");
    //   } catch (err) {
    //     console.error(err);
    //     alert("Failed to delete product");
    //   }
    // }
  };
  const handleUpdate = async (id: number) => {
    router.push(`/dashboard/product/edit/${id}`);
  };
  const handleConfirmDelete = async () => {
    if (!selectedId) return;

    try {
      await deleteProduct(selectedId).unwrap();
      toast.success("Product deleted successfully!");
    } catch (err) {
      console.error(err);
      toast.success("Failed to delete product");
    } finally {
      setSelectedId(null);
    }
  };
  return (
    <>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Id</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Category</TableHead>
            <TableHead className="text-right">Price</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell> */}
          {data?.map((d) => (
            <TableRow key={d.id}>
              <TableCell className="font-medium">{d.id}</TableCell>
              <TableCell>{d.title}</TableCell>
              <TableCell>{d.category.name}</TableCell>
              <TableCell className="text-right">{d.price}</TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="size-8">
                      <MoreHorizontalIcon />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleUpdate(d.id)}>
                      Update
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      className="text-destructive"
                      onClick={() => handleDelete(d.id)}
                    >
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {selectedId && (
        <DeleteModal
          id={selectedId}
          onConfirm={handleConfirmDelete}
          onCancel={() => setSelectedId(null)}
        />
      )}
    </>
  );
}
