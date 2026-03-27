"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  FileUpload,
  FileUploadDropzone,
  FileUploadItem,
  FileUploadItemDelete,
  FileUploadItemPreview,
  FileUploadList,
} from "../ui/file-upload";
import { X } from "lucide-react";
import Image from "next/image";

interface ImagesUploadProps {
  value?: File[];
  onImagesChange?: (files: File[]) => void;
  existingImages?: string[]; // URLs of existing images
}

const ImagesUpload = ({
  value = [],
  onImagesChange,
  existingImages = [],
}: ImagesUploadProps) => {
  const [files, setFiles] = React.useState<File[]>(value);
  const [oldImages, setOldImages] = React.useState<string[]>(existingImages);

  console.log(existingImages);

  React.useEffect(() => {
    setFiles(value);
    setOldImages(existingImages);
  }, [value, existingImages]);

  const handleFilesChange = (newFiles: File[]) => {
    setFiles(newFiles);
    onImagesChange?.(newFiles);
  };

  const handleDeleteOld = (index: number) => {
    const newOld = [...oldImages];
    newOld.splice(index, 1);
    setOldImages(newOld);
  };

  const handleDeleteNew = (index: number) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
    onImagesChange?.(newFiles);
  };
  console.log("Old Img" + oldImages);
  return (
    <div className="flex flex-col gap-2">
      {/* Existing images */}
      {/* {oldImages.length > 0 && (
        <div className="flex gap-2 flex-wrap">
          {oldImages.map((url, index) => (
            <div key={index} className="relative">
              <Image
                src={url}
                width={50}
                height={50}
                alt={`Existing ${index}`}
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-0 right-0"
                onClick={() => handleDeleteOld(index)}
              >
                <X className="size-4" />
              </Button>
            </div>
          ))}
        </div>
      )} */}

      {/* New uploads */}
      <FileUpload
        accept="image/*"
        maxFiles={5}
        value={files}
        onValueChange={handleFilesChange}
        multiple
      >
        <FileUploadDropzone>
          <div className="text-center py-5 border rounded-md">
            Drag & drop images here or click to select
          </div>
        </FileUploadDropzone>

        <FileUploadList>
          {/* Render Existing Images (URLs) */}
          {/* {oldImages.map((url, index) => (
            <FileUploadItem key={`old-${index}`} value={url as any}>
              <FileUploadItemPreview />
              <div className="flex-1 truncate text-sm">
                Existing Image {index + 1}
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleDeleteOld(index)}
              >
                <X className="size-4" />
              </Button>
            </FileUploadItem>
          ))} */}

          {/* Render New Uploads (Files) */}
          {files.map((file, index) => (
            <FileUploadItem key={`new-${index}`} value={file}>
              <FileUploadItemPreview />
              <div className="flex-1 truncate text-sm">{file.name}</div>
              <FileUploadItemDelete asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleDeleteNew(index)}
                >
                  <X className="size-4" />
                </Button>
              </FileUploadItemDelete>
            </FileUploadItem>
          ))}
        </FileUploadList>
      </FileUpload>
    </div>
  );
};

export default ImagesUpload;
