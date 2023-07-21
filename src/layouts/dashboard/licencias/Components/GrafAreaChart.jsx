import { AreaChart, Text, Title , BadgeDelta} from "@tremor/react";

import { useFetch } from "../../../../Api/useFetch";
import Loading from "../../../../components/Loading";


const dataFormatter = (number) => {
    return Intl.NumberFormat("us").format(number).toString();
};


const GrafAreaChart = (anio) => {

    const {
        data: licensesData,
        loading: licensesLoading,
        /*error: licensesError,
        handleCancelRequest: cancelLicensesRequest
        */
    } = useFetch("http://127.0.0.1:8000/api/licenses");

    const enero = licensesData.filter((n) => n.fecha_expedicion >= `${anio.anio}-01-01` && n.fecha_expedicion <= `${anio.anio}-02-01`);
    const febrero = licensesData.filter((n) => n.fecha_expedicion >= `${anio.anio}-02-01` && n.fecha_expedicion <= `${anio.anio}-03-01`);
    const marzo = licensesData.filter((n) => n.fecha_expedicion >= `${anio.anio}-03-01` && n.fecha_expedicion <= `${anio.anio}-04-01`);
    const abril = licensesData.filter((n) => n.fecha_expedicion >= `${anio.anio}-04-01` && n.fecha_expedicion <= `${anio.anio}-05-01`);
    const mayo = licensesData.filter((n) => n.fecha_expedicion >= `${anio.anio}-05-01` && n.fecha_expedicion <= `${anio.anio}-06-01`);
    const junio = licensesData.filter((n) => n.fecha_expedicion >= `${anio.anio}-06-01` && n.fecha_expedicion <= `${anio.anio}-07-01`);
    const julio = licensesData.filter((n) => n.fecha_expedicion >= `${anio.anio}-07-01` && n.fecha_expedicion <= `${anio.anio}-08-01`);
    const agosto = licensesData.filter((n) => n.fecha_expedicion >= `${anio.anio}-08-01` && n.fecha_expedicion <= `${anio.anio}-09-01`);
    const setiembre = licensesData.filter((n) => n.fecha_expedicion >= `${anio.anio}-09-01` && n.fecha_expedicion <= `${anio.anio}-10-01`);
    const octubre = licensesData.filter((n) => n.fecha_expedicion >= `${anio.anio}-10-01` && n.fecha_expedicion <= `${anio.anio}-11-01`);
    const noviembre = licensesData.filter((n) => n.fecha_expedicion >= `${anio.anio}-11-01` && n.fecha_expedicion <= `${anio.anio}-12-01`);
    const diciembre = licensesData.filter((n) => n.fecha_expedicion >= `${anio.anio}-12-01` && n.fecha_expedicion <= `${anio.anio}-12-31`);
    const anioTOTAL = licensesData.filter((n) => n.fecha_expedicion >= `${anio.anio}-12-01` && n.fecha_expedicion <= `${anio.anio}-12-31`);


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

    if (licensesLoading) {
        return (
            <div className="flex justify-center items-center h-80 my-4">
                <Loading></Loading>
            </div>
        );
    }

    return (
        
        <div className="py-4 overflow-x-scroll xl:overflow-hidden">
            <div className="2xl:flex justify-between px-3">
                <div className="flex items-center">
                    <Text>Cantidad Total: {anioTOTAL.length}</Text>
                    <BadgeDelta className='ml-2' deltaType="increase" size="xs">
                        Todos los registros
                    </BadgeDelta>
                </div>
                <Title className={`${anio.anio === 2019 ? "text-blue-600" : anio.anio === 2020 ? "text-violet-500" : anio.anio === 2021 ? "text-amber-500" : anio.anio === 2022 ? 'text-green-500' : ''}`}> {anio.anio}</Title>
            </div>


            <AreaChart
                className="h-72 md:w-full w-[60rem]"
                data={chartdata}
                index="date"
                categories={["Cantidad Licencias"]}
                colors={[`${anio.anio === 2019 ? 'indigo' : anio.anio === 2020 ? 'fuchsia' : anio.anio === 2021 ? 'amber' : anio.anio === 2022 ? 'emerald' : ''}`]}
                valueFormatter={dataFormatter}
            />

        </div>
    );
}

export default GrafAreaChart;
