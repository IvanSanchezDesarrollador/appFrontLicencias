import { BarChart, Text } from "@tremor/react";
import { useFetch } from "../../../../Api/useFetch";
import Loading from '../../../../components/Loading';

const GrafBarChart = () => {

    const {
        data: licensesData,
        loading: licensesLoading,
        /*error: licensesError,
        handleCancelRequest: cancelLicensesRequest
        */
    } = useFetch("https://api.open-data-analytics.info/api/licenses");

    const noAplica = licensesData.filter(({ nivel_riesgo }) => nivel_riesgo.includes('NO APLICA'));
    const riesgoBajo = licensesData.filter(({ nivel_riesgo }) => nivel_riesgo.includes('ITSE Riesgo bajo'));
    const riesgoMedio = licensesData.filter(({ nivel_riesgo }) => nivel_riesgo.includes('ITSE Riesgo medio'));
    const riesgoAlto = licensesData.filter(({ nivel_riesgo }) => nivel_riesgo.includes('ITSE Riesgo alto'));
    const riesgoMuyAlto = licensesData.filter(({ nivel_riesgo }) => nivel_riesgo.includes('ITSE Riesgo muy alto'));


    const chartdata = [
        {
            name: "No Aplica",
            "Cantidad": parseInt(noAplica.length),
        },
        {
            name: "ITSE R.B",
            "Cantidad": parseInt(riesgoBajo.length),
        },
        {
            name: "ITSE R.M",
            "Cantidad": parseInt(riesgoMedio.length),
        },
        {
            name: "ITSE R.A",
            "Cantidad": parseInt(riesgoAlto.length),
        },
        {
            name: "ITSE R.MA",
            "Cantidad": parseInt(riesgoMuyAlto.length),
        },
    ];

    const dataFormatter = (number) => {
        return Intl.NumberFormat("us").format(number).toString();
    };
    if (licensesLoading) {
        return (
          <div className="flex justify-center items-center h-72">
            <Loading></Loading>
          </div>
        );
      }

    return (
        <div className="">
            <BarChart
                className="mt-1 h-[16rem]"
                data={chartdata}
                index="name"
                categories={["Cantidad"]}
                colors={["red"]}
                valueFormatter={dataFormatter}
                yAxisWidth={48}
            />
             <div className='w-full flex justify-between gap-2 mt-3'>
                <div className='w-6/12'>

                    <div className='md:flex items-center'>
                         <Text>NO APLICA <span className="text-xs text-red-400">({noAplica.length})</span></Text>
                    </div>
                    <div className='md:flex items-center'>
                         <Text> ITSE (RB) Riesgo bajo <span className="text-xs text-red-400">({riesgoBajo.length})</span></Text>
                    </div>
                    <div className='md:flex items-center'>
                        <Text>ITSE (RM) Riesgo medio <span className="text-xs text-red-400">({riesgoMedio.length})</span></Text>
                    </div>

                </div>
                <div className='w-6/12 py-0'>
                    <div className='md:flex items-center'>
                         <Text>ITSE (RA) Riesgo alto <span className="text-xs text-red-400">({riesgoAlto.length})</span></Text>
                    </div>
                    <div className='md:flex items-center'>
                         <Text>ITSE (RMA) Riesgo muy alto <span className="text-xs text-red-400">({riesgoMuyAlto.length})</span></Text>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GrafBarChart;
