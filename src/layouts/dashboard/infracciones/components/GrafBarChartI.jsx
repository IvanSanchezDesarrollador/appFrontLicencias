import { Card, Title, BarChart, Subtitle } from "@tremor/react";
import { useFetch } from "../../../../Api/useFetch";
import Loading from '../../../../components/Loading';

const GrafBarChartI = () => {
    const {
        data: infractionsData,
        loading: infractionsLoading,
        /*error: licensesError,
        handleCancelRequest: cancelLicensesRequest
        */
    } = useFetch("https://api.open-data-analytics.info/api/infractions");

    const dato01 = infractionsData.filter(({ lugar_infraccion }) => (lugar_infraccion?.includes('PLAZUELA BOLO') ?? false));
    const dato02 = infractionsData.filter(({ lugar_infraccion }) => (lugar_infraccion?.includes('JR SAN SAL') ?? false));
    const dato03 = infractionsData.filter(({ lugar_infraccion }) => (lugar_infraccion?.includes('PLAZA DE AR') ?? false));
    const dato04 = infractionsData.filter(({ lugar_infraccion }) => ((lugar_infraccion?.includes('GUILL') || (lugar_infraccion?.includes('URRE'))) ?? false));
    const dato05 = infractionsData.filter(({ lugar_infraccion }) => (lugar_infraccion?.includes('DOS DE MAYO') ?? false));
    const dato06 = infractionsData.filter(({ lugar_infraccion }) => (lugar_infraccion?.includes('AYACUCHO') ?? false));
    const dato07 = infractionsData.filter(({ lugar_infraccion }) => (lugar_infraccion?.includes('AMALIA') ?? false));
    const dato08 = infractionsData.filter(({ lugar_infraccion }) => ((lugar_infraccion?.includes('DELFÍN')) || (lugar_infraccion?.includes('DEL FIN')) || (lugar_infraccion?.includes('DELFIN'))) ?? false);
    const dato09 = infractionsData.filter(({ lugar_infraccion }) => (lugar_infraccion?.includes('CASUARINA') ?? false));
    const dato10 = infractionsData.filter(({ lugar_infraccion }) => (lugar_infraccion?.includes('CINCO ESQ') ?? false));

    const chartdata = [
        {
            name: "Plaz. Bolognesi",
            "Cantidad": dato01.length,
        },
        {
            name: "Jr. San Salvador",
            "Cantidad": dato02.length,
        },
        {
            name: "Plz de Armas",
            "Cantidad": dato03.length,
        },

        {
            name: "Jr. Guillermo Urrelo",
            "Cantidad": dato04.length,
        },
        {
            name: "Jr. Casuarina",
            "Cantidad": dato09.length,
        },
        {
            name: "Jr. Ayacucho",
            "Cantidad": dato06.length,
        },
        {
            name: "Jr. Dos de Mayo",
            "Cantidad": dato05.length,
        },

        {
            name: "Jr. Amalia Puga",
            "Cantidad": dato07.length,
        },
        {
            name: "Jr. del Fin Cerna",
            "Cantidad": dato08.length,
        },

        {
            name: "Jr. Cinco Esquinas",
            "Cantidad": dato10.length,
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
                <Subtitle className="px-4">Se hizo el estudio a las calles más transitadas de la ciudad, entre ellas Av&apos;s, Jr&apos;s, Calles, etc. </Subtitle>
                <Title className="2xl:text-end text-blue-500 px-4 2xl:mt-0 mt-2">Año 2022</Title>
            </div>
            <BarChart
                className="mt-1 h-80 2xl:w-full w-[80rem] mb-4 2xl:mb-0"
                data={chartdata}
                index="name"
                categories={["Cantidad"]}
                colors={["sky"]}
                valueFormatter={dataFormatter}
                yAxisWidth={48}
            />
        </div>
    );
}

export default GrafBarChartI;
