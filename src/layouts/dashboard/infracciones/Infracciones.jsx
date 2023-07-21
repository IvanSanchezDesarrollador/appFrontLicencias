import { Card, Flex, Subtitle, Title, BadgeDelta, Bold } from "@tremor/react";
import { Divider, Metric } from "@tremor/react";
import { Grid, Col, Text } from "@tremor/react";
import { useFetch } from '../../../Api/useFetch';
import { FaBoxOpen, FaFile, FaFileInvoice, FaExclamationTriangle, FaCircle, FaChartArea, FaDotCircle, FaAlignLeft, FaChartLine, FaTable, FaChartBar } from "react-icons/fa";
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
import GrafAreaChartI from "./components/GrafAreaChartI";
import GrafAreaChartIV2 from "./components/GrafAreaChartIV2";
import GrafLineChartI from "./components/GrafLineChartI";
import GrafLineChartIV2 from "./components/GrafLineChartIV2";
import GrafBarChartI from "./components/GrafBarChartI";
import GrafDonutChartIV2 from "./components/GrafDonutChartIV2";
import GrafDonutChartIV3 from "./components/GrafDonutChartIV3";
import GrafDonutChartIV4 from "./components/GrafDonutChartIV4";
import GrafDonutChartIV5 from "./components/GrafDonutChartIV5";
import GrafDonutChartIV6 from "./components/GrafDonutChartIV6";
import GrafDonutChartIV7 from "./components/GrafDonutChartIV7";

import GrafBarListI from "./components/GrafBarListI";
import GrafBarChartIv2 from "./components/GrafBarChartIv2";
import GrafBarChartIv3 from "./components/GrafBarChartIv3";
import GrafBarChartIv4 from "./components/GrafBarChartIv4";

import TableInfracciones from "./components/TableInfracciones";

