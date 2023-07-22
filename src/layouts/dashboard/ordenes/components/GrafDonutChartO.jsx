import { useFetch } from '../../../../Api/useFetch';
import Loading from "../../../../components/Loading";
import { DonutChart, Text, Bold } from "@tremor/react";
import { FaCircle, FaInfoCircle } from "react-icons/fa";
const GrafDonutChartO = () => {

    const {
        data: ordersData,
        loading: ordersLoading,
        /*error: licensesError,
        handleCancelRequest: cancelLicensesRequest
        */
    } = useFetch("https://api.open-data-analytics.info/api/orders");

    const compra = ordersData.filter((n) => n.tipo_orden === 'COMPRA');
    const servicio = ordersData.filter((n) => n.tipo_orden === 'SERVICIO');

    const tipoOrden = [
        {
            name: "Compra",
            sales: parseInt(compra.length),
        },
        {
            name: "Servicio",
            sales: parseInt(servicio.length),
        },
    ];
    const valueFormatter = (number) => {
        return ` Total: ${new Intl.NumberFormat("en-US").format(number)}`;
    };

    if (ordersLoading) {
        return (
            <div className="flex justify-center items-center h-80">
                <Loading></Loading>
            </div>
        );
    }


    return (
        <div>
            <div className="w-full h-auto p-0 mt-3">
                <DonutChart
                    className="mt-2"
                    data={tipoOrden}
                    category="sales"
                    index="name"
                    valueFormatter={valueFormatter}
                    colors={["cyan", "amber"]}
                />

            </div>
            <div className='w-full flex justify-between mt-9'>
                <div className='w-6/12'>
                    <div className='md:flex items-center'>
                        <FaCircle className='mt-2 mr-2 text-[#00BCE3]'></FaCircle> <Text>O. de Compra <span className='text-xs text-red-400'>({compra.length})</span></Text>
                    </div>

                    <div className='md:flex items-center'>
                        <FaCircle className='mt-2 mr-2 text-[#FFBF00]'></FaCircle> <Text>O. de Servicio <span className='text-xs text-red-400'>({servicio.length})</span> </Text>
                    </div>
                </div>

                <div className='w-6/12 py-0'>
                    <div className='mb-4'>
                        <div className='flex items-center'>
                            <FaInfoCircle className='text-base  text-blue-500 mr-1'></FaInfoCircle>
                            <Text className=''>Órdenes de Compra</Text>
                        </div>

                        <Text className='text-xs'>Establece la entrega de un<Bold> bien </Bold>a la Municipalidad</Text>
                    </div>

                    <div>
                        <div className='flex items-center'>
                            <FaInfoCircle className='text-base  text-blue-500 mr-1'></FaInfoCircle>
                            <Text className=''>Orden de Servicio</Text>
                        </div>
                        <Text className='text-xs'>El proveedor brindará un <Bold>servicio</Bold> a la Municipalidad</Text>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default GrafDonutChartO;
