import { Title, Subtitle, Text } from "@tremor/react";

import OneCard from "./components/OneCard";
import imgFondo from "./img/FondoCards.png";

// import { FaAngleRight, FaCommentAlt } from "react-icons/fa";
import { RiDashboardLine } from "react-icons/ri";
// import { Link } from "react-router-dom";

const CardsStudio = () => {
  const bgColorStyle = {
    backgroundImage: `url(${imgFondo})`,
    maxWidth: "2050px",
    margin: "auto",
  };
  return (
    <>
      <div
        className="2xl:h-auto w-full bg-no-repeat bg-cover"
        style={bgColorStyle}
      >
        <div className="2xl:pt-[5rem] xl:pt-[3.5rem] pt-[5rem]">
          <div className="2xl:py-4 flex 2xl:justify-between justify-center items-center w-full">
            <div className=" px-14 xl:flex justify-between w-3/12 hidden ">
              {/* <Link to={"/acerca"}>
                <Text className="border-b-2 hover:text-blue-400 hover:border-blue-500 cursor-pointer flex items-center justify-center">
                  {" "}
                  <FaCommentAlt className="mr-2"></FaCommentAlt>Acerca de tt
                </Text>
              </Link> */}
            </div>

            <div className="flex flex-col justify-center items-center 2xl:gap-3 2xl:mb-0 xl:mb-0 2xl:w-6/12 2xl:py-0 py-2 2xl:px-0 px-5">
              <RiDashboardLine className=" text-red-500 2xl:text-[2.3rem] xl:text-[1.2rem]"></RiDashboardLine>
              <Title className="text-center 2xl:text-xl text-red-500 xl:text-[0.9rem]">
                <p className="font-bold text-3xl mt-2">
                  ANÁLISIS DATOS ABIERTOS DE LA PROVINCIA DE CAJAMARCA
                </p>
              </Title>
              <Subtitle className="text-center 2xl:text-[1rem] xl:text-[0.6rem]">
                <p className="text-xl text-gray-700">
                  Representación mediante Dashboards para una mayor
                  visualización y entendimiento.
                </p>
              </Subtitle>
            </div>

            <div className="xl:flex justify-end px-14 w-3/12 hidden">
              {/* <Link to={"https://www.gob.pe/municajamarca"} target="_blank">
                <Text className="border-b-2 hover:text-blue-400 hover:border-blue-500 cursor-pointer hidden xl:flex items-center justify-center">
                  Ir a Municipalidad de Cajamarca{" "}
                  <FaAngleRight className="p-0 ml-2"></FaAngleRight>
                </Text>
              </Link> */}
            </div>
          </div>
          <div className="p-1">
            <OneCard></OneCard>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardsStudio;
