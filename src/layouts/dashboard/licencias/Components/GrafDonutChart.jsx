import { DonutChart, Text, Bold } from "@tremor/react";
import { FaCircle, FaInfoCircle } from "react-icons/fa";

import { useFetch } from "../../../../Api/useFetch";
import Loading from "../../../../components/Loading";

const GrafDonutChart = () => {
    const {
        data: licensesData,
        loading: licensesLoading,
        /*error: licensesError,
        handleCancelRequest: cancelLicensesRequest
        */
    } = useFetch("http://127.0.0.1:8000/api/licenses");


    const c_indefinida = licensesData.filter((n) => n.tipo_licencia === 'INDEFINIDA')
    const c_temporal = licensesData.filter((n) => n.tipo_licencia === 'TEMPORAL')


    const cities = [
        {
            name: "Indefinida",
            sales: parseInt(c_indefinida.length),
        },
        {
            name: "Temporal",
            sales: parseInt(c_temporal.length),
        },
    ];

    const valueFormatter = (number) => {
        return ` Total: ${new Intl.NumberFormat("en-US").format(number)}`;
    };

    if (licensesLoading) {
        return (
          <div className="flex justify-center items-center h-72">
            <Loading></Loading>
          </div>
        );
      }

    return (
        <div>
            <div className="w-full h-auto p-0 mt-3">
                <DonutChart
                    className="mt-2"
                    data={cities}
                    category="sales"
                    index="name"
                    valueFormatter={valueFormatter}
                    colors={["cyan", "amber"]}
                />

            </div>
            <div className='w-full flex justify-between mt-9'>
                <div className='w-4/12'>
                    <div className='md:flex items-center'>
                        <FaCircle className='mt-2 mr-2 text-[#00BCE3]'></FaCircle> <Text>Indefinida  <span className="text-xs text-red-400">({c_indefinida.length})</span></Text>
                    </div>

                    <div className='md:flex items-center'>
                        <FaCircle className='mt-2 mr-2 text-[#FFBF00]'></FaCircle> <Text>Temporal  <span className="text-xs text-red-400">({c_temporal.length})</span></Text>
                    </div>
                </div>
                <div className='w-7/12 py-0'>
                    <div className='mb-4'>
                        <div className='flex items-center'>
                            <FaInfoCircle className='text-base  text-blue-500 mr-1'></FaInfoCircle>
                            <Text className=''>Lincencia Indefinda</Text>
                        </div>

                        <Text className='text-xs'>Desarrollo <Bold>indefinido</Bold> de actividades económicas</Text>
                    </div>

                    <div>
                        <div className='flex items-center'>
                            <FaInfoCircle className='text-base  text-blue-500 mr-1'></FaInfoCircle>
                            <Text className=''>Lincencia Temporal</Text>
                        </div>
                        <Text className='text-xs'>Desarrollo <Bold>temporal</Bold> de actividades económicas</Text>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default GrafDonutChart;
