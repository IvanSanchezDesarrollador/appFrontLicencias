import { Bold, DonutChart, Text } from "@tremor/react";
import { FaCircle } from "react-icons/fa";
import { useFetch } from "../../../../Api/useFetch";
import Loading from "../../../../components/Loading";

const GrafDonutChartIV7 = () => {
    const {
        data: infractionsData,
        loading: infractionsLoading,
        /*error: licensesError,
        handleCancelRequest: cancelLicensesRequest
        */
    } = useFetch("https://api.open-data-analytics.info/api/infractions");

    const siInternamiento = infractionsData.filter(({ internamiento_vehiculo }) => (internamiento_vehiculo?.includes('SI') ?? false));
    const noInternamiento = infractionsData.filter(({ internamiento_vehiculo }) => (internamiento_vehiculo?.includes('NO') ?? false));
    
    const cantidadVehiculosInternados = [
        {
            name: "Vehiculos Internados",
            sales: parseInt(siInternamiento.length),
        },
        {
            name: "Vehiculos No Internados",
            sales: parseInt(noInternamiento.length),
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
                data={cantidadVehiculosInternados}
                category="sales"
                index="name"
                valueFormatter={valueFormatter}
                colors={["cyan", "violet"]}
            />
        </div>
        <div className='w-full flex justify-between mt-7'>
            <div className='w-6/12'>
                <div className='md:flex items-center'>
                    <FaCircle className=' mt-2 mr-2 text-[#00BCE3]'></FaCircle><Text>Cantidad de vehículos<Bold> Internados </Bold><span className="text-xs text-red-300">({siInternamiento.length})</span></Text>
                </div>
            </div>
            <div className='w-6/12 py-0'>
                <div className='md:flex items-center'>
                    <FaCircle className=' mt-2 mr-2 text-[#8b5cf6]'></FaCircle><Text>Cantidad de vehículos<Bold> No Internados </Bold><span className="text-xs text-red-300">({noInternamiento.length})</span></Text>
                </div>
            </div>
        </div>
    </div>
    );
}

export default GrafDonutChartIV7;
