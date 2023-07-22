import { LineChart,Text, Title } from "@tremor/react";
import { useFetch } from '../../../../Api/useFetch';
import Loading from '../../../../components/Loading';

const GrafLineChat = (anio) => {

    const {
        data: licensesData,
        loading: licensesLoading,
        /*error: licensesError,
        handleCancelRequest: cancelLicensesRequest
        */
    } = useFetch("https://api.open-data-analytics.info/api/licenses");



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

    const totalRecaudadoEnero = calcularTotalRecaudadoPorRangoFechas(
        licensesData,
        `${anio.anio}-01-01`,
        `${anio.anio}-02-01`
    );
    const totalRecaudadoFebrero = calcularTotalRecaudadoPorRangoFechas(
        licensesData,
        `${anio.anio}-02-01`,
        `${anio.anio}-03-01`
    );
    const totalRecaudadoMarzo = calcularTotalRecaudadoPorRangoFechas(
        licensesData,
        `${anio.anio}-03-01`,
        `${anio.anio}-04-01`
    );
    const totalRecaudadoAbril = calcularTotalRecaudadoPorRangoFechas(
        licensesData,
        `${anio.anio}-04-01`,
        `${anio.anio}-05-01`
    );
    const totalRecaudadoMayo = calcularTotalRecaudadoPorRangoFechas(
        licensesData,
        `${anio.anio}-05-01`,
        `${anio.anio}-06-01`
    );
    const totalRecaudadoJunio = calcularTotalRecaudadoPorRangoFechas(
        licensesData,
        `${anio.anio}-06-01`,
        `${anio.anio}-07-01`
    );
    const totalRecaudadoJulio = calcularTotalRecaudadoPorRangoFechas(
        licensesData,
        `${anio.anio}-07-01`,
        `${anio.anio}-08-01`
    );
    const totalRecaudadoAgosto = calcularTotalRecaudadoPorRangoFechas(
        licensesData,
        `${anio.anio}-08-01`,
        `${anio.anio}-09-01`
    );
    const totalRecaudadoSetiembre = calcularTotalRecaudadoPorRangoFechas(
        licensesData,
        `${anio.anio}-09-01`,
        `${anio.anio}-10-01`
    );
    const totalRecaudadoOctubre = calcularTotalRecaudadoPorRangoFechas(
        licensesData,
        `${anio.anio}-10-01`,
        `${anio.anio}-11-01`
    );
    const totalRecaudadoNoviembre = calcularTotalRecaudadoPorRangoFechas(
        licensesData,
        `${anio.anio}-11-01`,
        `${anio.anio}-12-01`
    );
    const totalRecaudadoDiciembre = calcularTotalRecaudadoPorRangoFechas(
        licensesData,
        `${anio.anio}-12-01`,
        `${anio.anio}-12-31`
    );

    const totalRecaudadoGeneralporAño = calcularTotalRecaudadoPorRangoFechas(
        licensesData,
        `${anio.anio}-01-01`,
        `${anio.anio}-12-31`
    );




    const chartdata = [
        {
            year: "Ene",
            "Flujo de Dinero": parseFloat((totalRecaudadoEnero/totalRecaudadoGeneralporAño)*100),
        },
        {
            year: 'Feb',
            "Flujo de Dinero": parseFloat((totalRecaudadoFebrero/totalRecaudadoGeneralporAño)*100),
        },
        {
            year: 'Mar',
            "Flujo de Dinero": parseFloat((totalRecaudadoMarzo/totalRecaudadoGeneralporAño)*100),
        },
        {
            year: 'Abr',
            "Flujo de Dinero": parseFloat((totalRecaudadoAbril/totalRecaudadoGeneralporAño)*100),
        },
        {
            year: 'May',
            "Flujo de Dinero": parseFloat((totalRecaudadoMayo/totalRecaudadoGeneralporAño)*100),
        },
        {
            year: 'Jun',
            "Flujo de Dinero": parseFloat((totalRecaudadoJunio/totalRecaudadoGeneralporAño)*100),
        },
        {
            year: 'Jul',
            "Flujo de Dinero": parseFloat((totalRecaudadoJulio/totalRecaudadoGeneralporAño)*100),
        },
        {
            year: 'Ago',
            "Flujo de Dinero": parseFloat((totalRecaudadoAgosto/totalRecaudadoGeneralporAño)*100),
        },
        {
            year: 'Set',
            "Flujo de Dinero": parseFloat((totalRecaudadoSetiembre/totalRecaudadoGeneralporAño)*100),
        },
        {
            year: 'Oct',
            "Flujo de Dinero": parseFloat((totalRecaudadoOctubre/totalRecaudadoGeneralporAño)*100),
        },
        {
            year: 'Nov',
            "Flujo de Dinero": parseFloat((totalRecaudadoNoviembre/totalRecaudadoGeneralporAño)*100),
        },
        {
            year: 'Dic',
            "Flujo de Dinero": parseFloat((totalRecaudadoDiciembre/totalRecaudadoGeneralporAño)*100),
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
        <div className='overflow-x-scroll xl:overflow-hidden'>
            <div className="2xl:flex justify-between items-center px-3">
            <Text>Total Recaudado (S/): {totalRecaudadoGeneralporAño}</Text>
            <Title className={`2xl:mt-0 ${anio.anio === 2019 ? "text-blue-600" : anio.anio === 2020 ? "text-violet-500" : anio.anio === 2021 ? "text-amber-500" : anio.anio === 2022 ? 'text-green-500' : ''}`}> {anio.anio}</Title>
            </div>
           
            <LineChart
                className="2xl:mt-3 xl:mt-3 xl:w-full w-[60rem]"
                data={chartdata}
                index="year"
                categories={["Flujo de Dinero"]}
                colors={[`${anio.anio === 2019 ? 'indigo' : anio.anio === 2020 ? 'fuchsia': anio.anio === 2021? 'amber': anio.anio === 2022 ? 'emerald':''}`]}
                valueFormatter={dataFormatter}
                yAxisWidth={40}
            />
        </div>
    );
}

export default GrafLineChat;
