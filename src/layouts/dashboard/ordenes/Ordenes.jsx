import { Card, Flex, Subtitle, Title} from "@tremor/react";
import { Divider, Metric } from "@tremor/react";
import { Grid, Col, Text } from "@tremor/react";
import { useFetch } from '../../../Api/useFetch';
import { FaBoxOpen, FaFile, FaFileInvoice, FaExclamationTriangle, FaCircle, FaChartArea, FaDotCircle, FaChartLine, FaTable, FaChartBar } from "react-icons/fa";
import '../../../components/preloader.css';
import {
    TabList,
    Tab,
    TabGroup,
    TabPanels,
    TabPanel,
} from "@tremor/react";
import Loading from "../../../components/Loading";
import { useEffect, useRef, useState } from "react";
import GrafAreaChartO from "./components/GrafAreaChartO";
import GrafAreaChartOAll from "./components/GrafAreaChartOAll";
import GrafLineChatO from "./components/GrafLineChatO";
import GrafLineChatOAll from "./components/GrafLineChatOAll";
import GrafDonutChartO from "./components/GrafDonutChartO";
import GrafBarChartO from "./components/GrafBarChartO";
import TableOrdenes from "./components/TableOrdenes";

const Ordenes = () => {
    const {
        data: ordersData,
        loading: ordersLoading,
        /*error: licensesError,
        handleCancelRequest: cancelLicensesRequest
        */
    } = useFetch("http://127.0.0.1:8000/api/orders");

    const getTotalRecaudado = () => {
        const total = ordersData.reduce((accumulador, orden) => {
            return accumulador + (parseFloat(orden.monto))
        }, 0);
        return total.toFixed(2);
    };
    const [sowAlert, setSowAlert] = useState(true);

    const tagRef = useRef(null);
    const texto = useRef(null);


    const mostrar = () => {
        if (sowAlert) {
            tagRef.current.style.display = "block";
            setSowAlert(!sowAlert)
            texto.current.innerHTML = 'Ocultar'
        } else {
            tagRef.current.style.display = "none";
            setSowAlert(true)
            texto.current.innerHTML = 'Mostrar'
        }
    }


    const [selectedTab, setSelectedTab] = useState(0);
    const [selectedTabv1, setSelectedTabv1] = useState(0)

    useEffect(() => {
        setSelectedTab(0);
        setSelectedTabv1(0)
    }, []);

    const handleTabSelect = (index) => {
        setSelectedTab(index);
    };
    const handleTabSelectv1 = (index) => {
        setSelectedTabv1(index);
    };

    const servicio = ordersData.filter((n) => n.tipo_orden === 'SERVICIO');


    return (
        <div className="w-full xl:h-auto bg-slate-50 pb-20">
            <div className="pt-[8rem] w-full xl:px-4 2xl:px-12 px-2">
                <div className="w-full xl:flex justify-between items-center">
                    <Metric className="md:text-start text-center">Dashboard de Ordenes de Compra y Servicios</Metric>
                    <div className="flex items-center justify-center">
                        <Title className="mr-2">Importante:</Title>
                        <br />
                        <br />
                        <br />
                        <div className="w-32 h-10 cursor-pointer  rounded-md bg-white shadow-lg border-2 flex justify-between px-3 items-center" onClick={mostrar}>
                            <div ref={texto} className="font-semibold text-gray-600">
                                Mostrar
                            </div>
                            <div>
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <Divider className=" md:border-slate-300 md:bg-slate-300 my-2 "></Divider>


                <div className=" z-[1000] w-full 2xl:h-14 2xl:mb-5 rounded-lg transition-all bg-red-100  mb-2 text-white" style={{ display: "none" }} ref={tagRef}>
                    <p className="w-[50%] m-auto pt-3 text-red-600 font-bold 2xl:pb-0 pb-4">Se recomienda:<span className="font-normal ml-2">Pasar el mouse por encima de los gráficos para una mejor interactividad.</span></p>
                </div>
                <Grid numItems={1} numItemsSm={2} numItemsLg={4} className="xl:gap-3 2xl:gap-8 gap-4">

                    <Card className="mx-auto shadow-xl" decoration="top" decorationColor="red">
                        <Flex>
                            <div className="w-6/12">
                                <FaFile className="text-[2rem] text-red-500"></FaFile>

                                <Title>Cantida total de Ordenes y Servicios </Title>
                                <Text>Años: 2019 - 2022</Text>
                            </div>
                            <div className="w-6/12 flex justify-center items-center">

                                <Metric> {ordersLoading ? <Loading></Loading> : ordersData.length} </Metric>

                            </div>
                        </Flex>
                    </Card>

                    <Card className="mx-auto shadow-xl" decoration="top" decorationColor="red">
                        <Flex>
                            <div className="w-6/12">
                                <FaBoxOpen className="text-[2rem] text-red-500"></FaBoxOpen>

                                <Title>Cantida total de dinero recaudado</Title>
                                <Text>Años: 2019 - 2022</Text>
                            </div>
                            <div className="w-6/12 flex justify-center items-center">
                                <Metric>{ordersLoading ? <Loading></Loading> : getTotalRecaudado()}</Metric>
                            </div>
                        </Flex>
                    </Card>

                    <Card className="mx-auto shadow-xl" decoration="top" decorationColor="red" >
                        <Flex>
                            <div className="w-6/12">
                                <FaFileInvoice className="text-[2rem] text-red-500"></FaFileInvoice>
                                <Title>Cantidad de Ordenes de Servicio</Title>
                                <Text>Años: 2019 - 2022</Text>
                            </div>
                            <div className="w-6/12 flex justify-center items-center">
                                <Metric>{ordersLoading ? <Loading></Loading> : servicio.length}</Metric>
                            </div>
                        </Flex>
                    </Card>

                    <Card className="mx-auto shadow-xl" decoration="top" decorationColor="red" >
                        <Flex>
                            <div className="w-6/12">
                                <FaExclamationTriangle className="text-[2rem] text-red-500"></FaExclamationTriangle>
                                <Title>Recaudacion</Title>
                                <Subtitle>Representacion en UIT&apos;s </Subtitle>
                                <Text>Años: 2019 - 2022</Text>
                            </div>
                            <div className="w-6/12 flex flex-col justify-center items-center ">
                                {ordersLoading ? <Loading></Loading> : <div className="flex flex-col justify-center items-center">
                                    <Metric> {(getTotalRecaudado() / 4950).toFixed(2)} </Metric> <Metric> UIT&apos;s</Metric> <Text>aprox</Text></div>}

                            </div>
                        </Flex>
                    </Card>


                    <Col numColSpan={1} numColSpanLg={2}>
                        <Card className="shadow-xl">

                            <Title className="flex justify-start items-center"><FaChartArea className="mr-2 text-red-400"></FaChartArea>Cantidad de Ordenes de Compra y Servicios por Año</Title>
                            <TabGroup>
                                <TabList className="">
                                    <Tab icon={FaCircle}
                                        className={` text-[1rem] block xl:flex hover:border-0 hover:text-blue-500 ${selectedTab === 0 ? " text-blue-500" : ""
                                            }`}
                                        onClick={() => handleTabSelect(0)}
                                    >2019</Tab>


                                    <Tab icon={FaCircle}
                                        className={` text-[1rem] block xl:flex hover:border-0 hover:text-violet-500  ${selectedTab === 1 ? " text-violet-500" : ""
                                            }`}
                                        onClick={() => handleTabSelect(1)}
                                    >2020</Tab>


                                    <Tab
                                        icon={FaCircle}
                                        className={` text-[1rem] block xl:flex hover:border-0   hover:text-amber-500 ${selectedTab === 2 ? " text-amber-500" : ""
                                            }`}
                                        onClick={() => handleTabSelect(2)}
                                    >2021</Tab>


                                    <Tab
                                        icon={FaCircle}
                                        className={` text-[1rem] block xl:flex hover:border-0   hover:text-green-500 ${selectedTab === 3 ? " text-green-500" : ""
                                            }`}
                                        onClick={() => handleTabSelect(3)}
                                    >2022</Tab>

                                    <Tab
                                        icon={FaCircle}
                                        className={` text-[1rem] block xl:flex hover:border-0   hover:text-red-500 ${selectedTab === 4 ? " text-red-500" : ""
                                            }`}
                                        onClick={() => handleTabSelect(4)}
                                    >Todos</Tab>

                                </TabList>
                                <TabPanels>
                                    <TabPanel>
                                        <div className="">
                                            <GrafAreaChartO anio={2019}></GrafAreaChartO>
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <div className="">
                                            <GrafAreaChartO anio={2020}></GrafAreaChartO>
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <div className="">
                                            <GrafAreaChartO anio={2021}></GrafAreaChartO>
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <div className="">
                                            <GrafAreaChartO anio={2022}></GrafAreaChartO>
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <div className="">                   
                                            <GrafAreaChartOAll></GrafAreaChartOAll>
                                        </div>
                                    </TabPanel>
                                </TabPanels>
                            </TabGroup>
                        </Card>
                    </Col>
                    <Col numColSpan={1} numColSpanLg={2}>
                        <Card className="shadow-xl">
                            <Title className="flex justify-start items-center"> <FaChartLine className="mr-2 text-red-400"></FaChartLine> Flujo de recaudacion por Año (%)</Title>
                            <TabGroup>
                                <TabList className="xl:overflow-hidden">
                                    <Tab icon={FaCircle}
                                        className={` text-[1rem] block xl:flex hover:border-0 hover:text-blue-500 ${selectedTabv1 === 0 ? " text-blue-500" : ""
                                            }`}
                                        onClick={() => handleTabSelect(0)}
                                    >2019</Tab>


                                    <Tab icon={FaCircle}
                                        className={` text-[1rem] block xl:flex hover:border-0 hover:text-violet-500  ${selectedTabv1 === 1 ? " text-violet-500" : ""
                                            }`}
                                        onClick={() => handleTabSelectv1(1)}
                                    >2020</Tab>


                                    <Tab
                                        icon={FaCircle}
                                        className={` text-[1rem] block xl:flex hover:border-0   hover:text-amber-500 ${selectedTabv1 === 2 ? " text-amber-500" : ""
                                            }`}
                                        onClick={() => handleTabSelectv1(2)}
                                    >2021</Tab>


                                    <Tab
                                        icon={FaCircle}
                                        className={` text-[1rem] block xl:flex hover:border-0   hover:text-green-500 ${selectedTabv1 === 3 ? " text-green-500" : ""
                                            }`}
                                        onClick={() => handleTabSelectv1(3)}
                                    >2022</Tab>

                                    <Tab
                                        icon={FaCircle}
                                        className={` text-[1rem] block xl:flex hover:border-0   hover:text-red-500 ${selectedTabv1 === 4 ? " text-red-500" : ""
                                            }`}
                                        onClick={() => handleTabSelectv1(4)}
                                    >Todos</Tab>

                                </TabList>
                                <TabPanels>
                                    <TabPanel>
                                        <div className="">
                                            <GrafLineChatO anio={2019}></GrafLineChatO>
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <div className="">

                                            <GrafLineChatO anio={2020}></GrafLineChatO>
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <div className="">

                                            <GrafLineChatO anio={2021}></GrafLineChatO>
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <div className="">

                                            <GrafLineChatO anio={2022}></GrafLineChatO>
                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                        <div className="">

                                            <GrafLineChatOAll anio={2022}></GrafLineChatOAll>
                                        </div>
                                    </TabPanel>
                                </TabPanels>
                            </TabGroup>
                        </Card>
                    </Col>
                    <Col numColSpan={1} numColSpanLg={3}>
                        <Card className="shadow-xl">
                            <Title className="flex justify-start items-center"> <FaChartBar className="mr-2 text-red-400"></FaChartBar>Fuente de Financiamiento </Title>

                            <GrafBarChartO></GrafBarChartO>

                        </Card>
                    </Col>

                    <Card className="shadow-xl">
                        <Text>Años 2019 - 2022</Text>
                        <Title className="flex justify-start items-center"> <FaDotCircle className="mr-2 text-red-400"></FaDotCircle>Tipo de Orden</Title>
                        <GrafDonutChartO></GrafDonutChartO>
                    </Card>





                    <Col numColSpan={1} numColSpanLg={4}>
                        <Card className="shadow-xl">
                            <Title className="flex justify-start items-center"> <FaTable className="mr-2 text-red-400"></FaTable>Tabla de datos</Title>
                            <TableOrdenes></TableOrdenes>
                        </Card>
                    </Col>


                </Grid>
            </div>
        </div>
    );
}

export default Ordenes;
