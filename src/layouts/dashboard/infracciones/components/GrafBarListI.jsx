import { useFetch } from "../../../../Api/useFetch";
import Loading from "../../../../components/Loading";
import { FaHotjar,FaHotel,FaHospital, FaLaptopHouse,FaBriefcaseMedical,FaIceCream,FaRoad,FaFileAlt} from "react-icons/fa";
import { BarList, Bold, Flex ,Title, Text} from "@tremor/react";

const GrafBarListI = () => {
    const {
        data: infractionsData,
        loading: infractionsLoading,
        /*error: licensesError,
        handleCancelRequest: cancelLicensesRequest
        */
    } = useFetch("https://api.open-data-analytics.info/api/infractions");

    const jirones = infractionsData.filter(({ lugar_infraccion }) => (lugar_infraccion?.includes('JR') ?? false));
    const avenidas = infractionsData.filter(({ lugar_infraccion }) => (lugar_infraccion?.includes('AV') ?? false));
    const plaza = infractionsData.filter(({ lugar_infraccion }) => (lugar_infraccion?.includes('PLAZA') ?? false));
    const via = infractionsData.filter(({ lugar_infraccion }) => (lugar_infraccion?.includes('VÍA')  ?? false));
    const carretera = infractionsData.filter(({ lugar_infraccion }) => (lugar_infraccion?.includes('CARRETERA') ?? false));

    const total = (parseInt(jirones.length) + parseInt(avenidas.length) + parseInt(plaza.length) + parseInt(via.length) + parseInt(carretera.length));

    const data = [
        {
            name: "Jirones",
            value: parseInt(jirones.length),
            icon: FaRoad
        },
        {
            name: "Avenidas",
            value: parseInt(avenidas.length),
            icon: FaRoad
        },
        {
            name: "Plazas y Plazuelas",
            value: parseInt(plaza.length),
            icon: FaRoad
        },
        {
            name: "Vias",
            value: parseInt(via.length),
            icon: FaRoad
        },
        {
            name: "Carreteras",
            value: parseInt(carretera.length),
            icon: FaRoad
        },
        {
            name: "Frontis, entre otros.",
            value: parseInt(parseInt(infractionsData.length) - (total)),
            icon: FaRoad
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
        <div className="w-full mt-7">
        <Title className="mt-3">Años</Title>
            <Text>2022</Text>
            
            <Flex className="mt-3">
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

export default GrafBarListI;
