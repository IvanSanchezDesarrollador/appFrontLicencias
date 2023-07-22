import { AreaChart, Text, Title } from "@tremor/react";
import { useFetch } from '../../../../Api/useFetch';
import Loading from "../../../../components/Loading";
const dataFormatter = (number) => {
    return Intl.NumberFormat("us").format(number).toString();
};


const GrafAreaChartOAll = () => {
    const {
        data: ordersData,
        loading: ordersLoading,
        /*error: licensesError,
        handleCancelRequest: cancelLicensesRequest
        */
    } = useFetch("https://api.open-data-analytics.info/api/orders");

    const A2019 = ordersData.filter((n) => n.fecha_orden >= `2019-01-01` && n.fecha_orden <= `2019-12-31`);
    const A2020 = ordersData.filter((n) => n.fecha_orden >= `2020-01-01` && n.fecha_orden <= `2020-12-31`);
    const A2021 = ordersData.filter((n) => n.fecha_orden >= `2021-01-01` && n.fecha_orden <= `2021-12-31`);
    const A2022 = ordersData.filter((n) => n.fecha_orden >= `2022-01-01` && n.fecha_orden <= `2022-12-31`);
    const chartdata = [
        {
            date: "2019",
            "Cantidad Ordenes": parseInt(A2019.length),
        },
        {
            date: "2020",
            "Cantidad Ordenes": parseInt(A2020.length),
        },
        {
            date: "2021",
            "Cantidad Ordenes": parseInt(A2021.length),
        },
        {
            date: "2022",
            "Cantidad Ordenes": parseInt(A2022.length),
        },
    ];

    if (ordersLoading) {
        return (
            <div className="flex justify-center items-center h-80">
                <Loading></Loading>
            </div>
        );
    }

    return (
        <div className="">
            <div className="2xl:flex justify-between items-center px-4">
                <Text>Total General: {ordersData.length}</Text>
                <Title className="text-red-500"> 2019-2022</Title>
            </div>

            <AreaChart
                className="h-80 md:w-full"
                data={chartdata}
                index="date"
                categories={["Cantidad Ordenes"]}
                colors={["rose"]}
                valueFormatter={dataFormatter}
            />

        </div>
    );
}

export default GrafAreaChartOAll;
