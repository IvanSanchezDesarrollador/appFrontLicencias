import { Bold, Text, Title, Flex , BarList } from "@tremor/react";
import { useFetch } from "../../../../Api/useFetch";
import Loading from "../../../../components/Loading";
import {FaFileAlt} from "react-icons/fa";

const GrafDonutChartIV5 = () => {
    const {
        data: infractionsData,
        loading: infractionsLoading,
        /*error: licensesError,
        handleCancelRequest: cancelLicensesRequest
        */
    } = useFetch("https://api.open-data-analytics.info/api/infractions");

    const vigente = infractionsData.filter(({ tuc_estado }) => (tuc_estado?.includes('VIGENTE') ?? false));
    const vencido = infractionsData.filter(({ tuc_estado }) => (tuc_estado?.includes('VENCIDO') ?? false));
    const autorizado = infractionsData.filter(({ tuc_estado }) => (tuc_estado?.includes('Autorizado') ?? false));
    const habilitado = infractionsData.filter(({ tuc_estado }) => (tuc_estado?.includes('Habilitado') ?? false));
    const seDesconoce = infractionsData.filter(({ tuc_estado }) => (tuc_estado?.includes('-') ?? false));

    const data = [
        {
            name: "Se Desconoce",
            value: parseInt(seDesconoce.length),
            icon: FaFileAlt
        },
        {
            name: "Vigente",
            value: parseInt(vigente.length),
            icon: FaFileAlt
        },
        {
            name: "Vencidas",
            value: parseInt(vencido.length),
            icon: FaFileAlt
        },
        {
            name: "Autorizado",
            value: parseInt(autorizado.length),
            icon: FaFileAlt
        },
        {
            name: "Habilitado",
            value: parseInt(habilitado.length),
            icon: FaFileAlt 
        },
    ];
    if (infractionsLoading) {
        return (
            <div className="flex justify-center items-center h-72">
                <Loading></Loading>
            </div>)
    }

    return (
        <div>   
        <div className="w-full mt-3">
        <Title className="mt-3">Años</Title>
            <Text>2022</Text>
            
            <Flex className="mt-7">
                <Text className="text-blue-400">
                    <Bold>Establecimiento</Bold>
                </Text>
                <Text className="text-red-400">
                    <Bold>Cantidad</Bold>
                </Text>
            </Flex>
            <BarList data={data} className="mt-2 " color="violet" />
        </div>
    </div>
    );
}

export default GrafDonutChartIV5;
