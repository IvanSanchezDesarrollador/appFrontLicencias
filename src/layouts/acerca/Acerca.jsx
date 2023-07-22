import { Title, Metric, Subtitle, Text, Button, Divider } from "@tremor/react";
import { FaArrowRight, FaRegHandPointRight } from "react-icons/fa";
import img01 from "./img/imgAcercav4.png";
import img02 from "./img/imgacercav2.png";
import imgLogo from "../../img/opendataAnalitics2023.png";
import imgKevin from "./img/imgKevin.png";
import imgJuli from "./img/imgRumay.png";
import imgIvan from "./img/imgIvan.png";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaSearchLocation,
  FaFacebookSquare,
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Acerca() {
  const equipoProgramacionODA = [
    {
      id: 1,
      nombreCompleto: "Iván Antony Sánchez Chávez",
      img: imgIvan,
      estado: "Egresado",
      especializacion: "Analista Programador Front-End",
      edad: 24,
      descripcion:
        "Como desarrollador del proyecto OpenData Analytics, mi principal responsabilidad fue crear y diseñar la interfaz de usuario utilizando la biblioteca de JavaScript React.js. Mi enfoque se centró en la parte Front-End del proyecto, que es la capa visible con la que los usuarios interactúan directamente. Durante el proceso de desarrollo, apliqué mis habilidades técnicas y conocimientos en React.js para construir una interfaz de usuario dinámica, receptiva y amigable para los usuarios. Trabajé en estrecha colaboración con la encargada de diseño y el desarrollador Back-end. Fue una experiencia agradable y de mucho conocimiento.",
      redes: {
        facebook: "https://www.facebook.com/profile.php?id=100015446205229",
        intagram: "https://www.instagram.com/ivansanchez4767/",
        linkedin:
          "https://www.linkedin.com/in/ivan-antony-s%C3%A1nchez-ch%C3%A1vez-1b5767141/",
        whatsApp: "https://wa.link/dbfk5q",
      },
    },
    {
      id: 2,
      nombreCompleto: "Kevin Arnold Miranda Calderón",
      img: imgKevin,
      estado: "Estudiante",
      especializacion: "Analista Programador Back-End",
      edad: 23,
      descripcion:
        "Me siento emocionado de haber sido parte del proyecto OpenData Analytics como Back-End developer. En esta apasionante iniciativa, mi rol fue fundamental para desarrollar el backend que impulsa el corazón del proyecto: un poderoso y funcional sistema de datos abiertos. Durante mi participación en el proyecto, utilicé PHP junto con el framework Laravel para crear un backend eficiente que permitiera gestionar y presentar los datos de manera clara. La importancia del sistema radica en su capacidad para proporcionar información valiosa y útil a los usuarios, permitiéndoles visualizar y analizar los datos abiertos de forma sencilla.",
      redes: {
        facebook: "https://www.facebook.com/kevin.mirandacalderon",
        intagram: "https://www.instagram.com/kevmiranda8/",
        linkedin: "https://www.instagram.com/kevmiranda8/",
        whatsApp: "https://www.facebook.com/kevin.mirandacalderon",
      },
    },
    {
      id: 3,
      nombreCompleto: "Jhulisa Noemí Rumay Muñoz",
      img: imgJuli,
      estado: "Egresado",
      especializacion: "Analista de Base de Datos y UX",
      edad: 24,
      descripcion:
        "Ha sido una grata experiencia formar parte del proyecto OpenData Analytics como Analista de Base de Datos y diseño. En esta apasionante iniciativa, mi rol fue fundamental para desarrollar el diseño de la página web y tener el control de la Base de Datos. Durante mi participación en el proyecto, empleé Figma como la herramienta principal para crear diseños interactivos y atractivos, además de utilizarla para la gestión y organización eficiente del proyecto. Asimismo, trabajé conjuntamente con el administrador de bases de datos Navicat con una conexión MySQL para garantizar una gestión correcta y  óptima de los datos.",
      redes: {
        facebook: "https://www.facebook.com/jhulisanoemi.rumaymunoz",
        intagram: "https://www.instagram.com/jhuno84/",
        linkedin:
          "https://www.linkedin.com/in/jhulisa-noem%C3%AD-rumay-mu%C3%B1oz/",
        whatsApp: "https://www.facebook.com/jhulisanoemi.rumaymunoz",
      },
    },
  ];

  const tajetasEquipo = equipoProgramacionODA.map((e) => (
    <div
      key={e.id}
      className="xl:w-[33.3%] w-full h-[100%] bg-gray-200 rounded-lg shadow-xl"
    >
      <div className="2xl:h-[40%] xl:h-[30%] w-full  flex justify-center items-center">
        <div className="xl:w-32 xl:h-32 2xl:w-56 2xl:h-56 h-28 w-28 mt-3 xl:mt-0 bg-orange-400 border-blue-200 border-[0.5rem] rounded-full flex items-center overflow-hidden">
          <img src={e.img} alt="" className="object-cover" />
        </div>
      </div>
      <div className="h-[60%] w-full">
        <Text className="text-center">
          {e.estado} - {e.edad} años
        </Text>
        <Title className="text-center">{e.nombreCompleto}</Title>
        <Subtitle className="text-center">{e.especializacion}</Subtitle>
        <Text className="2xl:mx-11 mx-3 xl:mx-2 text-center mt-2 xl:text-[0.6rem] 2xl:text-[1rem]">
          {e.descripcion}
        </Text>
        <Divider className="w-[80%] bg-slate-400"></Divider>
        <div className="flex my-6 text-3xl justify-around xl:pb-0 pb-8">
          <Link to={e.redes.facebook} target="_blank">
            {" "}
            <FaFacebookSquare className="hover:text-red-400 text-gray-500"></FaFacebookSquare>
          </Link>
          <Link to={e.redes.intagram} target="_blank">
            <FaInstagram className="hover:text-red-400 text-gray-500"></FaInstagram>
          </Link>
          <Link to={e.redes.whatsApp} target="_blank">
            <FaWhatsapp className="hover:text-red-400 text-gray-500"></FaWhatsapp>
          </Link>
          <Link to={e.redes.linkedin} target="_blank">
            <FaLinkedin className="hover:text-red-400 text-gray-500"></FaLinkedin>
          </Link>
        </div>
      </div>
    </div>
  ));
  return (
    <>
      <div className="w-full bg-slate-100">
        <div className="xl:h-screen h-auto w-full xl:px-4 2xl:px-20 px-2 xl:flex justify-between">
          <div className="xl:w-1/2 xl:h-full flex justify-center items-center">
            <img src={img01} alt="" className="w-[90%] mt-20" />
          </div>
          <div className="xl:w-1/2 xl:px-24 flex justify-center items-center">
            <div className="px-2 xl:px-0">
              <Metric className="font-bold">OPEN DATA Analytics</Metric>
              <Subtitle className="pt-2">
                Dashboards de Estadísticas y Análisis de Datos Abiertos de la
                Municipalidad Provincial de Cajamarca - Perú
              </Subtitle>
              <Text className="pt-2">
                <p className="text-justify leading-8">
                  El proyecto{" "}
                  <span className="font-semibold text-red-400 leading-8">
                    OPEN DATA Analytics
                  </span>{" "}
                  es una iniciativa de datos abiertos implementada por{" "}
                  <span className="text-blue-500 leading-8">
                    Estudiantes de la Escuela Académico Profesional de
                    Ingeniería de Sistemas de la Universidad Nacional de
                    Cajamarca
                  </span>{" "}
                  con el objetivo de brindar transparencia y acceso a la
                  información pública de la ciudad. En este proyecto se ha
                  desarrollado una serie dashboards interactivos que presenta la
                  información de tres documentos claves brindados por la
                  Municipalidad en formato de datos abiertos: Infracciones de
                  Tránsito, Licencias de Funcionamiento y Órdenes de Compra y
                  Servicio.
                </p>
              </Text>
              <Text className="pt-2 text-justify leading-8">
                <p className="text-justify leading-8">
                  El Sistema OPEN DATA Analytics es una herramienta poderosa que
                  organiza y visualiza los datos de manera clara y comprensible
                  a través de tablas y gráficos. Los ciudadanos de Cajamarca
                  pueden acceder a estos tableros de control de manera gratuita
                  y sencilla.
                </p>
              </Text>
              <Link to={"/incio/Cards"}>
                <Button
                  className="xl:mt-9 mt-3 shadow-xl 2xl:w-[20%] xl:w-[25%] w-[100%]"
                  size="xl"
                  color="sky"
                  icon={FaArrowRight}
                >
                  Acceder
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="xl:h-screen w-full h-full xl:px-20 px-2 xl:flex justify-between bg-white">
          <div className="xl:w-1/2 2xl:px-24 flex justify-center items-center">
            <div>
              <Subtitle className="pt-2">OPEN DATA Analytics</Subtitle>
              <Metric className="font-bold">
                La importancia de este proyecto radica en varios aspectos:
              </Metric>
              <div className="xl:pl-6 mt-3">
                <Text className="pt-2 text-justify">
                  <span className="text-blue-400 font-semibold">
                    <FaRegHandPointRight className="inline-block"></FaRegHandPointRight>{" "}
                    Transparencia y rendición de cuentas:
                  </span>{" "}
                  Al publicar los datos en formato abierto y presentarlos de
                  manera accesible, la Municipalidad muestra su compromiso con
                  la transparencia y rinde cuentas a los ciudadanos sobre su
                  gestión en áreas críticas como las infracciones de tránsito,
                  las licencias de funcionamiento y las órdenes de compra y
                  servicio.
                </Text>
                <Text className="pt-2 text-justify">
                  <span className="text-blue-400 font-semibold">
                    <FaRegHandPointRight className="inline-block"></FaRegHandPointRight>{" "}
                    Participación ciudadana:
                  </span>{" "}
                  OPEN DATA Analytics fomenta la participación ciudadana al
                  empoderar a los habitantes de la ciudad con información
                  relevante y actualizada. Esto les permite tomar decisiones
                  informadas, plantear propuestas y realizar seguimiento a la
                  labor de la Municipalidad.
                </Text>
                <Text className="pt-2 text-justify">
                  <span className="text-blue-400 font-semibold">
                    <FaRegHandPointRight className="inline-block"></FaRegHandPointRight>{" "}
                    Mejora de la calidad de servicios:
                  </span>{" "}
                  Al contar con información detallada y actualizada sobre las
                  infracciones de tránsito, las licencias de funcionamiento y
                  las órdenes de compra y servicio, la población y las
                  organizaciones de la sociedad civil pueden identificar áreas
                  problemáticas y proponer mejoras en la prestación de servicios
                  municipales.
                </Text>
                <Text className="pt-2 text-justify">
                  <span className="text-blue-400 font-semibold">
                    <FaRegHandPointRight className="inline-block"></FaRegHandPointRight>{" "}
                    Facilitar el acceso a la información:
                  </span>{" "}
                  El sistema proporciona una forma intuitiva y amigable de
                  acceder a los datos, lo que facilita que tanto ciudadanos como
                  periodistas y académicos puedan utilizarlos para realizar
                  análisis, investigaciones y reportajes sobre temas relevantes
                  para la comunidad.
                </Text>
              </div>
            </div>
          </div>
          <div className="xl:w-1/2 h-full flex justify-center items-center">
            <img src={img02} alt="" className="w-[80%]" />
          </div>
        </div>

        <div className="xl:h-screen w-full h-screen  xl:px-20 px-2 flex flex-col justify-center ">
          <div className="h-3/12  flex justify-center items-center">
            <img src={imgLogo} alt="" className="xl:w-[10%]  w-[50%]" />
          </div>
          <div className="h-9/12 flex justify-center items-center">
            <div>
              <Text className="font-bold mt-8 text-center 2xl:px-96">
                En resumen, el proyecto{" "}
                <span className="text-red-400"> OPEN DATA Analytics </span> es
                una valiosa herramienta que promueve la transparencia, la
                participación ciudadana y la mejora de los servicios municipales
                en Cajamarca. Al brindar acceso a información clave de manera
                organizada y visual, este proyecto empodera a los ciudadanos,
                fomenta la rendición de cuentas y contribuye al desarrollo de
                una ciudad más informada y participativa.
              </Text>
            </div>
          </div>
        </div>

        <div className="xl:h-screen h-auto w-full  xl:flex justify-center items-center bg-white">
          <div className="w-full ">
            <Metric className="font-bold text-center xl:mt-8 pt-7 xl:pt-0">
              NUESTRO EQUIPO
            </Metric>

            <div className="xl:flex justify-between items-center xl:w-[95%] w-[100%] m-auto xl:h-[30rem] 2xl:h-[40rem] mt-4  gap-8 ">
              {tajetasEquipo}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Acerca;
