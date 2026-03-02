"use client";
import {
  Field,
  FieldDescription,
  FieldLabel,
  FieldError,
} from "@/components/ui/field";
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
} from "@/components/ui/input-group";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import React, { useState, useEffect, use } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { UploadIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InsertProduct } from "@/lib/data/products";
import { title } from "process";
import { privateDecrypt } from "crypto";
import { Price } from "../i-tech-cards/price";
import { ProductRequest } from "@/lib/type/product-response";
import { getCategories } from "@/lib/data/categories";
import { CategoryType } from "@/lib/type/category-response";
import ImagesUpload from "./images-form";
import { ImageFile } from "@/lib/type/image-type";
import { ImageProps } from "next/image";
import { UploadImage } from "@/lib/data/images";
import ProductCard from "../i-tech-cards/product-card1";

export default function UploadProduct({
  categories,
}: {
  categories: Promise<any>;
}) {
  const formSchema = z.object({
    title: z
      .string()
      .min(1, { message: "This field is required" })
      .min(5, "Product title at least 5 characters long."),
    price: z.coerce.number("Price is required"),
    description: z
      .string()
      .min(10, "Product details at least 5 characters long."),
    categoryId: z.string().min(1, "This field is required"),
    images: z.array(z.any()).min(1, "At least 1 image is required"),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      categoryId: "",
      images: [],
    },
  });

  // const [images, setImages] = React.useState<ImageFile[]>([]);

  // function handleImageChange(images: ImageFile[]) {
  //   setImages(images);
  // }
  const cateogires: CategoryType[] = use(categories);
  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // console.log(images);
    const imageFormData = new FormData();
    imageFormData.append("file", values.images[0]);
    const uploadProduct = await UploadImage(imageFormData);
    console.log(uploadProduct);
    const productData: ProductRequest = {
      title: values.title,
      price: values.price,
      description: values.description,
      categoryId: values.categoryId,
      images: [uploadProduct.location],
    };
    // const productRequest: ProductRequest = values;
    // productRequest.images[0] = uploadProduct;
    const resData = await InsertProduct(productData);
    if (!resData || resData.id) {
      form.reset();
      alert("success");
    } else {
      alert("error");
    }
  }

  function onReset() {
    form.reset();
    form.clearErrors();
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      onReset={onReset}
      className="space-y-8 @container pt-25"
    >
      <div className="grid grid-cols-12 gap-4">
        <Controller
          control={form.control}
          name="title"
          render={({ field, fieldState }) => (
            <Field
              className="col-span-12 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start"
              data-invalid={fieldState.invalid}
            >
              <FieldLabel className="flex w-auto!">Product Name</FieldLabel>

              <Input
                key="text-input-0"
                placeholder="Macbook Air M4"
                type="text"
                className=""
                {...field}
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          control={form.control}
          name="price"
          render={({ field, fieldState }) => (
            <Field
              className="col-span-12 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start"
              data-invalid={fieldState.invalid}
            >
              <FieldLabel className="flex w-auto!">Price</FieldLabel>

              <Input
                key="number-input-0"
                placeholder="1500 USD"
                type="number"
                className=""
                {...field}
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          control={form.control}
          name="description"
          render={({ field, fieldState }) => (
            <Field
              className="col-span-12 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start"
              data-invalid={fieldState.invalid}
            >
              <FieldLabel className="flex w-auto!">Description</FieldLabel>

              <Textarea
                key="textarea-0"
                id="description"
                placeholder=""
                className=""
                {...field}
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          control={form.control}
          name="categoryId"
          render={({ field, fieldState }) => (
            <Field
              className="col-span-12 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start"
              data-invalid={fieldState.invalid}
            >
              <FieldLabel className="flex w-auto!">Category</FieldLabel>

              <Select
                key="select-0"
                value={field.value}
                name={field.name}
                onValueChange={field.onChange}
              >
                <SelectTrigger className="w-full ">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  {cateogires.map((c, index) => (
                    <SelectItem key={c.id} value={c.id.toString()}>
                      {c.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          control={form.control}
          name="images"
          render={({ field, fieldState }) => (
            <Field
              className="col-span-12 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start"
              data-invalid={fieldState.invalid}
            >
              <FieldLabel className="flex w-auto!">Upload Images</FieldLabel>

              {/* <ImagesUpload
                aria-invalid={fieldState.invalid}
                onImagesChange={handleImageChange}
                {...field}
              /> */}

              <ImagesUpload
                value={field.value}
                onImagesChange={field.onChange}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Field className="col-span-12 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start">
          <FieldLabel className="hidden w-auto!">Submit</FieldLabel>

          <Button
            key="submit-button-0"
            id="submit-button-0"
            name=""
            className="w-full"
            type="submit"
            variant="default"
          >
            Submit
          </Button>
        </Field>
      </div>
    </form>
  );
}
