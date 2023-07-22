import { Bold, DonutChart, Text } from "@tremor/react";
import { FaCircle } from "react-icons/fa";
import { useFetch } from "../../../../Api/useFetch";
import Loading from "../../../../components/Loading";

const GrafDonutChartIV2 = () => {
    const {
        data: infractionsData,
        loading: infractionsLoading,
        /*error: licensesError,
        handleCancelRequest: cancelLicensesRequest
        */
    } = useFetch("https://api.open-data-analytics.info/api/infractions");

    const RSi = infractionsData.filter(({ conductor_presente }) => (conductor_presente?.includes('SI') ?? false));
    const RNo = infractionsData.filter(({ conductor_presente }) => (conductor_presente?.includes('NO') ?? false));
    const infraccionConductorPresente = [
        {
            name: "SI",
            sales: parseInt(RSi.length),
        },
        {
            name: "NO",
            sales: parseInt(RNo.length),
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
                    data={infraccionConductorPresente}
                    category="sales"
                    index="name"
                    valueFormatter={valueFormatter}
                    colors={["cyan", "violet", "green", "indigo", "rose", "slate"]}
                />
            </div>
            <div className='w-full flex justify-between mt-9'>
                <div className='w-6/12'>

                    <div className='md:flex items-center'>
                        <FaCircle className=' mt-2 mr-2 text-[#00BCE3]'></FaCircle><Text><Bold>Si</Bold> estubo presente <span className="text-xs text-red-300">({RSi.length})</span></Text>
                    </div>


                </div>
                <div className='w-6/12 py-0'>
                    <div className='md:flex items-center'>
                        <FaCircle className=' mt-2 mr-2 text-[#8b5cf6]'></FaCircle> <Text> <Bold>NO</Bold> estubo presente <span className="text-xs text-red-300">({RNo.length})</span></Text>
                    </div>

                </div>
            </div>
        </div>
    );
}


export default GrafDonutChartIV2;
