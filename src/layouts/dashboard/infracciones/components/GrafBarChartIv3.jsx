import { BarChart, Text, Bold, Subtitle, Title } from "@tremor/react";
import { useFetch } from "../../../../Api/useFetch";
import Loading from '../../../../components/Loading';
const GrafBarChartIv3 = () => {
    const {
        data: infractionsData,
        loading: infractionsLoading,
        /*error: licensesError,
        handleCancelRequest: cancelLicensesRequest
        */
    } = useFetch("https://api.open-data-analytics.info/api/infractions");

    const empresa01 = infractionsData.filter(({ empresa }) => (empresa?.includes('Empresa de Transportes y Servicios Generales Regional SRL') ?? false));

    const empresa02 = infractionsData.filter(({ empresa }) => (empresa?.includes('Empresa de Transportes Multiservicios Nueva Esperanza EIRL') ?? false));

    const empresa03 = infractionsData.filter(({ empresa }) => (empresa?.includes('Empresa de Transportes Múltiples ISA & COM SRL') ?? false));

    const empresa04 = infractionsData.filter(({ empresa }) => ((empresa?.includes('Empresa de Transportes Multiservicios Siglo XXI EIRL')) ?? false));

    const empresa05 = infractionsData.filter(({ empresa }) => (empresa?.includes('Grupo Multiservis SRL') ?? false));

    const empresa06 = infractionsData.filter(({ empresa }) => (empresa?.includes('Empresa de Transportes Plus SRL') ?? false));
    const desconocido = infractionsData.filter(({ empresa }) => (empresa?.includes('SIN EMPRESA') ?? false));

    let mayor=0;
    let mensajes = ''; 

    if (infractionsData) {
        const vectorEmpresa = [empresa01.length, empresa02.length, empresa03.length, empresa04.length, empresa05.length, empresa06.length, desconocido.length];

        mayor = vectorEmpresa[0];

        for (let i = 1; i < vectorEmpresa.length; i++) {
            if (vectorEmpresa[i] > mayor) {
                mayor = vectorEmpresa[i];
            }
        }
        mensajes = `Hay total de ${mayor} registros sin empresa, es decir, personas particulares.`;
    } else {
        mensajes= ""
    }

    const chartdata = [
        {
            name: "Empresa 01",
            "Cantidad": empresa01.length,
        },
        {
            name: "Empresa 02",
            "Cantidad": empresa02.length,
        },
        {
            name: "Empresa 03",
            "Cantidad": empresa03.length,
        },

        {
            name: "Empresa 04",
            "Cantidad": empresa04.length,
        },

        {
            name: "Empresa 05",
            "Cantidad": empresa05.length,
        },

        {
            name: "Empresa 05",
            "Cantidad": empresa06.length,
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
                <Subtitle className="px-4">{mensajes}</Subtitle>
                <Title className="2xl:text-end text-red-500 px-4 2xl:mt-0 mt-2">Año 2022</Title>
            </div>
            <BarChart
                className="mt-1 h-64 2xl:w-full w-[60rem]"
                data={chartdata}
                index="name"
                categories={["Cantidad"]}
                colors={["rose"]}
                valueFormatter={dataFormatter}
                yAxisWidth={48}
            />
            <div className="flex justify-between gap-2 px-0 2xl:w-full w-[60rem] 2xl:mb-0 mb-4">
                <div className="w-6/12">
                    <Text className="text-xs"><Bold>Empresa 01:</Bold> Empresa de Transp. y Serv. Generales Regional SRL <span className="text-xs text-red-300">({empresa01.length})</span></Text>
                    <Text className="text-xs"><Bold>Empresa 02:</Bold> Empresa de Transp. Multiservicios Nueva Esperanza EIRL <span className="text-xs text-red-300">({empresa01.length})</span></Text>
                    <Text className="text-xs"><Bold>Empresa 03:</Bold> Empresa de Transp. Múltiples ISA & COM SRL <span className="text-xs text-red-300">({empresa01.length})</span></Text>
                </div>
                <div className="w-6/12">
                    <Text className="text-xs"><Bold>Empresa 04:</Bold>Empresa de Trans. Multiservicios Siglo XXI EIRL <span className="text-xs text-red-300">({empresa01.length})</span></Text>
                    <Text className="text-xs"><Bold>Empresa 05:</Bold> Grupo Multiservis SRL <span className="text-xs text-red-300">({empresa01.length})</span></Text>
                    <Text className="text-xs"><Bold>Empresa 06:</Bold> Empresa de Transp. Plus SRL <span className="text-xs text-red-300">({empresa01.length})</span></Text>


                </div>
            </div>
        </div>
    );
}

export default GrafBarChartIv3;
