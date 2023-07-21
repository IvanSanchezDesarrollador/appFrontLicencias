import { Bold, DonutChart, Text } from "@tremor/react";
import { FaCircle } from "react-icons/fa";
import { useFetch } from "../../../../Api/useFetch";
import Loading from "../../../../components/Loading";


const GrafDonutChartIV6 = () => {
    const {
        data: infractionsData,
        loading: infractionsLoading,
        /*error: licensesError,
        handleCancelRequest: cancelLicensesRequest
        */
    } = useFetch("http://127.0.0.1:8000/api/infractions");

    const siPago = infractionsData.filter(({ se_pago_multas }) => (se_pago_multas?.includes('SI') ?? false));
    const noPago = infractionsData.filter(({ se_pago_multas }) => (se_pago_multas?.includes('NO') ?? false));

    const infraccionConductorPresente = [
        {
            name: "Multas Pagadas",
            sales: parseInt(siPago.length),
        },
        {
            name: "Multas No Pagadas",
            sales: parseInt(noPago.length),
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
                    className="mt-12"
                    data={infraccionConductorPresente}
                    category="sales"
                    index="name"
                    valueFormatter={valueFormatter}
                    colors={[ "amber", "rose"]}
                />
            </div>
            <div className='w-full flex justify-between mt-14'>
                <div className='w-6/12'>

                    <div className='md:flex items-center'>
                        <FaCircle className=' mt-2 mr-2 text-[#f59e0b]'></FaCircle><Text>Cantidad de multas<Bold> Pagadas </Bold><span className="text-xs text-red-300">({siPago.length})</span></Text>
                    </div>
                </div>
                <div className='w-6/12 py-0'>
                    <div className='md:flex items-center'>
                        <FaCircle className=' mt-2 mr-2 text-[#f43f5e]'></FaCircle><Text>Cantidad de multas<Bold> No Pagadas </Bold><span className="text-xs text-red-300">({noPago.length})</span></Text>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GrafDonutChartIV6;
