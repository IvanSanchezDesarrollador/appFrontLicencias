import { useFetch } from '../../../../Api/useFetch';
import Loading from "../../../../components/Loading";
import {  BarChart, Subtitle, Text, Bold } from "@tremor/react";
const GrafBarChartO = () => {
    const {
        data: ordersData,
        loading: ordersLoading,
        /*error: licensesError,
        handleCancelRequest: cancelLicensesRequest
        */
    } = useFetch("http://127.0.0.1:8000/api/orders");

    const dato01 = ordersData.filter(({ fuente_financiamiento }) => (fuente_financiamiento?.includes('CANON Y SOBRECANON, REGALIAS, RENTA DE ADUANAS Y PARTICIPACIONES') ?? false));
    const dato02 = ordersData.filter(({ fuente_financiamiento }) => (fuente_financiamiento?.includes('DONACIONES Y TRANSFERENCIAS') ?? false));
    const dato03 = ordersData.filter(({ fuente_financiamiento }) => (fuente_financiamiento?.includes('FONDO DE COMPENSACION MUNICIPAL') ?? false));
    const dato04 = ordersData.filter(({ fuente_financiamiento }) => ((fuente_financiamiento?.includes('IMPUESTOS MUNICIPALES') ?? false)));
    const dato05 = ordersData.filter(({ fuente_financiamiento }) => (fuente_financiamiento?.includes('RECURSOS DIRECTAMENTE RECAUDADOS') ?? false));
    const dato06 = ordersData.filter(({ fuente_financiamiento }) => (fuente_financiamiento?.includes('RECURSOS ORDINARIOS') ?? false));
    const dato07 = ordersData.filter(({ fuente_financiamiento }) => (fuente_financiamiento?.includes('RECURSOS POR OPERACIONES OFICIALES DE CREDITO') ?? false));

    const chartdata = [
        {
            name: "Dato 01",
            "Cantidad": dato01.length,
        },
        {
            name: "Dato 02",
            "Cantidad": dato02.length,
        },
        {
            name: "Dato 03",
            "Cantidad": dato03.length,
        },

        {
            name: "Dato 04",
            "Cantidad": dato04.length,
        },

        {
            name: "Dato 05",
            "Cantidad": dato05.length,
        },
        {
            name: "Dato 06",
            "Cantidad": dato06.length,
        },
        {
            name: "Dato 06",
            "Cantidad": dato07.length,
        },

    ];

    const dataFormatter = (number) => {
        return Intl.NumberFormat("us").format(number).toString();
    };


    if (ordersLoading) {
        return (
            <div className="flex justify-center items-center h-80 my-9">
                <Loading></Loading>
            </div>
        );
    }

    return (
         <div className='overflow-x-scroll xl:overflow-auto'>
            <div className='px-3 mt-2'>
                <Subtitle>Con <Bold className='text-red-400'> {dato04.length} </Bold>registros, los Impuestos municipales son la principal Fuente de Financiamiento</Subtitle>
            </div>

            <BarChart
                className="mt-3 h-72 xl:w-full w-[60rem] "
                data={chartdata}
                index="name"
                categories={["Cantidad"]}
                colors={["amber"]}
                valueFormatter={dataFormatter}
                yAxisWidth={48}
            />
            <div className=" flex justify-between gap-2 px-7 xl:w-full w-[60rem] mb-4 2xl:mb-0">
                <div className="w-7/12">
                    <Text className="text-xs"><Bold>Dato 01:</Bold> Canon y sobrecanon, regalias, renta de aduanas y participaciones <span className='text-xs text-red-400'>({dato01.length})</span> </Text>
                    <Text className="text-xs"><Bold>Dato 02:</Bold> Donaciones y transferencias <span className='text-xs text-red-400'>({dato02.length})</span></Text>
                    <Text className="text-xs"><Bold>Dato 03:</Bold> Fondo de compensacion municipal <span className='text-xs text-red-400'>({dato03.length})</span></Text>
                    <Text className="text-xs"><Bold>Dato 04:</Bold> Impuestos municipales <span className='text-xs text-red-400'>({dato04.length})</span></Text>

                </div>
                <div className="w-5/12">
                    <Text className="text-xs"><Bold>Dato 05:</Bold> Recursos directamente recaudados <span className='text-xs text-red-400'>({dato05.length})</span></Text>
                    <Text className="text-xs"><Bold>Dato 06:</Bold> Recursos ordinarios <span className='text-xs text-red-400'>({dato06.length})</span></Text>
                    <Text className="text-xs"><Bold>Dato 07:</Bold> Recursos por operaciones oficiales de credito <span className='text-xs text-red-400'>({dato07.length})</span></Text>

                </div>
            </div>
        </div>
    );
}

export default GrafBarChartO;
