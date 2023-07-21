import { Card, Title, BarChart, Subtitle, Text, Bold } from "@tremor/react";
import { useFetch } from "../../../../Api/useFetch";
import Loading from '../../../../components/Loading';

const GrafBarChartIv2 = () => {
    const {
        data: infractionsData,
        loading: infractionsLoading,
        /*error: licensesError,
        handleCancelRequest: cancelLicensesRequest
        */
    } = useFetch("http://127.0.0.1:8000/api/infractions");
    const dato01 = infractionsData.filter(({ infraccion }) => (infraccion?.includes('PRESTAR EL SERVICIO DE TRANSPORTE PÚBLICO ESPECIAL SIN HABER OBTENIDO LA TUC O ESTE SE ENCUENTRE SUSPENDIDO VENCIDO O CANCELADO') ?? false));
    const dato02 = infractionsData.filter(({ infraccion }) => (infraccion?.includes('PAGO POR REMOLQUE DE GRUA') ?? false));
    const dato03 = infractionsData.filter(({ infraccion }) => (infraccion?.includes('POR ESTACIONAR VEHICULOS EN LA VIA PUBLICA AFECTANDO EL LIBRE TRANSITO PEATONAL Y/O VEHICULAR') ?? false));
    const dato04 = infractionsData.filter(({ infraccion }) => ((infraccion?.includes('PRESTAR EL SERVICIO DE TRANSPORTE PÚBLICO ESPECIAL SIN HABER OBTENIDO LA LICENCIA DE CONDUCTOR O ESTE SE ENCUENTRE VENCIDO O CANCELADO O CUYA CATEGORÍA NO CORRESPONDE AL VEHÍCULO QUE CONDUCE')) ?? false));
    const dato05 = infractionsData.filter(({ infraccion }) => (infraccion?.includes('CIRCULAR O PRESTAR EL SERVICIO DE TRANSPORTE PÚBLICO ESPECIAL SIN TENER EL SOAT O AFOCAT O ESTE NO SE ENCUENTRE VIGENTE') ?? false));

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

    ];
    const dataFormatter = (number) => {
        return Intl.NumberFormat("us").format(number).toString();
    };
    if (infractionsLoading) {
        return (
            <div className="flex justify-center items-center h-72">
                <Loading></Loading>
            </div>
        );
    }
    return (
        <div className="overflow-x-scroll 2xl:overflow-hidden">
            <div className="2xl:flex justify-between items-center">
                <Subtitle className="px-4">La falta de la <span className="text-red-400">Tarjeta Única de Circulación (TUC)</span> , es la causa principal de infracciones de transito.</Subtitle>
                <Title className="2xl:text-end text-amber-500 px-4 2xl:mt-0 mt-2">Año 2022</Title>
            </div>
            <BarChart
                className="mt-1 h-64 2xl:w-full w-[60rem]"
                data={chartdata}
                index="name"
                categories={["Cantidad"]}
                colors={["amber"]}
                valueFormatter={dataFormatter}
                yAxisWidth={48}
            />
            <div className="2xl:w-full w-[60rem] flex justify-between gap-2 px-7 2xl:mb-0 mb-4">
                <div className="w-6/12">
                    <Text className="text-xs"><Bold>Dato 01:</Bold> Prestar el servicio de transporte público especial sin haber obtenido la tuc o este se encuentre suspendido vencido o cancelado</Text>
                    <Text className="text-xs"><Bold>Dato 02:</Bold> Pago por remolque de Grua</Text>
                    <Text className="text-xs"><Bold>Dato 03:</Bold> Por estacionar vehiculos en la via publica afectando el libre transito peatonal y/o vehicular</Text>
                </div>
                <div className="w-6/12">
                    <Text className="text-xs"><Bold>Dato 04:</Bold> Prestar el servicio de transporte público especial sin haber obtenido la licencia de conductor o este se encuentre vencido o cancelado o cuya categoría no corresponde al vehículo que conduce</Text>
                    <Text className="text-xs"><Bold>Dato 05:</Bold> Circular o prestar el servicio de transporte público especial sin tener el soat o afocat o este no se encuentre vigentee</Text>

                </div>
            </div>
        </div>
    );
}

export default GrafBarChartIv2;
