import { LineChart,Text, Title } from "@tremor/react";
import Loading from '../../../../components/Loading';
import { useFetch } from '../../../../Api/useFetch';


const GrafLineChatAll = () => {

    const anio01 = 2019;
    const anio02 = 2020;
    const anio03 = 2021;
    const anio04 = 2022;


    const {
        data: licensesData,
        loading: licensesLoading,
        /*error: licensesError,
        handleCancelRequest: cancelLicensesRequest
        */
    } = useFetch("http://127.0.0.1:8000/api/licenses");

    const calcularTotalRecaudadoPorRangoFechas = (licensesData, fechaInicio, fechaFin) => {
        const licenciasEnRango = licensesData.filter(
            (licencia) =>
                licencia.fecha_expedicion >= fechaInicio && licencia.fecha_expedicion <= fechaFin
        );

        const totalRecaudado = licenciasEnRango.reduce(
            (acumulador, { monto_tramite }) => acumulador + parseFloat(monto_tramite ?? 0),
            0
        );
        return totalRecaudado.toFixed(2);
    };

  

    const totalRecaudado2019 = calcularTotalRecaudadoPorRangoFechas(
        licensesData,
        `${anio01}-01-01`,
        `${anio01}-12-31`
    );
    const totalRecaudado2020 = calcularTotalRecaudadoPorRangoFechas(
        licensesData,
        `${anio02}-01-01`,
        `${anio02}-12-31`
    );
    const totalRecaudado2021  = calcularTotalRecaudadoPorRangoFechas(
        licensesData,
        `${anio03}-01-01`,
        `${anio03}-12-31`
    );
    const totalRecaudado2022  = calcularTotalRecaudadoPorRangoFechas(
        licensesData,
        `${anio04}-01-01`,
        `${anio04}-12-31`
    );


    const getTotalRecaudado = () => {
        const total = licensesData.reduce((accumulador, licencia) => {
            return accumulador + parseFloat(licencia.monto_tramite)
        }, 0);
        return total.toFixed(2);
    };


    const chartdata = [
        {
            month: "2019",
            "Flujo de Dinero 2019": parseFloat((totalRecaudado2019/getTotalRecaudado())*100),
        },
        {
            month: '2020',
            "Flujo de Dinero 2019": parseFloat((totalRecaudado2020/getTotalRecaudado())*100),
        },
        {
            month: '2021',
            "Flujo de Dinero 2019": parseFloat((totalRecaudado2021/getTotalRecaudado())*100),
        },
        {
            month: '2022',
            "Flujo de Dinero 2019": parseFloat((totalRecaudado2022/getTotalRecaudado())*100),
        },
    ];

    const dataFormatter = (number) => `${Intl.NumberFormat("us").format(number).toString()}%`;

    
    if (licensesLoading) {
        return (
          <div className="flex justify-center items-center h-80">
            <Loading></Loading>
          </div>
        );
      } 
    return (
        <div className=''>
            <div className="flex justify-between items-center px-3">
            <Text>Total Recaudado (S/): {getTotalRecaudado()}</Text>
            <Title className="text-red-500">Todos los registros</Title>
            </div>
            <LineChart
                className="mt-3"
                data={chartdata}
                index="month"
                categories={[`Flujo de Dinero 2019`, "Flujo de Dinero 2020", "Flujo de Dinero 2021", "Flujo de Dinero 2022"]}
                colors={["blue", "green", "amber" , "violet"]}
                valueFormatter={dataFormatter}
                yAxisWidth={40}
            />
        </div>
    );
}

export default GrafLineChatAll;
