import { useFetch } from '../../../../Api/useFetch'
import Loading from "../../../../components/Loading";
import { AreaChart, Text, Bold, Subtitle, Title } from "@tremor/react";

const dataFormatter = (number) => {
    return Intl.NumberFormat("us").format(number).toString();
}
const GrafAreaChartIV2 = () => {
    const {
        data: infractionsData,
        loading: infractionsLoading,
        /*error: licensesError,
        handleCancelRequest: cancelLicensesRequest
        */
    } = useFetch("http://127.0.0.1:8000/api/infractions");


    const cate01 = infractionsData.filter(({ conductor_categoria_licencia }) => (conductor_categoria_licencia?.includes('A - Especial') ?? false));
    const cate02 = infractionsData.filter(({ conductor_categoria_licencia }) => (conductor_categoria_licencia?.includes('A - I') ?? false));
    const cate03 = infractionsData.filter(({ conductor_categoria_licencia }) => (conductor_categoria_licencia?.includes('A - II a') ?? false));
    const cate04 = infractionsData.filter(({ conductor_categoria_licencia }) => (conductor_categoria_licencia?.includes('A - II a Profesional') ?? false));
    const cate05 = infractionsData.filter(({ conductor_categoria_licencia }) => (conductor_categoria_licencia?.includes('A - II b') ?? false));
    const cate06 = infractionsData.filter(({ conductor_categoria_licencia }) => (conductor_categoria_licencia?.includes('A - II b Profesional') ?? false));
    const cate07 = infractionsData.filter(({ conductor_categoria_licencia }) => (conductor_categoria_licencia?.includes('A - III a') ?? false));
    const cate08 = infractionsData.filter(({ conductor_categoria_licencia }) => (conductor_categoria_licencia?.includes('A - III b') ?? false));
    const cate09 = infractionsData.filter(({ conductor_categoria_licencia }) => (conductor_categoria_licencia?.includes('A - III b Profesional') ?? false));
    const cate10 = infractionsData.filter(({ conductor_categoria_licencia }) => (conductor_categoria_licencia?.includes('A - III c') ?? false));
    const cate11 = infractionsData.filter(({ conductor_categoria_licencia }) => (conductor_categoria_licencia?.includes('A - III c Profesional') ?? false));
    const cate12 = infractionsData.filter(({ conductor_categoria_licencia }) => (conductor_categoria_licencia?.includes('B - II b') ?? false));
    const cate13 = infractionsData.filter(({ conductor_categoria_licencia }) => (conductor_categoria_licencia?.includes('B - II c') ?? false));

    const chartdata = [
        {
            date: "Cate 01",
            "Cantegoria Licencias": parseInt(cate01.length),
        },
        {
            date: "Cate 02",
            "Cantegoria Licencias": parseInt(cate02.length),
        },
        {
            date: "Cate 03",
            "Cantegoria Licencias": parseInt(cate03.length),
        },
        {
            date: "Cate 04",
            "Cantegoria Licencias": parseInt(cate04.length),
        },
        {
            date: "Cate 05",
            "Cantegoria Licencias": parseInt(cate05.length),
        },
        {
            date: "Cate 06",
            "Cantegoria Licencias": parseInt(cate06.length),
        },
        {
            date: "Cate 07",
            "Cantegoria Licencias": parseInt(cate07.length),
        },
        {
            date: "Cate 08",
            "Cantegoria Licencias": parseInt(cate08.length),
        },
        {
            date: "Cate 09",
            "Cantegoria Licencias": parseInt(cate09.length),
        },
        {
            date: "Cate 10",
            "Cantegoria Licencias": parseInt(cate10.length),
        },
        {
            date: "Cate 11",
            "Cantegoria Licencias": parseInt(cate11.length),
        },

        {
            date: "Cate 12",
            "Cantegoria Licencias": parseInt(cate12.length),
        },
        {
            date: "Cate 13",
            "Cantegoria Licencias": parseInt(cate13.length),
        },
    ];

    if (infractionsLoading) {
        return (
            <div className="flex justify-center items-center h-80">
                <Loading></Loading>
            </div>
        );
    }
    return (
        <div className="overflow-x-scroll md:overflow-auto">
            <div className="2xl:flex justify-between items-center">
                <Subtitle className="px-4">Hay total de <span className="text-red-400">{cate13.length}</span> registros la categiria <Bold>B - II c</Bold>, es la mas infracctora.</Subtitle>
                <Title className="2xl:text-end text-blue-500 px-4">Año 2022</Title>
            </div>
            <AreaChart
                className="h-52 2xl:w-full w-[60rem] mt-2"
                data={chartdata}
                index="date"
                categories={["Cantegoria Licencias"]}
                colors={["blue"]}
                valueFormatter={dataFormatter}
            />
            <div className="flex justify-between gap-9 mt-7 px-7 2xl:w-full w-[60rem] mb-4 2xl:mb-0 ">
                <div className="w-6/12">
                    <Text className="text-xs"><Bold>Cat 01:</Bold> A - Especial <span className="text-xs text-red-300">({cate01.length})</span></Text>
                    <Text className="text-xs"><Bold>Cat 02:</Bold> A - I <span className="text-xs text-red-300">({cate02.length})</span></Text>
                    <Text className="text-xs"><Bold>Cat 03:</Bold> A - II a <span className="text-xs text-red-300">({cate03.length})</span></Text>
                    <Text className="text-xs"><Bold>Cat 04:</Bold> A - II a Profesional <span className="text-xs text-red-300">({cate04.length})</span></Text>

                </div>
                <div className="w-6/12">
                    <Text className="text-xs"><Bold>Cat 05:</Bold> A - II b <span className="text-xs text-red-300">({cate05.length})</span></Text>
                    <Text className="text-xs"><Bold>Cat 06:</Bold> A - II b Profesional <span className="text-xs text-red-300">({cate06.length})</span></Text>
                    <Text className="text-xs"><Bold>Cat 07:</Bold> A - III a <span className="text-xs text-red-300">({cate07.length})</span></Text>
                    <Text className="text-xs"><Bold>Cat 08:</Bold> A - III b <span className="text-xs text-red-300">({cate08.length})</span></Text>

                </div>
                <div className="w-6/12">
                    <Text className="text-xs"><Bold>Cat 09:</Bold> A - III b Profesional <span className="text-xs text-red-300">({cate09.length})</span></Text>
                    <Text className="text-xs"><Bold>Cat 10:</Bold> A - III c <span className="text-xs text-red-300">({cate10.length})</span></Text>
                    <Text className="text-xs"><Bold>Cat 11:</Bold> A - III c Profesional <span className="text-xs text-red-300">({cate11.length})</span></Text>
                    <Text className="text-xs"><Bold>Cat 12:</Bold> B - II b <span className="text-xs text-red-300">({cate12.length})</span></Text>
                </div>
                <div className="w-6/12">
                    <Text className="text-xs"><Bold>Cat 13:</Bold> B - II c <span className="text-xs text-red-300">({cate13.length})</span></Text>
                </div>
            </div>
        </div>
    );
}

export default GrafAreaChartIV2;
