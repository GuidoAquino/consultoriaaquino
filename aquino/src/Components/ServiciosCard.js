import React from "react";
import Automatizacion from './../../public/Assets/ServiciosIMG/automatizacion.png'
import BackOffice from './../../public/Assets/ServiciosIMG/backoffice.png'
import BigData from './../../public/Assets/ServiciosIMG/bigdata.png'
import CComputing from './../../public/Assets/ServiciosIMG/cc.png'
import CostumerEX from './../../public/Assets/ServiciosIMG/costumerex.png'
import InteligciaArt from './../../public/Assets/ServiciosIMG/IA.png'
import InternetCosas from './../../public/Assets/ServiciosIMG/internet.png'
import Seguridad from './../../public/Assets/ServiciosIMG/Seguridad.png'
import TransDigital from './../../public/Assets/ServiciosIMG/transform.png'
import Image from "next/image";

const ServiciosCard = () => {
  return (
    <>
      <div className="bg-[--celesteoscuro]">
        <section className="mx-auto container py-20 ">
          <div className="flex justify-center items-center flex-col">
            <div className="lg:text-6xl md:text-5xl text-4xl font-black leading-10 text-center text-gray-800 dark:text-white">
              <h1>Nuestos Servicios</h1>
            </div>
            <div className="pt-24 grid lg:grid-cols-3 md:grid-cols-2 justify-center items-center xl:gap-y-16 gap-y-20 gap-x-16 lg:gap-x-20 xl:gap-x-0 lg:px-10 xl:px-0">
              <div className="hover:shadow-lg rounded-lg py-6 xl:px-4  xl:w-96 w-60 flex justify-center items-center flex-col">
                <div className="mb-6">
             
                 <Image src={Seguridad} width={80}></Image>
                </div>
                <div className="text-gray-800 dark:text-white text-2xl font-semibold text-center">
                  <h2 className="text-[--turquesa]">Ciberseguridad</h2>
                </div>
                <div className="text-gray-600 dark:text-gray-300 mt-2 text-lg text-center ">
                  <p>
                    Blindar la integridad del negocio en internet, asegurando la
                    protección de todos los datos.
                  </p>
                </div>
              </div>
              <div className="hover:shadow-lg py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
                <div className="mb-6">
                <Image src={InternetCosas} width={80}></Image>
                </div>
                <div className="text-gray-800 dark:text-white text-2xl font-semibold text-center">
                  <h2 className="text-[--turquesa]">Internet de las Cosas</h2>
                </div>
                <div className="text-gray-600 dark:text-gray-300 mt-2 text-lg text-center">
                  <p>
                    Actuación en tiempo real sobre los asegurados. Interacción
                    continua. Optimización de conectividad.
                  </p>
                </div>
              </div>
              <div className="hover:shadow-lg py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
                <div className="mb-6">
                <Image src={InteligciaArt} width={80}></Image>
                </div>
                <div className="text-gray-800 dark:text-white text-2xl font-semibold text-center">
                  <h2 className="text-[--turquesa]">Inteligencia Artificial</h2>
                </div>
                <div className="text-gray-600 dark:text-gray-300 mt-2 text-lg text-center">
                  <p>
                    Modelado y reproducción de comportamientos complejos.
                    Aprendizaje continuo.
                  </p>
                </div>
              </div>
              <div className="hover:shadow-lg py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
                <div className="mb-6">
                <Image src={TransDigital} width={80}></Image>
                </div>
                <div className="text-gray-800 dark:text-white text-2xl font-semibold text-center">
                  <h2 className="text-[--turquesa]">Transformación Digital</h2>
                </div>
                <div className="text-gray-600 dark:text-gray-300 mt-2 text-lg text-center">
                  <p>
                    Acompañamiento y herramientas para el cambio de cultura, de
                    metodología de proyectos y adopción de tecnologías
                    innovadoras.
                  </p>
                </div>
              </div>
              <div className="hover:shadow-lg py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
                <div className="mb-6">
                <Image src={CComputing} width={80}></Image>
                </div>
                <div className="text-gray-800 dark:text-white text-2xl font-semibold text-center">
                  <h2 className="text-[--turquesa]">Cloud Computing</h2>
                </div>
                <div className="text-gray-600 dark:text-gray-300 mt-2 text-lg text-center">
                  <p>
                    Implementación y modernización integral de cargas de trabajo
                    en nube privada y pública.
                  </p>
                </div>
              </div>
              <div className="hover:shadow-lg py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
                <div className="mb-6">
                <Image src={Automatizacion} width={80}></Image>
                </div>
                <div className="text-gray-800 dark:text-white text-2xl font-semibold text-center">
                  <h2 className="text-[--turquesa]">Automatización</h2>
                </div>
                <div className="text-gray-600 dark:text-gray-300 mt-2 text-lg text-center">
                  <p>
                    Optimización de la operación de las plataformas reduciendo
                    el trabajo repetitivo.
                  </p>
                </div>
              </div>
              <div className="hover:shadow-lg py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
                <div className="mb-6">
                <Image src={BigData} width={80}></Image>
                </div>
                <div className="text-gray-800 dark:text-white text-2xl font-semibold text-center">
                  <h2 className="text-[--turquesa]">Big Data
</h2>
                </div>
                <div className="text-gray-600 dark:text-gray-300 mt-2 text-lg text-center">
                  <p>
                  Herramientas para la decisón en tiempo real. Dar sentido a la complejidad de la información disponible.

                  </p>
                </div>
              </div>
              <div className="hover:shadow-lg py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
                <div className="mb-6">
                <Image src={CostumerEX} width={80}></Image>
                </div>
                <div className="text-gray-800 dark:text-white text-2xl font-semibold text-center">
                  <h2 className="text-[--turquesa]">Customer Experience
</h2>
                </div>
                <div className="text-gray-600 dark:text-gray-300 mt-2 text-lg text-center">
                  <p>
                  Interacción con redes sociales, e-commerce personalizado. Consumidor digital.
                  </p>
                </div>
              </div>
              <div className="hover:shadow-lg py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
                <div className="mb-6">
                <Image src={BackOffice} width={80}></Image>
                </div>
                <div className="text-gray-800 dark:text-white text-2xl font-semibold text-center">
                  <h2 className="text-[--turquesa]">BackOffice 4.0
</h2>
                </div>
                <div className="text-gray-600 dark:text-gray-300 mt-2 text-lg text-center">
                  <p>
                  Gestión de negocios y automatización de procesos. CRM 4.0. Visibilidad 360 en cada interacción.

                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServiciosCard;
