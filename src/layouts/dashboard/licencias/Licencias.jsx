import { Card, Flex, Subtitle, Title } from "@tremor/react";
import { Divider, Metric } from "@tremor/react"
import { Grid, Col, Text } from "@tremor/react";
import GrafAreaChart from "./Components/GrafAreaChart";
import GrafDonutChart from "./Components/GrafDonutChart";
import GrafDonutChartV2 from "./Components/GrafDonutChartV2";
import GrafLineChatAll from "./Components/GrafLineChatAll";

import GrafBarList from "./Components/GrafBarList";
import { useFetch } from '../../../Api/useFetch';
import { FaBoxOpen, FaFile, FaFileInvoice, FaExclamationTriangle, FaCircle, FaChartArea, FaDotCircle, FaAlignLeft, FaChartLine, FaTable, FaChartBar } from "react-icons/fa";
import GrafLineChat from "./Components/GrafLineChat";
import '../../../components/preloader.css'
import {
    TabList,
    Tab,
    TabGroup,
    TabPanels,
    TabPanel,
} from "@tremor/react";
import TableLicencias from "./Components/TableLicencias";
import GrafBarChart from "./Components/GrafBarChart";
import GrafAreaChartAll from "./Components/GrafAreaChartAll";
import Loading from "../../../components/Loading";
import { useRef, useState, useEffect } from "react";

