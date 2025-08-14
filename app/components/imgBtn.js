"use client"
import { useRef, useState } from "react";
import Image from "next/image";


export default function ImgBtn({ src, alt }) {
  const [img, setImg] = useState("");
  const imgRef = useRef(null)
  const imgChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImg(e.target.files[0]);
    }
  }
  const imgRemove = (e) => {
    imgRef.current.value = null;
    setImg("");
  }
  return <>
    <input
      className="w-full bg-gray-200 text-lg rounded-lg file:border-0 file:bg-gray-300 file:hover:bg-gray-50"
      type="file" name="img" id="" ref={imgRef} onChange={imgChange} />
    {img && <Image src={URL.createObjectURL(img)} width={500} height={500} alt={alt || ""}
      onClick={imgRemove} />}
  </>
}
