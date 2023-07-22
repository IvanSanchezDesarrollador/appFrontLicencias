import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { FaArrowRight, FaArrowLeft, FaSearch } from 'react-icons/fa';
import { useFetch } from '../../../../Api/useFetch'
import {
    Badge,
    TextInput,
    Title,
} from '@tremor/react';

import '../../../../components/pagination.css';
import Loading from '../../../../components/Loading';

const TableInfracciones = () => {
    const {
        data: infractionsData,
        loading: infractionsLoading,
        /*error: licensesError,
        handleCancelRequest: cancelLicensesRequest
        */
    } = useFetch("https://api.open-data-analytics.info/api/infractions");
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(0);

    // eslint-disable-next-line no-unused-vars
    const [pageSize, setPageSize] = useState(20);
    const [filteredData, setFilteredData] = useState([]);
    const pageCount = Math.ceil(filteredData.length / pageSize);
    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };
    useEffect(() => {
        const filteredLicenses = infractionsData.filter(
            (item) =>
                ((item.lugar_infraccion && item.lugar_infraccion.toLowerCase().includes(searchTerm.toLowerCase())) ?? 0) ||

                ((item.empresa && item.empresa.toLowerCase().includes(searchTerm.toLowerCase())) ?? 0) ||

                ((item.placa_vehiculo && item.placa_vehiculo.toLowerCase().includes(searchTerm.toLowerCase())) && 0)
        );
        setFilteredData(filteredLicenses);
        setCurrentPage(0);
    }, [infractionsData, searchTerm]);

    const startIndex = currentPage * pageSize;
    const endIndex = startIndex + pageSize;
    const visibleData = filteredData.slice(startIndex, endIndex);

    if (infractionsLoading) {
        return (
            <div className="flex justify-center items-center h-72">
                <Loading></Loading>
            </div>
        );
    }
    return (
        <div className='overflow-y-auto w-full'>
            <div className="xl:flex justify-between items-center">
                <TextInput
                    icon={FaSearch}
                    placeholder="Buscar por Lugar de Infracción, Empresa o Placa de Vehículo"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="xl:w-1/3 mt-3 mb-2"
                />

                <Title className="mr-6"> Total: {filteredData.length}</Title>
            </div>

            <div className="h-[40rem] overflow-y-auto">
                <div className="table-container">
                    <table className="w-full capitalize">
                        <thead className="sticky top-0 bg-gray-100 rounded-lg">
                            <tr>
                                <th className="py-4 px-2">#</th>
                                <th className="py-4 px-2">Lugar</th>
                                <th className="py-4 px-2">Codigo</th>
                                <th className="py-4 px-2">Lugar de Infraccion</th>
                                <th className="py-4 px-2">Placa</th>
                                <th className="py-4 px-2">Empresa</th>
                                <th className="py-4 px-2">Infraccion</th>
                                <th className="py-4 px-2">Transporte</th>
                                <th className="py-4 px-2">Servicio</th>
                                <th className="py-4 px-2">TUC</th>
                                <th className="py-4 px-2">Fecha Infraccion</th>
                                <th className="py-4 px-2">Internamiento</th>
                                <th className="py-4 px-2">DesInternamiento</th>
                                <th className="py-4 px-2">Corte</th>
                            </tr>
                        </thead>

                        <tbody>
                            {visibleData.length === 0 ? <>
                                <tr className='w-full h-full justify-center items-center'>
                                    <td colSpan={14} className='xl:text-center'>No hay datos disponibles</td>
                                </tr>
                            </> : (

                                visibleData.map((item, itemIterador) => (
                                    <tr key={item.id}>
                                        <td className="p-2 border-b-2 ">{itemIterador + 1}</td>
                                        <td className="p-2 border-b-2 ">{item.departamento}</td>
                                        <td className="p-2 border-b-2">{item.codigo_infraccion}</td>
                                        <td className="p-2 border-b-2">{item.lugar_infraccion}</td>
                                        <td className="p-2 border-b-2">{item.placa_vehiculo}</td>
                                        <td className="p-2 border-b-2">{item.empresa}</td>
                                        <td className="p-2 border-b-2">{item.infraccion}</td>
                                        <td className="p-2 border-b-2">{item.tipo_transporte}</td>
                                        <td className="p-2 border-b-2">{item.tipo_servicio}</td>
                                        <td className="p-2 border-b-2">{item.tuc_estado}</td>
                                        <td className="p-2 border-b-2">
                                            <Badge color="cyan">{item.fecha_infraccion}</Badge>
                                        </td>
                                        <td className="p-2 border-b-2">
                                            <Badge color="emerald">{item.fecha_internamiento}</Badge>
                                        </td>
                                        <td className="p-2 border-b-2">
                                            <Badge color="emerald">{item.fecha_desinternamiento}</Badge>
                                        </td>
                                        <td className="p-2 border-b-2">
                                            <Badge color="emerald">{item.fecha_corte}</Badge>
                                        </td>
                                    </tr>
                                ))


                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="pagination ml-48">
                <ReactPaginate
                    className="flex gap-1 py-3 mt-4 justify-end items-center"
                    previousLabel={<FaArrowLeft />}
                    nextLabel={<FaArrowRight />}
                    breakLabel={'...'}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageChange}
                    pageClassName="page-num"
                    containerClassName={'pagination-container'}
                    previousLinkClassName={'pagination-link'}
                    nextLinkClassName={'pagination-link'}
                    disabledClassName={'pagination-disabled'}
                    activeClassName={'pagination-active'}
                />
            </div>
        </div>
    );
}

export default TableInfracciones;
