import Image from "next/image";
import koshkil from "./../../public/Assets/Koshkil.png";
import moha from "./../../public/Assets/Moha.webp";
import tucci from "./../../public/Assets/Tucci.png";
import viapatagonica from "./../../public/Assets/via-patagonica.png";

import React from "react";

const CarrosuelClientes = () => {
  return (
    <>
      <div class="max-w-screen-xl mx-auto mt-20 ">
        <div class="grid grid-cols-2 gap-6 md:grid-cols-6 lg:grid-cols-4">
          <div class="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
           <a href="https://koshkil.com.ar/" target="_blank"><Image src={koshkil} width={200} alt="KoshKill"></Image></a>
          </div>

          <div class="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
          <a href="https://www.moha.com.ar/" target="_blank"><Image src={moha} width={200}></Image></a>
           
          </div>

          <div class="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
          <a href="https://www.tucciweb.com/" target="_blank"><Image src={tucci} width={200}></Image></a>
          </div>

          <div class="flex items-center justify-center col-span-1 md:col-span-3 lg:col-span-1">
          <a href="https://viapatagonica.com.ar/" target="_blank"><Image src={viapatagonica} width={200}></Image></a>
          </div>

         
        </div>
      </div>
      
    </>
  );
};

export default CarrosuelClientes;
