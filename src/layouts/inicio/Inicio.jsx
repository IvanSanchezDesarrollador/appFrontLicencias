import { Metric, Text, Bold, Button } from "@tremor/react"
import imglogoBack from './img/analisisdata.png'
import imgfondo from './img/fondoOpenData.png'
import imgmpc from './img/logompc.png';
import { Link } from "react-router-dom";
import { FaArrowRight } from 'react-icons/fa';

function Inicio() {
  const containerStyle = {
    backgroundImage: `url(${imgfondo})`,
    maxWidth: '2050px',
    margin: "auto"
  };


  return (
    <>
      <div className="w-[100%] min-h-screen bg-no-repeat bg-cover bg-gray-100 flex items-center" style={containerStyle}>
        
        <div className="w-full h-[90%] xl:flex items-center">

          <div className="xl:w-6/12 xl:h-full xl:flex items-center xl:justify-center justify-center  ">
              <img src={imglogoBack} alt="" className="2xl:w-[60rem] xl:w-[40rem] w-[35rem] mt-5 2xl:mt-0" />
          </div>

          <div className="xl:w-6/12 xl:p-10 py-1 xl:py-16 flex flex-col xl:items-start items-center xl:justify-start  ">
            <Metric className='2xl:text-[4rem] xl:text-[3.5rem] text-center 2xl:text-start text-4xl 2xl:mb-0 mb-3'><Bold>Estadísticas y</Bold></Metric>
            <Metric className='2xl:text-[4rem] xl:text-[4rem] text-center 2xl:text-start text-4xl 2xl:leading-[5rem] leading-normal 2xl:mt-8'><Bold>Análisis de Datos</Bold></Metric>
            <Text className='pt-5 xl:pr-36 2xl:text-[1.1rem] xl:text-[0.8rem] md:text-start text-center 2xl:pl-0  xl:pl-0 pl-5 pr-5   text-gray-700 '> <span className='text-blue-950 font-bold'>OPEN DATA Analytics</span>, es un sistema diseñado para proporcionar acceso y visualización a una serie de dashboards de estudios Estadísticos Y Analíticos de los Datos Abiertos de la provincia de Cajamarca - Perú. Este sistema tiene como objetivo principal facilitar la comprensión y el análisis de la información recopilada, permitiendo a los usuarios explorar y utilizar los datos de manera efectiva.</Text>
            <div className="2xl:pt-5 xl:pt-5 p-7 2xl:p-0 xl:p-0 xl:text-left">
              <Link to={'/incio/Cards'} className="xl:block" >
                <Button className="w-52  border-0 hover:bg-red-500 hover:text-white rounded-2xl xl:px-20 2xl:py-5 xl:py-3 py-5 bg-slate-100 text-gray-600 shadow-xl" icon={FaArrowRight}>ACCEDER</Button>
              </Link>
            </div>
          </div>

        </div>
        
      </div>

    </>
  )
}

export default Inicio