const Infracciones = () => {
    const {
        data: infractionsData,
        loading: infractionsLoading,
        /*error: licensesError,
        handleCancelRequest: cancelLicensesRequest
        */
    } = useFetch("http://127.0.0.1:8000/api/infractions");


    const getTotalRecaudado = () => {
        const total = infractionsData.reduce((accumulador, infraccion) => {
            return accumulador + (parseFloat(infraccion.monto_infraccion))
        }, 0);
        return total.toFixed(2);
    };

    const getTotalRecaudadov2 = () => {
        const total = infractionsData.reduce((accumulador, infraccion) => {
            const multa = parseFloat(infraccion.multa_internamineto);
            return accumulador + (isNaN(multa) ? 0 : multa);
        }, 0);
        return total.toFixed(2);
    };
    const calcularTotalRecaudadoPorRangoFechas = (infractionsData, fechaInicio, fechaFin) => {
        const infraccionesEnRango = infractionsData.filter(
            (infraccion) =>
                infraccion.fecha_infraccion >= fechaInicio && infraccion.fecha_infraccion <= fechaFin
        );

        const totalRecaudado = infraccionesEnRango.reduce(
            (acumulador, { monto_infraccion }) => acumulador + parseFloat(monto_infraccion ?? 0),
            0
        );
        return totalRecaudado.toFixed(2);
    };

    const totalRecaudadoGeneralporAño = calcularTotalRecaudadoPorRangoFechas(
        infractionsData,
        `2022-01-01`,
        `2022-12-31`
    );

    const cate13 = infractionsData.filter(({ conductor_categoria_licencia }) => (conductor_categoria_licencia?.includes('B - II c') ?? false));


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

    const [selectTab, setSelectTab] = useState(0);
    const [selectTabv1, setSelectTabv1] = useState(0);
    const [selectTabv2, setSelectTabv2] = useState(0);
    const [selectTabv3, setSelectTabv3] = useState(0);


    useEffect(() => {
        setSelectTab(0)
        setSelectTabv1(0)
        setSelectTabv2(0)
        setSelectTabv3(0)
    }, []);

    const actualSelect = (index) => {
        setSelectTab(index)
    }

    const actualSelectbv1 = (index) => {
        setSelectTabv1(index)
    }

    const actualSelectbv2 = (index) => {
        setSelectTabv2(index)
    }

    const actualSelectbv3 = (index) => {
        setSelectTabv3(index)
    }

    return (
        <div className="w-full xl:h-auto bg-slate-50 pb-20">
            <div className="pt-[8rem] w-full xl:px-4 2xl:px-12 px-2">
                <div className="w-full xl:flex justify-between items-center">
                    <Metric className="md:text-start text-center">Dashboard de Infracciones de Tránsito</Metric>
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

                                <Title>Cantida total de Infracciones </Title>
                                <Text>Año 2022</Text>
                            </div>
                            <div className="w-6/12 flex justify-center items-center">

                                <Metric> {infractionsLoading ? <Loading></Loading> : infractionsData.length} </Metric>

                            </div>
                        </Flex>
                    </Card>

                    <Card className="mx-auto shadow-xl" decoration="top" decorationColor="red">
                        <Flex>
                            <div className="w-6/12">
                                <FaBoxOpen className="text-[2rem] text-red-500"></FaBoxOpen>

                                <Title>Total recaudado </Title>
                                <Subtitle className="text-[0.8rem]">Multa por: Infracción y internamiento </Subtitle>
                                <Text>Año 2022</Text>
                            </div>
                            <div className="w-6/12 flex justify-center items-center">
                                <Metric>{infractionsLoading ? <Loading></Loading> : parseFloat(getTotalRecaudado()) + parseFloat(getTotalRecaudadov2())}</Metric>
                            </div>
                        </Flex>
                    </Card>

                    <Card className="mx-auto shadow-xl" decoration="top" decorationColor="red" >
                        <Flex>
                            <div className="w-6/12">
                                <FaFileInvoice className="text-[2rem] text-red-500"></FaFileInvoice>
                                <Title>Categoria de Licencia B - II c  </Title>
                                <Text>Años 2022</Text>
                            </div>
                            <div className="w-6/12 flex flex-col justify-center items-center">
                                {infractionsLoading ? <Loading></Loading> : <>
                                    <Metric className="mt-6"> {cate13.length} </Metric><Text>Infracciones</Text></>}

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
                            <div className="w-6/12 flex flex-col justify-center items-center">
                                {infractionsLoading ? <Loading></Loading> : <>
                                    <Metric className="mt-6"> {((parseFloat(getTotalRecaudado()) + parseFloat(getTotalRecaudadov2())) / 4950).toFixed(2)} UIT&apos;s </Metric><Text>aprox</Text></>}

                            </div>
                        </Flex>
                    </Card>


                    <Col numColSpan={1} numColSpanLg={2}>
                        <Card className="shadow-xl">

                            <Title className="flex justify-start items-center"><FaChartArea className="mr-2 text-red-400"></FaChartArea> Cantidad de Infracciones de Transito por Año</Title>
                            <TabGroup>
                                <TabList className="xl:overflow-hidden overflow-y-auto overflow-x-auto">
                                    <Tab icon={FaCircle} className={`block xl:flex hover:text-green-500 border-none ${selectTab === 0 ? "text-green-500" : ""}`}
                                        onClick={() => actualSelect(0)}>
                                        2022
                                    </Tab>
                                </TabList>
                                <TabPanels>
                                    <TabPanel>
                                        <div className="">
                                            <GrafAreaChartI anio={2022}></GrafAreaChartI>
                                        </div>
                                    </TabPanel>
                                </TabPanels>
                            </TabGroup>
                        </Card>
                    </Col>

                    <Col numColSpan={1} numColSpanLg={2}>
                        <Card className="shadow-xl">

                            <Title className="flex justify-start items-center"><FaChartLine className="mr-2 text-red-400"></FaChartLine> Flujo de Recaudación por Año (%)</Title>
                            <TabGroup>
                                <TabList className="">
                                    <Tab icon={FaCircle} className={` block xl:flex hover:text-blue-500 ${selectTabv1 === 0 ? "text-blue-500" : ""}  border-none`}
                                        onClick={() => actualSelectbv1(0)}>
                                        Multa por Infracción
                                    </Tab>

                                    <Tab icon={FaCircle} className={`block xl:flex hover:text-purple-800 border-none ${selectTabv1 === 1 ? "text-purple-800" : ""}`}
                                        onClick={() => actualSelectbv1(1)}>Multa por Internamineto</Tab>

                                </TabList>
                                <TabPanels>

                                    <TabPanel>
                                        <div className="">

                                            <GrafLineChartI dato={{ anio: 2022 }}></GrafLineChartI>
                                        </div>
                                    </TabPanel>


                                    <TabPanel>
                                        <div className="">
                                            <GrafLineChartIV2 anio={'2022'} tipo={'multa_internamineto'}></GrafLineChartIV2>

                                        </div>
                                    </TabPanel>
                                </TabPanels>
                            </TabGroup>
                        </Card>
                    </Col>
                    <Col numColSpan={1} numColSpanLg={3}>
                        <Card className="shadow-xl">

                            <Title className="flex justify-start items-center"><FaChartBar className="mr-2 text-red-400"></FaChartBar>Eventualidades Comunes de Infracciones de Transito</Title>
                            <TabGroup>
                                <TabList className="">
                                    <Tab icon={FaCircle} className={`block xl:flex hover:text-blue-500  border-none ${selectTabv2 === 0 ? "text-blue-500" : ""}`} onClick={() => actualSelectbv2(0)}>
                                        Lugares mas comunes
                                    </Tab>
                                    <Tab icon={FaCircle} className={`block xl:flex hover:text-amber-500  border-none ${selectTabv2 === 1 ? "text-amber-500 " : ""} `} onClick={() => actualSelectbv2(1)}>
                                        Infracciones mas comunes
                                    </Tab>
                                </TabList>
                                <TabPanels>
                                    <TabPanel>
                                        <div className="">

                                            <GrafBarChartI></GrafBarChartI>
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <div className="">

                                            <GrafBarChartIv2></GrafBarChartIv2>
                                        </div>
                                    </TabPanel>
                                </TabPanels>
                            </TabGroup>
                        </Card>
                    </Col>


                    <Card className="overflow-x-scroll md:overflow-auto shadow-xl">
                        <Title className="flex justify-start items-center"><FaAlignLeft className="mr-2 text-red-400"></FaAlignLeft> Cantidad por Tipo de Calle</Title>
                        <GrafBarListI></GrafBarListI>

                    </Card>



                    <Card className="shadow-xl">
                        <Text>Año 2022</Text>
                        <Title className="flex justify-start items-center"><FaDotCircle className="mr-2 text-red-400"></FaDotCircle> Conductor Presente</Title>
                        <GrafDonutChartIV2></GrafDonutChartIV2>
                    </Card>

                    <Card className="shadow-xl">
                        <Text>Año 2022</Text>
                        <Title className="flex justify-start items-center"><FaDotCircle className="mr-2 text-red-400"></FaDotCircle> Conductor con Licencia</Title>
                        <GrafDonutChartIV3></GrafDonutChartIV3>
                    </Card>

                    <Card className="shadow-xl">
                        <Text>Año 2022</Text>
                        <Title className="flex justify-start items-center"><FaDotCircle className="mr-2 text-red-400"></FaDotCircle> Tipo de Transporte</Title>
                        <GrafDonutChartIV4></GrafDonutChartIV4>
                    </Card>
                    <Card className="shadow-xl">
                        <Text>Año 2022</Text>
                        <Title className="flex justify-start items-center"><FaDotCircle className="mr-2 text-red-400"></FaDotCircle> Cantidad de Vehículos Internados</Title>
                        <GrafDonutChartIV7></GrafDonutChartIV7>
                    </Card>

                    <Col numColSpan={1} numColSpanLg={2}>
                        <Card className="shadow-xl">

                            <Title className="flex justify-start items-center"><FaChartBar className="mr-2 text-red-400"></FaChartBar>Empresas</Title>
                            <TabGroup>
                                <TabList className="xl:overflow-hidden overflow-y-auto overflow-x-auto">
                                    <Tab icon={FaCircle} className={`block xl:flex hover:text-red-500 border-none ${selectTabv3 === 0 ? "text-red-500" : ""}`} onClick={() => actualSelectbv3(0)}>
                                        Empresas con mas Infracciones
                                    </Tab>
                                    <Tab icon={FaCircle} className={`block xl:flex hover:text-violet-500 border-none ${selectTabv3 === 1 ? "text-violet-500" : ""}`} onClick={() => actualSelectbv3(1)}>
                                        Tipo de Servicio
                                    </Tab>
                                    <Tab icon={FaCircle} className={`block xl:flex hover:text-blue-500 border-none ${selectTabv3 === 2 ? "text-blue-500" : ""}`} onClick={() => actualSelectbv3(2)}>
                                        Tipo de Licencia
                                    </Tab>
                                </TabList>
                                <TabPanels>
                                    <TabPanel>
                                        <div className="">
                                            <GrafBarChartIv3></GrafBarChartIv3>
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <div className="">
                                            <GrafBarChartIv4></GrafBarChartIv4>
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <div className="">


                                            <GrafAreaChartIV2></GrafAreaChartIV2>
                                        </div>
                                    </TabPanel>
                                </TabPanels>
                            </TabGroup>
                        </Card>
                    </Col>
                    <Card className="shadow-xl">
                        <Text>Año 2022</Text>
                        <Title className="flex justify-start items-center"><FaAlignLeft className="mr-2 text-red-400"></FaAlignLeft>Estado de TUC</Title>
                        <GrafDonutChartIV5></GrafDonutChartIV5>
                    </Card>
                    <Card className="shadow-xl">
                        <Text>Año 2022</Text>
                        <Title className="flex justify-start items-center"><FaDotCircle className="mr-2 text-red-400"></FaDotCircle>Cantidad de Multas Pagadas</Title>
                        <GrafDonutChartIV6></GrafDonutChartIV6>
                    </Card>


                    <Col numColSpan={1} numColSpanLg={4}>
                        <Card className="shadow-xl">
                            <Title className="flex justify-start items-center"> <FaTable className="mr-2 text-red-400"></FaTable>Tabla de datos</Title>
                            <TableInfracciones></TableInfracciones>
                        </Card>
                    </Col>


                </Grid>
            </div>
        </div>
    );
}

export default Infracciones;
