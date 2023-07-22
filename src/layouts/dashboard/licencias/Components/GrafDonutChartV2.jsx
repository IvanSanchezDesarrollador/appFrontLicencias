import { DonutChart, Text } from "@tremor/react";
import { FaCircle } from "react-icons/fa";
import { useFetch } from "../../../../Api/useFetch";
import Loading from "../../../../components/Loading";



const GrafDonutChartV2 = () => {
    const {
        data: licensesData,
        loading: licensesLoading,
        /*error: licensesError,
        handleCancelRequest: cancelLicensesRequest
        */
    } = useFetch("https://api.open-data-analytics.info/api/licenses");



    const c_vigente = licensesData.filter((n) => n.estado_licencia === 'VIGENTE')
    const c_vencida = licensesData.filter((n) => n.estado_licencia === 'VENCIDA')
    const c_transferencia = licensesData.filter((n) => n.estado_licencia === 'TRANSFERENCIA')
    const c_de_baja = licensesData.filter((n) => n.estado_licencia === 'DE BAJA')
    const c_cese_actividades = licensesData.filter((n) => n.estado_licencia === 'CESE DE ACTIVIDADES')
    const c_cancelada = licensesData.filter((n) => n.estado_licencia === 'CANCELADA')
    const c_nulidad = licensesData.filter((n) => n.estado_licencia === 'NULIDAD DE OFICIO')
    const c_anulada = licensesData.filter((n) => n.estado_licencia === 'ANULADA')




    const cities = [
        {
            name: "Vigente",
            sales: parseInt(c_vigente.length),
        },
        {
            name: "Vencida",
            sales: parseInt(c_vencida.length),
        },
        {
            name: "Nulidad de oficio",
            sales: parseInt(c_nulidad.length),
        },
        {
            name: "Transferencia",
            sales: parseInt(c_transferencia.length),
        },
        
        {
            name: "Cese de Actividades",
            sales: parseInt(c_cese_actividades.length),
        },
        {
            name: "Cancelada",
            sales: parseInt(c_cancelada.length),
        },
        {
            name: "De Baja",
            sales: parseInt(c_de_baja.length),
        },
        {
            name: "Anulada",
            sales: parseInt(c_anulada.length),
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
            <div className="w-full max-w-lg p-0 mt-3">
                <DonutChart
                    className=""
                    data={cities}
                    category="sales"
                    index="name"
                    valueFormatter={valueFormatter}
                    colors={["cyan", "violet","green", "indigo", "rose", "slate", "amber", "gray"]}
                />
            </div>
            <div className='w-full flex justify-between mt-9'>
                <div className='w-6/12'>

                    <div className='md:flex items-center'>
                        <FaCircle className=' mt-2 mr-2 text-[#00BCE3]'></FaCircle> <Text>Vigente <span className="text-xs text-red-400">({c_vigente.length})</span></Text>
                    </div>

                    <div className='md:flex items-center'>
                        <FaCircle className=' mt-2 mr-2 text-[#8b5cf6]'></FaCircle> <Text>Vencida <span className="text-xs text-red-400">({c_vencida.length})</span></Text>
                    </div>

                    <div className='md:flex items-center'>
                        <FaCircle className=' mt-2 mr-2 text-[#6366f1]'></FaCircle> <Text>Transferencia <span className="text-xs text-red-400">({c_transferencia.length})</span></Text>
                    </div>
                    <div className='md:flex items-center'>
                        <FaCircle className=' mt-2 mr-2 text-[#22c55e]'></FaCircle> <Text>Nulidad de Oficio <span className="text-xs text-red-400">({c_nulidad.length})</span></Text>
                    </div>
                </div>
                <div className='w-6/12 py-0'>
                    <div className='md:flex items-center'>
                        <FaCircle className='mt-2 mr-2 text-[#f43f5e]'></FaCircle> <Text>De baja <span className="text-xs text-red-400">({c_de_baja.length})</span></Text>
                    </div>
                    <div className='md:flex items-center'>
                        <FaCircle className='mt-2 mr-2 text-[#64748b]'></FaCircle> <Text>Cese de Actividades <span className="text-xs text-red-400">({c_cese_actividades.length})</span></Text>
                    </div>
                    <div className='md:flex items-center'>
                        <FaCircle className='mt-2 mr-2 text-[#f59e0b]'></FaCircle> <Text>Cancelada <span className="text-xs text-red-400">({c_cancelada.length})</span></Text>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GrafDonutChartV2;
