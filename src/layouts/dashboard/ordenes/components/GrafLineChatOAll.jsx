import { useFetch } from '../../../../Api/useFetch';
import { LineChart,Text, Title } from "@tremor/react";
import Loading from "../../../../components/Loading";
const GrafLineChatOAll = () => {
    const {
        data: ordersData,
        loading: ordersLoading,
        /*error: licensesError,
        handleCancelRequest: cancelLicensesRequest
        */
    } = useFetch("http://127.0.0.1:8000/api/orders");

    const calcularTotalRecaudadoPorRangoFechas = (ordersData, fechaInicio, fechaFin) => {
        const licenciasEnRango = ordersData.filter(
            (orden) =>
            orden.fecha_orden >= fechaInicio && orden.fecha_orden <= fechaFin
        );

        const totalRecaudado = licenciasEnRango.reduce(
            (acumulador, { monto }) => acumulador + parseFloat(monto ?? 0),
            0
        );

        return totalRecaudado.toFixed(2);
    };

    const getTotalRecaudado = () => {
        const total = ordersData.reduce((accumulador, orden) => {
            return accumulador + (parseFloat(orden.monto))
        }, 0);
        return total.toFixed(2);
    };


    const totalRecaudadoGeneralporAño2019 = calcularTotalRecaudadoPorRangoFechas(
        ordersData,
        `2019-01-01`,
        `2019-12-31`
    );
    const totalRecaudadoGeneralporAño2020 = calcularTotalRecaudadoPorRangoFechas(
        ordersData,
        `2020-01-01`,
        `2020-12-31`
    );
    const totalRecaudadoGeneralporAño2021 = calcularTotalRecaudadoPorRangoFechas(
        ordersData,
        `2021-01-01`,
        `2021-12-31`
    );
    const totalRecaudadoGeneralporAño2022 = calcularTotalRecaudadoPorRangoFechas(
        ordersData,
        `2022-01-01`,
        `2022-12-31`
    );

    const chartdata = [
        {
            year: "2019",
            "Flujo de Dinero": parseFloat((totalRecaudadoGeneralporAño2019/getTotalRecaudado())*100),
        },
        {
            year: '2020',
            "Flujo de Dinero": parseFloat((totalRecaudadoGeneralporAño2020/getTotalRecaudado())*100),
        },
        {
            year: '2022',
            "Flujo de Dinero": parseFloat((totalRecaudadoGeneralporAño2021/getTotalRecaudado())*100),
        },
        {
            year: '2023',
            "Flujo de Dinero": parseFloat((totalRecaudadoGeneralporAño2022/getTotalRecaudado())*100),
        },
    ];

    const dataFormatter = (number) => `${Intl.NumberFormat("us").format(number).toString()}%`;
    
    if (ordersLoading) {
        return (
          <div className="flex justify-center items-center h-80 mt-9">
            <Loading></Loading>
          </div>
        );
      } 
    return (
        <div className=''>
            <div className="2xl:flex justify-between items-center px-3">
            <Text>Total recaudado (S/): {getTotalRecaudado()}</Text>
            <Title className='text-red-500'>2019-2022</Title>
            </div>
           
            <LineChart
                className="h-80"
                data={chartdata}
                index="year"
                categories={["Flujo de Dinero"]}
                colors={["rose"]}
                valueFormatter={dataFormatter}
                yAxisWidth={40}
            />
        </div>
    );
}

export default GrafLineChatOAll;
