import { useFetch } from '../../../../Api/useFetch'
import PropTypes from 'prop-types';
import { LineChart, Text, BadgeDelta, Title } from "@tremor/react";
import Loading from '../../../../components/Loading';

const GrafLineChartI = ({ dato }) => {
    const { anio } = dato;

    const {
        data: infractionsData,
        loading: infractionsLoading,
        /*error: licensesError,
        handleCancelRequest: cancelLicensesRequest
        */
    } = useFetch("http://127.0.0.1:8000/api/infractions");

    const calcularTotalRecaudadoPorRangoFechas = (infractionsData, fechaInicio, fechaFin) => {
        const infraccionesEnRango = infractionsData.filter(
            (infraccion) =>
                infraccion.fecha_infraccion >= fechaInicio && infraccion.fecha_infraccion <= fechaFin
        );

        const totalRecaudado = infraccionesEnRango.reduce(
            (acumulador, { monto_infraccion }) => acumulador + parseFloat(monto_infraccion ?? 0),
            0
        );
        return totalRecaudado.toFixed(2);
    };



    const totalRecaudadoEnero = calcularTotalRecaudadoPorRangoFechas(
        infractionsData,
        `${anio}-01-01`,
        `${anio}-02-01`
    );

    const totalRecaudadoFebrero = calcularTotalRecaudadoPorRangoFechas(
        infractionsData,
        `${anio}-02-01`,
        `${anio}-03-01`
    );
    const totalRecaudadoMarzo = calcularTotalRecaudadoPorRangoFechas(
        infractionsData,
        `${anio}-03-01`,
        `${anio}-04-01`
    );
    const totalRecaudadoAbril = calcularTotalRecaudadoPorRangoFechas(
        infractionsData,
        `${anio}-04-01`,
        `${anio}-05-01`
    );
    const totalRecaudadoMayo = calcularTotalRecaudadoPorRangoFechas(
        infractionsData,
        `${anio}-05-01`,
        `${anio}-06-01`
    );
    const totalRecaudadoJunio = calcularTotalRecaudadoPorRangoFechas(
        infractionsData,
        `${anio}-06-01`,
        `${anio}-07-01`
    );
    const totalRecaudadoJulio = calcularTotalRecaudadoPorRangoFechas(
        infractionsData,
        `${anio}-07-01`,
        `${anio}-08-01`
    );
    const totalRecaudadoAgosto = calcularTotalRecaudadoPorRangoFechas(
        infractionsData,
        `${anio}-08-01`,
        `${anio}-09-01`
    );
    const totalRecaudadoSetiembre = calcularTotalRecaudadoPorRangoFechas(
        infractionsData,
        `${anio}-09-01`,
        `${anio}-10-01`
    );
    const totalRecaudadoOctubre = calcularTotalRecaudadoPorRangoFechas(
        infractionsData,
        `${anio}-10-01`,
        `${anio}-11-01`
    );
    const totalRecaudadoNoviembre = calcularTotalRecaudadoPorRangoFechas(
        infractionsData,
        `${anio}-11-01`,
        `${anio}-12-01`
    );
    const totalRecaudadoDiciembre = calcularTotalRecaudadoPorRangoFechas(
        infractionsData,
        `${anio}-12-01`,
        `${anio}-12-31`
    );

    const totalRecaudadoGeneralporAño = calcularTotalRecaudadoPorRangoFechas(
        infractionsData,
        `${anio}-01-01`,
        `${anio}-12-31`
    );

    const chartdata = [
        {
            year: "Ene",
            "Flujo de Dinero": parseFloat((totalRecaudadoEnero / totalRecaudadoGeneralporAño) * 100),
        },
        {
            year: 'Feb',
            "Flujo de Dinero": parseFloat((totalRecaudadoFebrero / totalRecaudadoGeneralporAño) * 100),
        },
        {
            year: 'Mar',
            "Flujo de Dinero": parseFloat((totalRecaudadoMarzo / totalRecaudadoGeneralporAño) * 100),
        },
        {
            year: 'Abr',
            "Flujo de Dinero": parseFloat((totalRecaudadoAbril / totalRecaudadoGeneralporAño) * 100),
        },
        {
            year: 'May',
            "Flujo de Dinero": parseFloat((totalRecaudadoMayo / totalRecaudadoGeneralporAño) * 100),
        },
        {
            year: 'Jun',
            "Flujo de Dinero": parseFloat((totalRecaudadoJunio / totalRecaudadoGeneralporAño) * 100),
        },
        {
            year: 'Jul',
            "Flujo de Dinero": parseFloat((totalRecaudadoJulio / totalRecaudadoGeneralporAño) * 100),
        },
        {
            year: 'Ago',
            "Flujo de Dinero": parseFloat((totalRecaudadoAgosto / totalRecaudadoGeneralporAño) * 100),
        },
        {
            year: 'Set',
            "Flujo de Dinero": parseFloat((totalRecaudadoSetiembre / totalRecaudadoGeneralporAño) * 100),
        },
        {
            year: 'Oct',
            "Flujo de Dinero": parseFloat((totalRecaudadoOctubre / totalRecaudadoGeneralporAño) * 100),
        },
        {
            year: 'Nov',
            "Flujo de Dinero": parseFloat((totalRecaudadoNoviembre / totalRecaudadoGeneralporAño) * 100),
        },
        {
            year: 'Dic',
            "Flujo de Dinero": parseFloat((totalRecaudadoDiciembre / totalRecaudadoGeneralporAño) * 100),
        },
    ];


    const dataFormatter = (number) => `${Intl.NumberFormat("us").format(number).toString()}%`;

    if (infractionsLoading) {
        return (
            <div className="flex justify-center items-center h-80">
                <Loading></Loading>
            </div>
        );
    }

    return (
        <div className='overflow-x-scroll xl:overflow-hidden'>
            <div className="2xl:flex justify-between items-center px-3">
                <div className='flex items-center'>
                    <Text>Total recaudado (S/): {totalRecaudadoGeneralporAño}</Text>
                    <BadgeDelta className='ml-2' deltaType="increase" size="xs">
                        100%
                    </BadgeDelta>
                </div>

                <Title className='text-blue-500 2xl:mt-0 mt-2'> Año: 2022</Title>
            </div>
            <LineChart
                className="h-80 xl:w-full w-[60rem]"
                data={chartdata}
                index="year"
                categories={["Flujo de Dinero"]}
                colors={["cyan"]}
                valueFormatter={dataFormatter}
                yAxisWidth={40}
            />
        </div>
    );
};

GrafLineChartI.propTypes = {
    dato: PropTypes.shape({
        anio: PropTypes.number.isRequired,
    }).isRequired
};

export default GrafLineChartI;
