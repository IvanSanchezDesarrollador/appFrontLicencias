import { BarChart, Text, Bold, Subtitle, Title } from "@tremor/react";
import { useFetch } from "../../../../Api/useFetch";
import Loading from '../../../../components/Loading';

const GrafBarChartIv4 = () => {
    const {
        data: infractionsData,
        loading: infractionsLoading,
        /*error: licensesError,
        handleCancelRequest: cancelLicensesRequest
        */
    } = useFetch("http://127.0.0.1:8000/api/infractions");
    const servicio01 = infractionsData.filter(({ tipo_servicio }) => (tipo_servicio?.includes('Transporte de materiales y residuos peligrosos') ?? false));

    const servicio02 = infractionsData.filter(({ tipo_servicio }) => (tipo_servicio?.includes('Transporte de Mercancías en General') ?? false));

    const servicio03 = infractionsData.filter(({ tipo_servicio }) => (tipo_servicio?.includes('Transporte Especial de Estudiantes') ?? false));

    const servicio04 = infractionsData.filter(({ tipo_servicio }) => ((tipo_servicio?.includes('Transporte Especial de Taxi')) ?? false));

    const servicio05 = infractionsData.filter(({ tipo_servicio }) => (tipo_servicio?.includes('Transporte Especial de Turismo') ?? false));

    const servicio06 = infractionsData.filter(({ tipo_servicio }) => (tipo_servicio?.includes('Transporte Especial de Turismo de Circuito') ?? false));

    const servicio07 = infractionsData.filter(({ tipo_servicio }) => (tipo_servicio?.includes('Transporte Especial en Auto Colectivo') ?? false));

    const servicio08 = infractionsData.filter(({ tipo_servicio }) => (tipo_servicio?.includes('Transporte Especial en Mototaxi') ?? false));

    const servicio09 = infractionsData.filter(({ tipo_servicio }) => (tipo_servicio?.includes('Transporte Regular de Personas') ?? false));

    const servicio10 = infractionsData.filter(({ tipo_servicio }) => (tipo_servicio?.includes('-') ?? false));





    const chartdata = [
        {
            name: "Servicio 01",
            "Cantidad": servicio01.length,
        },
        {
            name: "Servicio 02",
            "Cantidad": servicio02.length,
        },
        {
            name: "Servicio 03",
            "Cantidad": servicio03.length,
        },

        {
            name: "Servicio 04",
            "Cantidad": servicio04.length,
        },

        {
            name: "Servicio 05",
            "Cantidad": servicio05.length,
        },

        {
            name: "Servicio 06",
            "Cantidad": servicio06.length,
        },

        {
            name: "Servicio 07",
            "Cantidad": servicio07.length,
        },

        {
            name: "Servicio 08",
            "Cantidad": servicio08.length,
        },

        {
            name: "Servicio 09",
            "Cantidad": servicio09.length,
        },

        {
            name: "Se desconoce",
            "Cantidad": servicio10.length,
        },

    ];

    const dataFormatter = (number) => {
        return Intl.NumberFormat("us").format(number).toString();
    };

    if (infractionsLoading) {
        return (
            <div className="flex justify-center items-center h-72">
                <Loading></Loading>
            </div>
        );
    }

    return (
        <div className="overflow-x-scroll 2xl:overflow-hidden">
            <div className="2xl:flex justify-between items-center">
                <Subtitle className="px-4">Los servicio de mototaxi con una total de <span className="text-red-400">{servicio08.length}</span> registros son las mas infracctoras</Subtitle>
                <Title className="2xl:text-end text-violet-500 px-4 2xl:mt-0 mt-2">Año 2022</Title>
            </div>

            <BarChart
                className="mt-1 h-56 2xl:w-full w-[60rem]"
                data={chartdata}
                index="name"
                categories={["Cantidad"]}
                colors={["violet"]}
                valueFormatter={dataFormatter}
                yAxisWidth={48}
            />
            <div className="2xl:w-full w-[60rem] flex justify-between gap-2 px-7 2xl:mb-0 mb-4">
                <div className="w-6/12">
                    <Text className="text-xs"><Bold>Servicio 01:</Bold> Transporte de materiales y residuos peligrosos <span className="text-xs text-red-300">({servicio01.length})</span></Text>
                    <Text className="text-xs"><Bold>Servicio 02:</Bold> Transporte de Mercancías en General <span className="text-xs text-red-300">({servicio02.length})</span></Text>
                    <Text className="text-xs"><Bold>Servicio 03:</Bold> Transporte Especial de Estudiantes <span className="text-xs text-red-300">({servicio03.length})</span></Text>
                    <Text className="text-xs"><Bold>Servicio 04:</Bold> Transporte Especial de Taxi <span className="text-xs text-red-300">({servicio04.length})</span></Text>
                    <Text className="text-xs"><Bold>Servicio 05:</Bold> Transporte Especial de Turismo <span className="text-xs text-red-300">({servicio05.length})</span></Text>
                </div>
                <div className="w-6/12">
                    <Text className="text-xs"><Bold>Servicio 06:</Bold> Transporte Especial de Turismo de Circuito <span className="text-xs text-red-300">({servicio06.length})</span></Text>
                    <Text className="text-xs"><Bold>Servicio 07:</Bold> Transporte Especial en Auto Colectivo <span className="text-xs text-red-300">({servicio07.length})</span></Text>
                    <Text className="text-xs"><Bold>Servicio 08:</Bold> Transporte Especial en Mototaxi <span className="text-xs text-red-300">({servicio08.length})</span></Text>
                    <Text className="text-xs"><Bold>Servicio 09:</Bold> Transporte Regular de Personas <span className="text-xs text-red-300">({servicio09.length})</span></Text>
                </div>
            </div>

        </div>
    );
}

export default GrafBarChartIv4;
