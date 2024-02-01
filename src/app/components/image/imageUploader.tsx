import Image from "next/image";
import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { useFieldArray, useFormContext } from "react-hook-form";

export const ImageUploader = (): React.ReactElement => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const form = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'images',
  });

  const handleDrop = (acceptedFiles: File[]) => {
    acceptedFiles.map((file) => { append(file) })
  };

  return (
    <Dropzone onDrop={handleDrop} multiple >
      {({ getRootProps, getInputProps }) => (
        <section>
          <div
            {...getRootProps()}
            style={{ border: "2px dashed gray", padding: "20px", textAlign: "center" }}
          >
            <input {...getInputProps()} />
            <p>Arraste arquivos ou clique para adicionar</p>
          </div>
          <div className="flex gap-4 items-center w-fit h-fit mt-4">
            {(form.getValues()['images'] ?? []).map((file: File, index: number) => (
              <div key={index}>
                <Image className="rounded-md" src={URL.createObjectURL(file)} alt={file.name} width={100} height={100} style={{ width: 'auto', height: 'auto' }} />
              </div>
            ))}
          </div>
        </section>
      )}
    </Dropzone>
  );
};
