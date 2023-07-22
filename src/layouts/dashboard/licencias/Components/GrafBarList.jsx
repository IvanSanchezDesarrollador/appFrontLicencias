import { BarList, Bold, Flex, Text ,Title} from "@tremor/react";
import { useFetch } from "../../../../Api/useFetch";
import Loading from '../../../../components/Loading';
import { FaHotjar,FaRegFutbol,FaHotel,FaHospital, FaLaptopHouse,FaBriefcaseMedical,FaIceCream} from "react-icons/fa";

const GrafBarList = () => {

    const {
        data: licensesData,
        loading: licensesLoading,
        /*error: licensesError,
        handleCancelRequest: cancelLicensesRequest
        */
    } = useFetch("https://api.open-data-analytics.info/api/licenses");

    const restaurantes = licensesData.filter(({ giro }) => giro.includes('RESTAURANTE') || giro.includes('POLLOS') || giro.includes('POLLERIA') || giro.includes('CEVICHERIA'));
    const botica = licensesData.filter(({ giro }) => giro.includes('BOTICA') || giro.includes('FARMACIA') || giro.includes('BOUTIQUE'));
    const bodega = licensesData.filter(({ giro }) => giro.includes('BODEGA') || giro.includes('MINIMARKET') || giro.includes('CABINAS') || giro.includes('VENTA'));
    const cafeteria = licensesData.filter(({ giro }) => giro.includes('CAFETERÍA') || giro.includes('CAFE') || giro.includes('PANADERÍA') || giro.includes('CAFETIN'));
    const bazar = licensesData.filter(({ giro }) => giro.includes('BAZAR') || giro.includes('CASA') || giro.includes('CAMPO'));
    const actividades = licensesData.filter(({ giro }) => giro.includes('ACTIVIDADES'));
    const oficina = licensesData.filter(({ giro }) => giro.includes('OFICINA') || giro.includes('HOTEL') || giro.includes('HOSPEDAJE') || giro.includes('NOTARÍA'));
    const medicina = licensesData.filter(({ giro }) => giro.includes('MEDICO') || giro.includes('MÉDICO') || giro.includes('ODONTOLÓGICO') || giro.includes('ESTOMATOLÓGICO') || giro.includes('NATURISTA'));

    const cantidadRestauranteCafeteria = parseInt(restaurantes.length) + parseInt(cafeteria.length);



    const total = (parseInt(restaurantes.length) + parseInt(botica.length) + parseInt(cafeteria.length) + parseInt(bodega.length) + parseInt(bazar.length)+  parseInt(actividades.length)+ parseInt(oficina.length)+  parseInt(medicina.length));

    const data = [
        {
            name: "Bodegas,  Minimarket, Cabinas de Internet y Ventas",
            value: parseInt(bodega.length),
            icon: FaIceCream
        },
        {
            name: "Oficina, Hotel, Hospedaje y Notaria",
            value: parseInt(oficina.length),
            icon: FaHotel
        },
        {
            name: "Restaurantes - Cevicherias, cafeterías, panadería y Pollería",
            value: cantidadRestauranteCafeteria,
            icon: FaHotjar
        },
        {
            name: "Botica, Farmacia y Boutique",
            value: parseInt(botica.length),
            icon: FaHospital
        },
        {
            name: "Actividades",
            value: parseInt(actividades.length),
            icon: FaLaptopHouse
        },
        {
            name: "Bazar, Casa de Apuestas y Campos Deportivos",
            value: parseInt(bazar.length),
            icon: FaRegFutbol,
        },
        {
            name: "Medicina en general y otros",
            value: parseInt(parseInt(medicina.length) + (licensesData.length - total)),
            icon: FaBriefcaseMedical
        },
    ];
    if (licensesLoading) {
        return (
          <div className="flex justify-center items-center h-96">
            <Loading></Loading>
          </div>
        );
      } 
    return (
        <div>   
            <div className="w-full mt-4 xl:mb-5 2xl:mb-0">
            <Title className="mt-3">Años</Title>
                <Text>2019, 2020, 2021 y 2022</Text>
                
                <Flex className="mt-3">
                    <Text className="text-blue-400">
                        <Bold>Establecimiento</Bold>
                    </Text>
                    <Text className="text-red-400">
                        <Bold>Cantidad</Bold>
                    </Text>
                </Flex>
                <BarList data={data} className="mt-2 " />
            </div>
        </div>
    );
}

export default GrafBarList;
