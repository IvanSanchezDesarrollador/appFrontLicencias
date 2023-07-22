import { AreaChart, Text, Title } from "@tremor/react";
import { useFetch } from "../../../../Api/useFetch";
import Loading from "../../../../components/Loading";

const dataFormatter = (number) => {
    return Intl.NumberFormat("us").format(number).toString();
};

const GrafAreaChartAll = () => {
    const {
        data: licensesData,
        loading: licensesLoading,
        /*error: licensesError,
        handleCancelRequest: cancelLicensesRequest
        */
    } = useFetch("https://api.open-data-analytics.info/api/licenses");

    const anio01 = 2019;
    const anio02 = 2020;
    const anio03 = 2021;
    const anio04 = 2022;

    

    const todos2019 = licensesData.filter((n) => n.fecha_expedicion >= `${anio01}-01-01` && n.fecha_expedicion <= `${anio01}-12-31`);
    const todos2020 = licensesData.filter((n) => n.fecha_expedicion >= `${anio02}-01-01` && n.fecha_expedicion <= `${anio02}-12-31`);
    const todos2021 = licensesData.filter((n) => n.fecha_expedicion >= `${anio03}-01-01` && n.fecha_expedicion <= `${anio03}-12-31`);
    const todos2022 = licensesData.filter((n) => n.fecha_expedicion >= `${anio04}-01-01` && n.fecha_expedicion <= `${anio04}-12-31`);


    const chartdata = [
        {
            date: "2019",
            "Cantidad 2019": parseInt(todos2019.length),
           
        },
        {
            date: "2020",
            "Cantidad 2019": parseInt(todos2020.length),
            


        },
        {
            date: "2021",
            "Cantidad 2019": parseInt(todos2021.length),
          
        },
        {
            date: "2022",
            "Cantidad 2019": parseInt(todos2022.length),
            
        },
    ];
    if (licensesLoading) {
        return (
          <div className="flex justify-center items-center h-72">
            <Loading></Loading>
          </div>
        );
      }

    return (
        <div className="py-4 ">
            <div className="flex justify-between items-center px-4 ">
                <Text>Cantidad Total: {licensesData.length}</Text>
                <Title className="text-red-500"> 2019-2022</Title>
            </div>

                <AreaChart
                    className="h-72"
                    data={chartdata}
                    index="date"
                    categories={["Cantidad 2019","Cantidad 2020", "Cantidad 2021","Cantidad 2022"]}
                    colors={["indigo", "cyan", "rose", "amber"]}
                    valueFormatter={dataFormatter}
                />
           
        </div>
    );
}

export default GrafAreaChartAll;
