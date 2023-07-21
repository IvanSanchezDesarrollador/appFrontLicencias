import { DonutChart, Text } from "@tremor/react";
import { FaCircle } from "react-icons/fa";
import { useFetch } from "../../../../Api/useFetch";
import Loading from "../../../../components/Loading";

const GrafDonutChartI = () => {
    const {
        data: infractionsData,
        loading: infractionsLoading,
        /*error: licensesError,
        handleCancelRequest: cancelLicensesRequest
        */
    } = useFetch("http://127.0.0.1:8000/api/infractions");

    const jirones = infractionsData.filter(({ lugar_infraccion }) => (lugar_infraccion?.includes('JR') ?? false));
    const avenidas = infractionsData.filter(({ lugar_infraccion }) => (lugar_infraccion?.includes('AV') ?? false));
    const plaza = infractionsData.filter(({ lugar_infraccion }) => (lugar_infraccion?.includes('PLAZA') ?? false));
    const via = infractionsData.filter(({ lugar_infraccion }) => (lugar_infraccion?.includes('VÍA')  ?? false));
    const carretera = infractionsData.filter(({ lugar_infraccion }) => (lugar_infraccion?.includes('CARRETERA') ?? false));
    const infraccionTipoCalle = [
        {
            name: "Jirones",
            sales: parseInt(jirones.length),
        },
        {
            name: "Avenidas",
            sales: parseInt(avenidas.length),
        },
        {
            name: "Plaza o Plazuela",
            sales: parseInt(plaza.length),
        },

        {
            name: "Vias",
            sales: parseInt(via.length),
        },
        {
            name: "Carreteras",
            sales: parseInt(carretera.length),
        },
    ];

    const valueFormatter = (number) => {
        return ` Total: ${new Intl.NumberFormat("en-US").format(number)}`;
    };

    if (infractionsLoading) {
        return (
            <div className="flex justify-center items-center h-72">
                <Loading></Loading>
            </div>)
    }


    return (
        <div>
            <div className="w-full max-w-lg p-0 mt-3">
                <DonutChart
                    className="mt-6"
                    data={infraccionTipoCalle}
                    category="sales"
                    index="name"
                    valueFormatter={valueFormatter}
                    colors={["cyan", "violet", "green", "indigo", "rose", "slate"]}
                />
            </div>
            <div className='w-full flex justify-between mt-9'>
                <div className='w-6/12'>

                    <div className='md:flex items-center'>
                        <FaCircle className=' mt-2 mr-2 text-[#00BCE3]'></FaCircle> <Text>Jirones</Text>
                    </div>

                    <div className='md:flex items-center'>
                        <FaCircle className=' mt-2 mr-2 text-[#8b5cf6]'></FaCircle> <Text>Avenidas</Text>
                    </div>

                    <div className='md:flex items-center'>
                        <FaCircle className=' mt-2 mr-2 text-[#6366f1]'></FaCircle> <Text>Plaza o Plazuela</Text>
                    </div>
                    
                </div>
                <div className='w-6/12 py-0'>
                <div className='md:flex items-center'>
                        <FaCircle className=' mt-2 mr-2 text-[#22c55e]'></FaCircle> <Text>Vias</Text>
                    </div>
                    <div className='md:flex items-center'>
                        <FaCircle className='mt-2 mr-2 text-[#f43f5e]'></FaCircle> <Text>Carreteras</Text>
                    </div>
                 
                </div>
            </div>
        </div>
    );
}

export default GrafDonutChartI;
