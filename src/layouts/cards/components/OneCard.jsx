import { Bold, Button, Card, Divider, Text, Title } from "@tremor/react";
import img01Licencias from '../img/img01licencias.png'
import img02Licencias from '../img/img02licencias.png'
import img03Licencias from '../img/img03licencias.png'
import img04Licencias from '../img/img04licencias.png'

import img01Trancito from '../img/img01transito.png'
import img02Trancito from '../img/img02transito.png'
import img03Trancito from '../img/img03transito.png'
import img04Trancito from '../img/img04transito.png'

import img01Compras from '../img/img01compras.png'
import img02Compras from '../img/img02compras.png'
import img03Compras from '../img/img03compras.png'
import img04Compras from '../img/img04compras.png'


import licencias from '../img/licencias.png'
import transito from '../img/oficialTrafico.png'
import ordenesCompra from '../img/ordencompra.png'
import { FaArrowRight } from 'react-icons/fa';

import { FaInfoCircle } from "react-icons/fa";
import { useFetch } from '../../../Api/useFetch';
import { NavLink } from "react-router-dom";
import Loading from '../../../components/Loading';

const shadowTarjetaStyle = {
    boxShadow: "0px 0px 60px 1px rgba(0,0,0,0.1)"
};


const OneCard = () => {
    const {
        data: licensesData,
        loading: licensesLoading,
        /*error: licensesError,
        handleCancelRequest: cancelLicensesRequest
        */
    } = useFetch("https://api.open-data-analytics.info/api/licenses");

    const {
        data: infractionsData,
        loading: infractionsLoading,
        /*error: licensesError,
        handleCancelRequest: cancelLicensesRequest
        */
    } = useFetch("https://api.open-data-analytics.info/api/infractions");

    const {
        data: ordersData,
        loading: ordersLoading,
        /*error: licensesError,
        handleCancelRequest: cancelLicensesRequest
        */
    } = useFetch("https://api.open-data-analytics.info/api/orders");

    const longitudRegistrosLicensias = parseInt(licensesData.length);

    const getTotalRecaudado = () => {
        const total = licensesData.reduce((accumulador, licencia) => {
            return accumulador + parseFloat(licencia.monto_tramite)
        }, 0);
        return total.toFixed(2);
    };
    const getTotalRecaudadov1 = () => {
        const total = infractionsData.reduce((accumulador, infraccion) => {
            return accumulador + parseFloat(infraccion.monto_infraccion)
        }, 0);
        return total.toFixed(2);
    };

    const getTotalRecaudadov2 = () => {
        const total = ordersData.reduce((accumulador, orden) => {
            return accumulador + parseFloat(orden.monto)
        }, 0);
        return total.toFixed(2);
    };

    const CardsV = [
        {
            id: 1,
            title: "Licencias de Funcionamiento",
            descripcion: "Las licencias de funcionamiento son la autorización que brinda la MPC a los establecimientos para que puedan funcionar de manera legal. Para obtenerla se realiza un trámite, en el cual se registran los datos de RUC, Razón Social, Local, Dirección, Giro, etc, y paga por el respectivo tramite",
            years: "2019",
            img: {
                imgIicon: licencias,
                img01: img01Licencias,
                img02: img02Licencias,
                img03: img03Licencias,
                img04: img04Licencias,
            },
            link: 'https://www.datosabiertos.gob.pe/dataset/licencias-de-funcionamiento-del-distrito-de-cajamarca-municipalidad--de-cajamarca',
            cantidad: longitudRegistrosLicensias,
            link_iterno: '/licencias',
            all_money: getTotalRecaudado(),
        },
        {
            id: 2,
            title: "Infracciones de Tránsito",
            descripcion: "El proceso de intervención para determinar una infracción depende de si el vehículo es usado para transporte público o privado. Las infracciones para transporte publico son mayormente por estacionarse en zona rígida, no contar con Tarjeta Única de Circulación, entre otras.",
            years: "2019 - 2022",
            img: {
                imgIicon: transito,
                img01: img01Trancito,
                img02: img02Trancito,
                img03: img03Trancito,
                img04: img04Trancito,
            },
            link: 'https://www.datosabiertos.gob.pe/dataset/licencias-de-funcionamiento-del-distrito-de-cajamarca-municipalidad-provincial-de-cajamarca',
            cantidad: infractionsData.length,
            link_iterno: '/infracciones',
            all_money: getTotalRecaudadov1(),
        },
        {
            id: 3,
            title: "Órdenes de Compra y Servicios",
            descripcion: " Las órdenes de compra y servicio con compromisos establecidos entre la MPC  con proveedores, en el que, en caso de una orden de compra se establece la entrega de un bien a la Municipalidad, y en caso de una orden de servicio el proveedor brindará un servicio a la Municipalidad.",
            years: "2019 - 2022",
            img: {
                imgIicon: ordenesCompra,
                img01: img01Compras,
                img02: img02Compras,
                img03: img03Compras,
                img04: img04Compras,
            },
            link: 'https://www.datosabiertos.gob.pe/dataset/licencias-de-funcionamiento-del-distrito-de-cajamarca-municipalidad-provincial-de-cajamarca',
            cantidad: ordersData.length,
            link_iterno: '/ordenes',
            all_money: getTotalRecaudadov2(),
        },
    ]

    const inicio = () =>{
         window.scrollTo(0, 0);
    }

    const CardsData = CardsV.map((e) => (
        <div key={e.id}>
            <Card className="2xl:w-[92%] xl:w-[92%] 2xl:h-auto  mx-auto xl:p-3 2xl:mb-3 mb-6 transition-all" style={shadowTarjetaStyle}>
                <div className="w-full h-[60%]  flex">
                    <div className=" w-8/12 p-1">
                        <div className="w-full h-full bg-white rounded-lg flex overflow-hidden ">
                            <img src={e.img.img01} alt="" className="" />
                        </div>
                    </div>
                    <div className="w-4/12 p-1 flex flex-col justify-between">
                        <div className="h-[32%] bg-slate-300 rounded-lg flex items-center overflow-hidden">
                            <img src={e.img.img02} alt="" />
                        </div>
                        <div className="h-[32%] bg-slate-300 rounded-lg flex items-center overflow-hidden">
                            <img src={e.img.img03} alt="" />
                        </div>
                        <div className="h-[32%] bg-slate-300 rounded-lg flex items-center overflow-hidden">
                            <img src={e.img.img04} alt="" />
                        </div>
                    </div>
                </div>
                
                <div className="w-full h-[40%] pt-2">
                    <div className="w-full flex h-[25%]">
                        <div className="w-10/12 h-full">
                            <div className="w-full h-full flex items-center">
                                <div>
                                    <img src={e.img.imgIicon} alt="" className="2xl:w-[3rem] xl:w-[2rem] w-10" />
                                </div>
                                <div className="ml-3">
                                    <Text>Año {e.years}</Text>
                                    <Title className="2xl:text-[1.2rem] xl:text-[0.8rem]">{e.title}</Title>
                                </div>
                            </div>
                        </div>
                        <div className="w-2/12 h-full flex justify-center items-end">
                            <FaInfoCircle className="text-gray-200 text-[2rem]" ></FaInfoCircle>
                        </div>
                    </div>
                    <Divider className="w-[90%] 2xl:block xl:hidden"></Divider>
                    <Text className="xl:text-[0.6rem] 2xl:text-[0.9rem] 2xl:mt-0 xl:mt-2 text-justify xl:leading-4 2xl:leading-normal">
                        {e.descripcion}
                    </Text>

                    <div className="flex 2xl:mt-5 xl:mt-1 px-2 mt-5 2xl:mb-3">
                        <div className="w-7/12">
                            <Text className="2xl:text-[0.8rem] xl:text-[0.6rem]"><Bold>{e.cantidad}</Bold> Total de {e.title}</Text>
                            <Text className="2xl:text-[0.8rem] xl:text-[0.6rem]">(S/.) <Bold>{e.all_money}</Bold></Text>
                        </div>
                        <div className="w-5/12 flex items-center justify-end">
                            <NavLink to={e.link_iterno} onClick={()=> inicio}>
                            <Button className="xl:p-1 xl:px-4 2xl:p-2 2xl:px-3 bg-[#31c7fe] border-[#31c7fe] hover:bg-red-500 hover:border-red-500" icon={FaArrowRight} color="">Ir Dashboard</Button>
                            </NavLink>
                            
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    ))

    if (licensesLoading && infractionsLoading && ordersLoading) {
        return (
            <div className="flex justify-center items-center 2xl:h-[43rem] xl:h-[30rem]">
                <Loading></Loading>
            </div>
        );
    }

    return (
        <>
            <div className="w-full xl:flex justify-center items-center">
                {CardsData}
            </div>


        </>
    );
}

export default OneCard;
