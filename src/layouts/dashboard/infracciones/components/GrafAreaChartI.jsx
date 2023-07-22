import { useFetch } from '../../../../Api/useFetch'
import Loading from "../../../../components/Loading";
import { AreaChart, BadgeDelta, Text, Title } from "@tremor/react";

const dataFormatter = (number) => {
    return Intl.NumberFormat("us").format(number).toString();
};

const GrafAreaChartI = (anio) => {
    const {
        data: infractionsData,
        loading: infractionsLoading,
        /*error: licensesError,
        handleCancelRequest: cancelLicensesRequest
        */
    } = useFetch("https://api.open-data-analytics.info/api/infractions");

    const enero = infractionsData.filter((n) => n.fecha_infraccion >= `${anio.anio}-01-01` && n.fecha_infraccion <= `${anio.anio}-02-01`);

    const febrero = infractionsData.filter((n) => n.fecha_infraccion >= `${anio.anio}-02-01` && n.fecha_infraccion <= `${anio.anio}-03-01`);

    const marzo = infractionsData.filter((n) => n.fecha_infraccion >= `${anio.anio}-03-01` && n.fecha_infraccion <= `${anio.anio}-04-01`);

    const abril = infractionsData.filter((n) => n.fecha_infraccion >= `${anio.anio}-04-01` && n.fecha_infraccion <= `${anio.anio}-05-01`);

    const mayo = infractionsData.filter((n) => n.fecha_infraccion >= `${anio.anio}-05-01` && n.fecha_infraccion <= `${anio.anio}-06-01`);

    const junio = infractionsData.filter((n) => n.fecha_infraccion >= `${anio.anio}-06-01` && n.fecha_infraccion <= `${anio.anio}-07-01`);

    const julio = infractionsData.filter((n) => n.fecha_infraccion >= `${anio.anio}-07-01` && n.fecha_infraccion <= `${anio.anio}-08-01`);

    const agosto = infractionsData.filter((n) => n.fecha_infraccion >= `${anio.anio}-08-01` && n.fecha_infraccion <= `${anio.anio}-09-01`);

    const setiembre = infractionsData.filter((n) => n.fecha_infraccion >= `${anio.anio}-09-01` && n.fecha_infraccion <= `${anio.anio}-10-01`);

    const octubre = infractionsData.filter((n) => n.fecha_infraccion >= `${anio.anio}-10-01` && n.fecha_infraccion <= `${anio.anio}-11-01`);

    const noviembre = infractionsData.filter((n) => n.fecha_infraccion >= `${anio.anio}-11-01` && n.fecha_infraccion <= `${anio.anio}-12-01`);

    const diciembre = infractionsData.filter((n) => n.fecha_infraccion >= `${anio.anio}-12-01` && n.fecha_infraccion <= `${anio.anio}-12-31`);

    const chartdata = [
        {
            date: "Ene",
            "Cantidad Licencias": parseInt(enero.length),
        },
        {
            date: "Feb",
            "Cantidad Licencias": parseInt(febrero.length),
        },
        {
            date: "Mar",
            "Cantidad Licencias": parseInt(marzo.length),
        },
        {
            date: "Abr",
            "Cantidad Licencias": parseInt(abril.length),
        },
        {
            date: "May",
            "Cantidad Licencias": parseInt(mayo.length),
        },
        {
            date: "Jun",
            "Cantidad Licencias": parseInt(junio.length),
        },
        {
            date: "Jul",
            "Cantidad Licencias": parseInt(julio.length),
        },
        {
            date: "Ago",
            "Cantidad Licencias": parseInt(agosto.length),
        },
        {
            date: "Set",
            "Cantidad Licencias": parseInt(setiembre.length),
        },
        {
            date: "Oct",
            "Cantidad Licencias": parseInt(octubre.length),
        },
        {
            date: "Nov",
            "Cantidad Licencias": parseInt(noviembre.length),
        },

        {
            date: "Dic",
            "Cantidad Licencias": parseInt(diciembre.length),
        },
    ];

    if (infractionsLoading) {
        return (
            <div className="flex justify-center items-center h-80">
                <Loading></Loading>
            </div>
        );
    }
    return (
        <div className="overflow-x-scroll xl:overflow-hidden py-2">
            <div className="2xl:flex items-center justify-between px-3">
                <div className='flex items-center'>
                    <Text>Catidad Total de infracciones: {infractionsData.length}</Text>
                    <BadgeDelta className='ml-2' deltaType="increase" size="xs">
                        Todos los registros
                    </BadgeDelta>
                </div>
                <Title className='text-green-500 2xl:mt-0 mt-2'>Año: {anio.anio}</Title>

            </div>
            <div className='py-2'>
                <AreaChart
                    className="h-72 xl:w-full w-[60rem]"
                    data={chartdata}
                    index="date"
                    categories={["Cantidad Licencias"]}
                    colors={[`${anio.anio === 2019 ? 'indigo' : anio.anio === 2020 ? 'fuchsia' : anio.anio === 2021 ? 'amber' : anio.anio === 2022 ? 'emerald' : ''}`]}
                    valueFormatter={dataFormatter}
                />
            </div>
        </div>
    );
}

export default GrafAreaChartI;
