import { Card, Metric, Text, Divider, Button } from "@tremor/react";
import { Link } from 'react-router-dom';
import { FaBuffer, FaExternalLinkAlt, FaMoneyBill, FaArrowRight } from 'react-icons/fa';

import img01 from '../../../img/licencias.png'
import img02 from '../../../img/oficialTrafico.png'
import img03 from '../../../img/ordencompra.png'


import { useFetch } from '../../../Api/useFetch';

const CardsInicio = () => {

    const {
        data: licensesData,
        /*loading: licensesLoading,
        error: licensesError,
        handleCancelRequest: cancelLicensesRequest
        */
    } = useFetch("http://127.0.0.1:8000/api/licenses");


    const longitudRegistrosLicensias = parseInt(licensesData.length);

    const getTotalRecaudado = () => {
        const total = licensesData.reduce((accumulador, licencia) => {
            return accumulador + parseFloat(licencia.monto_tramite)
        }, 0);
        return total.toFixed(2);
    };



    const CardsV = [
        {
            id: 1,
            title: "Licencias de funcionamiento",
            descripcion: "Las licencias de funcionamiento son la autorización que brinda la MPC a los establecimientos para que puedan funcionar de manera legal. Para obtenerla se realiza un trámite, en el cual se registran los datos de RUC, Razón Social, Local, Dirección, Giro, etc, y paga por el respectivo tramite",
            years: "2019 - 2022",
            img: img01,
            link: 'https://www.datosabiertos.gob.pe/dataset/licencias-de-funcionamiento-del-distrito-de-cajamarca-municipalidad-provincial-de-cajamarca',
            cantidad: longitudRegistrosLicensias,
            link_iterno: '/licencias',
            all_money: getTotalRecaudado(),
        },
        {
            id: 2,
            title: "Infracciones de Tránsito",
            descripcion: "El proceso de intervención para determinar una infracción depende de si el vehículo es usado para transporte público o privado. Las infracciones para transporte publico son mayormente por estacionarse en zona rígida, no contar con Tarjeta Única de Circulación, entre otras.",
            years: "2019 - 2022",
            img: img02,
            link: 'https://www.datosabiertos.gob.pe/dataset/licencias-de-funcionamiento-del-distrito-de-cajamarca-municipalidad-provincial-de-cajamarca',
            cantidad: longitudRegistrosLicensias,
            link_iterno: '/licencias',
            all_money: getTotalRecaudado(),
        },
        {
            id: 3,
            title: "Ordenes de Compra y Servicios",
            descripcion: " Las órdenes de compra y servicio con compromisos establecidos entre la MPC  con proveedores, en el que, en caso de una orden de compra se establece la entrega de un bien a la Municipalidad, y en caso de una orden de servicio el proveedor brindará un servicio a la Municipalidad.",
            years: "2019 - 2022",
            img: img03,
            link: 'https://www.datosabiertos.gob.pe/dataset/licencias-de-funcionamiento-del-distrito-de-cajamarca-municipalidad-provincial-de-cajamarca',
            cantidad: longitudRegistrosLicensias,
            link_iterno: '/licencias',
            all_money: getTotalRecaudado(),
        },
    ]


    const cards = CardsV.map((e) => (
        <div key={e.id} className='p-1 w-full'>
            <Card className="w-full p-3 mb-4 flex items-center shadow-xl bg-gray-50" decoration="top" decorationColor="indigo">
                <div className="w-full">
                    <div className="flex items-center">
                        <Link to={''} className="w-10/12">
                            <Metric className=' hover:text-blue-500 2xl:text-[1.5rem] xl:text-[1rem]'>{e.title} <span className="inline-block">{/*<FaInfo className='text-gray-300'></FaInfo>*/}</span></Metric>
                            <Text>Año: <span className="text-red-500 ">{e.years}</span></Text>
                        </Link>
                        <div className="flex justify-end w-2/12">
                            <img src={e.img} alt="" className="w-[3rem]" />
                        </div>
                    </div>
                    <Divider className="2xl:block xl:hidden"></Divider>
                    <Text className=" text-justify leading-relaxed 2xl:text-[1rem] xl:text-[0.6rem]">
                        {e.descripcion}
                        <span className="inline-block ml-2">
                            <Link to={e.link}>
                                <FaExternalLinkAlt />
                            </Link>
                        </span>
                    </Text>
                    <div className="xl:flex">
                        <div className="xl:w-8/12">
                            <Text className="flex items-center px-4 mt-3 2xl:text-[0.9rem] xl:text-[0.65rem] text-gray-600">
                                <FaBuffer className="mr-2 "></FaBuffer>
                                N° {e.title}: <span className="text-blue-500">{e.cantidad}</span>
                            </Text>
                            <Text className="flex items-center px-4 mt-2 2xl:text-[0.9rem] xl:text-[0.65rem] text-gray-600">
                                <FaMoneyBill className="mr-2"></FaMoneyBill>
                                Monto recaudado (S/): <span className="text-blue-500"> {getTotalRecaudado()}
                                </span>
                            </Text>
                        </div>
                        <div className="2xl:w-4/12 md:py-0 py-5 flex items-center justify-center">
                            <Link to={'/licencias'}>
                                <Button className="w-full flex justify-between" size="xs" icon={FaArrowRight}>Ir a Dashboard </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Card>
        </div>

    ));

    return (
        <>
            <div className='xl:flex gap-2 w-full 2xl:p-20 p-1'>
                {cards}
            </div>
        </>


    );
}

export default CardsInicio;
