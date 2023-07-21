import { Card, Metric, Text, Title, Bold, Divider, Button } from "@tremor/react";
import { Link } from 'react-router-dom';
import { FaBuffer, FaInfo, FaExternalLinkAlt, FaMoneyBill, FaArrowRight } from 'react-icons/fa';
import img01 from '../../../img/oficialTrafico.png'
import img02 from '../../../img/licencias.png'
import img03 from '../../../img/ordencompra.png'
import { useEffect, useState } from "react";
import axios from "axios";

const endpoint = 'http://127.0.0.1:8000/api/licenses';

function Cards() {
    const [licencias, setLicencias] = useState([]);

    useEffect(() => {
        getAllLicencias();
    }, []);

    const getAllLicencias = async () => {
        try {
            const response = await axios.get(endpoint)
            setLicencias(response.data);
        } catch (error) {
            console.log(error);
        }
    }


    const getTotalRecaudado = () => {
        const total = licencias.reduce((accumulador, licencia) => {
            return accumulador + parseFloat(licencia.monto_tramite)
        }, 0);
        return total.toFixed(2);
    };
    return (
        <div className="mt-[8rem] w-full md:h-[41em] h-auto">
            <div className="md:flex w-full m-auto md:items-center md:static md:justify-between px-3" >

                <Card className="md:w-[30%] mx-auto p-3 mb-4 flex items-center shadow-xl" decoration="top" decorationColor="indigo">
                    <div className="w-full">
                        <div className="flex items-center">
                            <Link to={''} className="w-10/12">
                                <Metric className=' hover:text-blue-500'>Licencias de funcionamiento <span className="inline-block"><FaInfo className=' text-[1rem] text-gray-300'></FaInfo></span></Metric>
                                <Text>Año: <span className="text-red-500 ">2019 - 2022</span></Text>
                            </Link>
                            <div className="flex justify-end w-2/12">
                                <img src={img02} alt="" className="w-[4rem]" />
                            </div>
                        </div>
                        <Divider></Divider>
                        <Text className=" text-justify text-[1.2rem]  md:text-[1rem] leading-relaxed ">
                            Las licencias de funcionamiento son la autorización que brinda la <Bold>Municipalidad de Cajamarca</Bold>  a los establecimientos para que puedan funcionar de manera legal. Para obtener una licencia de funcionamiento de un establecimiento, el interesado realiza un trámite en el cual se registran los datos de <span className="text-red-500">RUC, Razón Social, Local, Dirección, Giro, etc.</span>, y paga por el respectivo trámite. Como resultado, la <Bold>Municipalidad</Bold> genera una Licencia de Funcionamiento con codificación única.
                            <span className="inline-block ml-2">
                                <Link to={'https://www.datosabiertos.gob.pe/dataset/licencias-de-funcionamiento-del-distrito-de-cajamarca-municipalidad-provincial-de-cajamarca'}>
                                    <FaExternalLinkAlt />
                                </Link>
                            </span>
                        </Text>
                        <div className="md:flex py-6">
                            <div className="md:w-8/12">
                                <Title className="flex items-center px-4 mt-3 text-gray-600 text-[0.9rem]">
                                    <FaBuffer className="mr-2 text-[1.4rem]"></FaBuffer>
                                    <div>
                                        Cantidad de licencias: <span className="text-blue-500">{licencias.length}</span>
                                    </div>
                                </Title>
                                <Title className="flex items-center px-4 mt-2 text-gray-600 text-[0.9rem]">
                                    <FaMoneyBill className="mr-2 text-[1.4rem]"></FaMoneyBill>
                                    <div>
                                        Monto recaudado (S/): <span className="text-blue-500"> {getTotalRecaudado()}
                                        </span>
                                    </div>
                                </Title>
                            </div>
                            <div className="md:w-4/12 md:py-0 py-5 flex items-center justify-center">
                                <Link to={'/licencias'}>
                                <Button className="w-full flex justify-between" size="xl" icon={FaArrowRight}>Ir a Dashboard </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Card>

                <Card className="md:w-[30%] mx-auto p-3 mb-4 flex items-center shadow-xl" decoration="top" decorationColor="indigo">
                    <div className="w-full">
                        <div className="flex items-center">
                            <Link to={''} className="w-10/12">
                                <Metric className=' hover:text-blue-500'>Infracciones de Tránsito<span className="inline-block"><FaInfo className=' text-[1rem] text-gray-300'></FaInfo></span></Metric>
                                <Text>Año: <span className="text-red-500 ">2022</span></Text>
                            </Link>
                            <div className="flex justify-end w-2/12">
                                <img src={img01} alt="" className="w-[4rem]" />
                            </div>
                        </div>
                        <Divider></Divider>
                        <Text className=" text-justify text-[1.2rem]  md:text-[1rem] leading-relaxed ">
                            Se tiene las infracciones de tránsito registrados en el distrito de <Bold>Cajamarca</Bold>, impuestos por los inspectores de la <Bold>MPC</Bold>.
                            El proceso de intervención para determinar una infracción depende de si el vehículo es usado para transporte <Bold> público o privado</Bold>. Las infracciones para transporte publico son mayormente por <span className="text-red-500">estacionarse en zona rígida, no contar con Tarjeta Única de Circulación, no tener Licencia de Conducir</span> , entre otras.
                            <span className="inline-block ml-2">
                                <Link to={'https://www.datosabiertos.gob.pe/dataset/licencias-de-funcionamiento-del-distrito-de-cajamarca-municipalidad-provincial-de-cajamarca'}>
                                    <FaExternalLinkAlt />
                                </Link>
                            </span>
                        </Text>
                        <div className="md:flex py-6">
                            <div className="md:w-8/12">
                                <Title className="flex items-center px-4 mt-3 text-gray-600 text-[0.9rem]">
                                    <FaBuffer className="mr-2 text-[1.4rem]"></FaBuffer>
                                    <div>
                                        Cantidad de infracciones de tránsito: <span className="text-blue-500">{licencias.length}</span>
                                    </div>
                                </Title>
                                <Title className="flex items-center px-4 mt-2 text-gray-600 text-[0.9rem]">
                                    <FaMoneyBill className="mr-2 text-[1.4rem]"></FaMoneyBill>
                                    <div>
                                        Monto recaudado (S/): <span className="text-blue-500"> {getTotalRecaudado()}
                                        </span>
                                    </div>
                                </Title>
                            </div>
                            <div className="md:w-4/12 md:py-0 py-5 flex items-center justify-center">
                                <Button className="w-full flex justify-between" size="xl" icon={FaArrowRight}>Ir a Dashboard</Button>
                            </div>
                        </div>
                    </div>
                </Card>


                <Card className="md:w-[30%] mx-auto p-3 mb-4 flex items-center shadow-xl" decoration="top" decorationColor="indigo">
                    <div className="w-full">
                        <div className="flex items-center">
                            <Link to={''} className="w-10/12">
                                <Metric className=' hover:text-blue-500'>Ordenes de Compra y Servicios<span className="inline-block"><FaInfo className=' text-[1rem] text-gray-300'></FaInfo></span></Metric>
                                <Text>Año: <span className="text-red-500 ">2019 - 2022</span></Text>
                            </Link>
                            <div className="flex justify-end w-2/12">
                                <img src={img03} alt="" className="w-[4rem]" />
                            </div>
                        </div>
                        <Divider></Divider>
                        <Text className=" text-justify text-[1.2rem]  md:text-[1rem] leading-relaxed ">
                            Las órdenes de compra y servicio con compromisos establecidos entre la <Bold>MPC</Bold>  con proveedores, en el que, en caso de una orden de compra se establece la entrega de un bien a la Municipalidad, y en caso de una orden de servicio el <span className="text-red-500">proveedor</span> brindará un servicio a la Municipalidad, en el presente dataset se publica todos los compromisos establecidos por al Municipalidad en el periodo indicado. Cada registro representa una orden
                            <span className="inline-block ml-2">
                                <Link to={'https://www.datosabiertos.gob.pe/dataset/licencias-de-funcionamiento-del-distrito-de-cajamarca-municipalidad-provincial-de-cajamarca'}>
                                    <FaExternalLinkAlt />
                                </Link>
                            </span>
                        </Text>
                        <div className="md:flex py-6">
                            <div className="md:w-8/12">
                                <Title className="flex items-center px-4 mt-3 text-gray-600 text-[0.9rem]">
                                    <FaBuffer className="mr-2 text-[1.4rem]"></FaBuffer>
                                    <div>
                                        Ordenes de compra y servicios: <span className="text-blue-500">{licencias.length}</span>
                                    </div>
                                </Title>
                                <Title className="flex items-center px-4 mt-2 text-gray-600 text-[0.9rem]">
                                    <FaMoneyBill className="mr-2 text-[1.4rem]"></FaMoneyBill>
                                    <div>
                                        Monto recaudado (S/): <span className="text-blue-500"> {getTotalRecaudado()}
                                        </span>
                                    </div>
                                </Title>
                            </div>
                            <div className="md:w-4/12 md:py-0 py-5 flex items-center justify-center">
                                <Button className="w-full flex justify-between" size="xl" icon={FaArrowRight}>Ir a Dashboard</Button>
                            </div>
                        </div>
                    </div>
                </Card>




            </div>
        </div>
    )
}

export default Cards