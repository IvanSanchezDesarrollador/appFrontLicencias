import { AreaChart, Text, Title } from "@tremor/react";
import { useFetch } from '../../../../Api/useFetch';
import Loading from "../../../../components/Loading";
const dataFormatter = (number) => {
    return Intl.NumberFormat("us").format(number).toString();
};
const GrafAreaChartO = (anio) => {
    const {
        data: ordersData,
        loading: ordersLoading,
        /*error: licensesError,
        handleCancelRequest: cancelLicensesRequest
        */
    } = useFetch("https://api.open-data-analytics.info/api/orders");
    const enero = ordersData.filter((n) => n.fecha_orden >= `${anio.anio}-01-01` && n.fecha_orden <= `${anio.anio}-02-01`);
    const febrero = ordersData.filter((n) => n.fecha_orden >= `${anio.anio}-02-01` && n.fecha_orden <= `${anio.anio}-03-01`);
    const marzo = ordersData.filter((n) => n.fecha_orden >= `${anio.anio}-03-01` && n.fecha_orden <= `${anio.anio}-04-01`);
    const abril = ordersData.filter((n) => n.fecha_orden >= `${anio.anio}-04-01` && n.fecha_orden <= `${anio.anio}-05-01`);
    const mayo = ordersData.filter((n) => n.fecha_orden >= `${anio.anio}-05-01` && n.fecha_orden <= `${anio.anio}-06-01`);
    const junio = ordersData.filter((n) => n.fecha_orden >= `${anio.anio}-06-01` && n.fecha_orden <= `${anio.anio}-07-01`);
    const julio = ordersData.filter((n) => n.fecha_orden >= `${anio.anio}-07-01` && n.fecha_orden <= `${anio.anio}-08-01`);
    const agosto = ordersData.filter((n) => n.fecha_orden >= `${anio.anio}-08-01` && n.fecha_orden <= `${anio.anio}-09-01`);
    const setiembre = ordersData.filter((n) => n.fecha_orden >= `${anio.anio}-09-01` && n.fecha_orden <= `${anio.anio}-10-01`);
    const octubre = ordersData.filter((n) => n.fecha_orden >= `${anio.anio}-10-01` && n.fecha_orden <= `${anio.anio}-11-01`);
    const noviembre = ordersData.filter((n) => n.fecha_orden >= `${anio.anio}-11-01` && n.fecha_orden <= `${anio.anio}-12-01`);
    const diciembre = ordersData.filter((n) => n.fecha_orden >= `${anio.anio}-12-01` && n.fecha_orden <= `${anio.anio}-12-31`);
    const anioTOTAL = ordersData.filter((n) => n.fecha_orden >= `${anio.anio}-01-01` && n.fecha_orden <= `${anio.anio}-12-31`);


    const chartdata = [
        {
            date: "Ene",
            "Cantidad Ordenes": parseInt(enero.length),
        },
        {
            date: "Feb",
            "Cantidad Ordenes": parseInt(febrero.length),
        },
        {
            date: "Mar",
            "Cantidad Ordenes": parseInt(marzo.length),
        },
        {
            date: "Abr",
            "Cantidad Ordenes": parseInt(abril.length),
        },
        {
            date: "May",
            "Cantidad Ordenes": parseInt(mayo.length),
        },
        {
            date: "Jun",
            "Cantidad Ordenes": parseInt(junio.length),
        },
        {
            date: "Jul",
            "Cantidad Ordenes": parseInt(julio.length),
        },
        {
            date: "Ago",
            "Cantidad Ordenes": parseInt(agosto.length),
        },
        {
            date: "Set",
            "Cantidad Ordenes": parseInt(setiembre.length),
        },
        {
            date: "Oct",
            "Cantidad Ordenes": parseInt(octubre.length),
        },
        {
            date: "Nov",
            "Cantidad Ordenes": parseInt(noviembre.length),
        },

        {
            date: "Dic",
            "Cantidad Ordenes": parseInt(diciembre.length),
        },
    ];

    if (ordersLoading) {
        return (
            <div className="flex justify-center items-center h-80 mt-9">
                <Loading></Loading>
            </div>
        );
    }
    return (
        <div className="overflow-x-scroll xl:overflow-auto">
            <div className="2xl:flex justify-between items-center px-4">
                <Text>Cantidad Total: {anioTOTAL.length}</Text>
                <Title className={`${anio.anio === 2019 ? "text-blue-600" : anio.anio === 2020 ? "text-violet-500" : anio.anio === 2021 ? "text-amber-500" : anio.anio === 2022 ? 'text-green-500' : ''}`}> {anio.anio}</Title>
            </div>

            <AreaChart
                className=" xl:w-full w-[60rem] h-80"
                data={chartdata}
                index="date"
                categories={["Cantidad Ordenes"]}
                colors={[`${anio.anio === 2019 ? 'indigo' : anio.anio === 2020 ? 'fuchsia' : anio.anio === 2021 ? 'amber' : anio.anio === 2022 ? 'emerald' : ''}`]}
                valueFormatter={dataFormatter}
            />

        </div>
    );
}

export default GrafAreaChartO;