function Licencias() {
    const {
        data: licensesData,
        loading: licensesLoading,
        /*error: licensesError,
        handleCancelRequest: cancelLicensesRequest
        */
    } = useFetch("http://127.0.0.1:8000/api/licenses");

    const getTotalRecaudado = () => {
        const total = licensesData.reduce((accumulador, licencia) => {
            return accumulador + parseFloat(licencia.monto_tramite)
        }, 0);
        return total.toFixed(2);
    };
    const c_indefinida = licensesData.filter((n) => n.tipo_licencia === 'INDEFINIDA');

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

    return (
        <div className="w-full xl:h-auto bg-slate-50 pb-20">
            <div className="pt-[8rem] w-full xl:px-4 2xl:px-12 px-2">
                <div className="w-full xl:flex justify-between items-center">
                    <Metric className="md:text-start text-center">Dashboard de Licencias de Funcionamiento</Metric>
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


                <div className=" z-[1000] w-full 2xl:h-14 2xl:mb-5 rounded-lg transition-all bg-red-100 mb-10 text-white" style={{ display: "none" }} ref={tagRef}>
                    <p className="w-[50%] m-auto pt-3 text-red-600 font-bold 2xl:pb-0 pb-4">Se recomienda:<span className="font-normal ml-2">Pasar el mouse por encima de los gráficos para una mejor interactividad.</span></p>
                </div>

                <Grid numItems={1} numItemsSm={2} numItemsLg={4} className="xl:gap-3 2xl:gap-8 gap-4">

                    <Card className="mx-auto shadow-xl" decoration="top" decorationColor="red">
                        <Flex>
                            <div className="w-6/12">
                                <FaFile className="text-[2rem] text-red-500"></FaFile>

                                <Title>Cantida total de licencias </Title>
                                <Text>Años: 2019 - 2022</Text>
                            </div>
                            <div className="w-6/12 flex justify-center items-center">

                                <Metric> {licensesLoading ? <Loading></Loading> : licensesData.length} </Metric>

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
                                <Metric>{licensesLoading ? <Loading></Loading> : getTotalRecaudado()}</Metric>
                            </div>
                        </Flex>
                    </Card>

                    <Card className="mx-auto shadow-xl" decoration="top" decorationColor="red" >
                        <Flex>
                            <div className="w-6/12">
                                <FaFileInvoice className="text-[2rem] text-red-500"></FaFileInvoice>
                                <Title>Cantidad de licencias Indefinidas</Title>
                                <Text>Años: 2019 - 2022</Text>
                            </div>
                            <div className="w-6/12 flex justify-center items-center">
                                <Metric>{licensesLoading ? <Loading></Loading> : c_indefinida.length} </Metric>
                            </div>
                        </Flex>
                    </Card>

                    <Card className="mx-auto shadow-xl" decoration="top" decorationColor="red" >
                        <Flex>
                            <div className="w-6/12">
                                <FaExclamationTriangle className="text-[2rem] text-red-500"></FaExclamationTriangle>
                                <Title>Recaudación</Title>
                                <Subtitle>Representación en UIT&apos;s </Subtitle>
                                <Text>Años: 2019 - 2022</Text>
                            </div>
                            <div className="w-6/12 flex flex-col justify-center items-center">
                                {licensesLoading ? <Loading></Loading> : <>
                                    <Metric> {(getTotalRecaudado() / 4950).toFixed(2)} UIT&apos;s </Metric><Text>aprox</Text></>}

                            </div>
                        </Flex>
                    </Card>


                    <Col numColSpan={1} numColSpanLg={2}>
                        <Card className="shadow-xl">

                            <Title className="flex justify-start items-center"><FaChartArea className="mr-2 text-red-400"></FaChartArea> Cantidad de Licencias por Año</Title>
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
                                        className={` text-[1rem] hover:border-0 block xl:flex  hover:text-green-500 ${selectedTab === 3 ? " text-green-500" : ""
                                            }`}
                                        onClick={() => handleTabSelect(3)}
                                    >2022</Tab>

                                    <Tab
                                        icon={FaCircle}
                                        className={` text-[1rem] hover:border-0 block xl:flex  hover:text-red-500 ${selectedTab === 4 ? " text-red-500" : ""
                                            }`}
                                        onClick={() => handleTabSelect(4)}
                                    >Todos</Tab>

                                </TabList>
                                <TabPanels>
                                    <TabPanel>
                                        <div className="">
                                            <GrafAreaChart anio={2019}></GrafAreaChart>
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <div className="">
                                            <GrafAreaChart anio={2020}></GrafAreaChart>
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <div className="">
                                            <GrafAreaChart anio={2021}></GrafAreaChart>
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <div className="">
                                            <GrafAreaChart anio={2022}></GrafAreaChart>
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <div className="">
                                            <GrafAreaChartAll></GrafAreaChartAll>
                                        </div>
                                    </TabPanel>
                                </TabPanels>
                            </TabGroup>
                        </Card>
                    </Col>


                    <Card className="shadow-xl">
                        <Text>Años 2019 - 2022</Text>
                        <Title className="flex justify-start items-center"> <FaDotCircle className="mr-2 text-red-400"></FaDotCircle>Estado de Licencia</Title>
                        <GrafDonutChartV2></GrafDonutChartV2>
                    </Card>

                    <Card className="shadow-xl">
                        <Text>Año 2019 - 2022</Text>
                        <Title className="flex justify-start items-center"><FaDotCircle className="mr-2 text-red-400"></FaDotCircle> Tipo de Licencia</Title>
                        <GrafDonutChart></GrafDonutChart>
                    </Card>

                    <Col numColSpan={1} numColSpanLg={1}>
                        <Card className="overflow-x-scroll md:overflow-auto shadow-xl">
                            <Title className="flex justify-start items-center"><FaAlignLeft className="mr-2 text-red-400"></FaAlignLeft> Licencias por Establecimiento</Title>
                            <GrafBarList></GrafBarList>
                        </Card>
                    </Col>




                    <Col numColSpan={1} numColSpanLg={2}>
                        <Card className="shadow-xl">
                            <Title className="flex justify-start items-center"> <FaChartLine className="mr-2 text-red-400"></FaChartLine> Flujo de Recaudación por Año (%)</Title>
                            <TabGroup>
                                <TabList className="">
                                    <Tab icon={FaCircle}
                                        className={` text-[1rem] block xl:flex hover:border-0 hover:text-blue-500 ${selectedTabv1 === 0 ? " text-blue-500" : ""
                                            }`}
                                        onClick={() => handleTabSelectv1(0)}
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
                                            <GrafLineChat anio={2019}></GrafLineChat>
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <div className="">

                                            <GrafLineChat anio={2020}></GrafLineChat>
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <div className="">

                                            <GrafLineChat anio={2021}></GrafLineChat>
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <div className="">

                                            <GrafLineChat anio={2022}></GrafLineChat>
                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                        <div className="">

                                            <GrafLineChatAll anio={2022}></GrafLineChatAll>
                                        </div>
                                    </TabPanel>
                                </TabPanels>
                            </TabGroup>
                        </Card>
                    </Col>

                    <Card className="shadow-xl">
                        <Text>Año 2019 - 2022</Text>
                        <Title className="flex justify-start items-center"><FaChartBar className="mr-2 text-red-400"></FaChartBar> Nivel de Riesgo</Title>
                        <GrafBarChart></GrafBarChart>
                    </Card>

                    <Col numColSpan={1} numColSpanLg={4}>
                        <Card className="shadow-xl">
                            <Title className="flex justify-start items-center"> <FaTable className="mr-2 text-red-400"></FaTable>Tabla de Datos</Title>
                            <TableLicencias></TableLicencias>
                        </Card>
                    </Col>


                </Grid>
            </div>
        </div>
    )
}

export default Licencias