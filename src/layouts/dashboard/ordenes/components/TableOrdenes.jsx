import { useFetch } from '../../../../Api/useFetch';
import Loading from "../../../../components/Loading";
import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { FaArrowRight, FaArrowLeft, FaSearch } from 'react-icons/fa';
import {
    Badge,
    TextInput,
    Title,
} from '@tremor/react';

import '../../../../components/pagination.css';

const TableOrdenes = () => {
    const {
        data: ordersData,
        loading: ordersLoading,
        /*error: licensesError,
        handleCancelRequest: cancelLicensesRequest
        */
    } = useFetch("https://api.open-data-analytics.info/api/orders");

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
        const filteredLicenses = ordersData.filter(
            (item) =>
                ((item.razon_social && item.razon_social.toLowerCase().includes(searchTerm.toLowerCase())) ?? 0) ||

                ((item.fuente_financiamiento && item.fuente_financiamiento.toLowerCase().includes(searchTerm.toLowerCase())) ?? 0) ||

                ((item.tipo_orden && item.tipo_orden.toLowerCase().includes(searchTerm.toLowerCase())) && 0)
        );
        setFilteredData(filteredLicenses);
        setCurrentPage(0);
    }, [ordersData, searchTerm]);

    const startIndex = currentPage * pageSize;
    const endIndex = startIndex + pageSize;
    const visibleData = filteredData.slice(startIndex, endIndex);

    if (ordersLoading) {
        return (
            <div className="flex justify-center items-center h-72">
                <Loading></Loading>
            </div>
        );
    }



    return (
        <div className='overflow-y-auto'>
            <div className="2xl:flex justify-between items-center">
                <TextInput
                    icon={FaSearch}
                    placeholder="Buscar por Razón Social, Fuente de Financiamiento o Tipo de Orden"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="2xl:w-1/3 mt-3 mb-2"
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
                                <th className="py-4 px-2">Periodo Anual</th>
                                <th className="py-4 px-2">Periodo Mensual</th>
                                <th className="py-4 px-2">Tipo de orden</th>
                                <th className="py-4 px-2">Numero de Orden</th>
                                <th className="py-4 px-2">Razon Social</th>
                                <th className="py-4 px-2">Fuente de Financiamiento</th>
                                <th className="py-4 px-2">Monto</th>
                                <th className="py-4 px-2">Fecha de Orden</th>
                                <th className="py-4 px-2">Fecha de Corte</th>
                            </tr>
                        </thead>

                        <tbody>
                            {visibleData.length === 0 ? <>
                                <tr className='w-full h-full justify-center items-center'>
                                    <td colSpan={14} className='2xl:text-center'>No hay datos disponibles</td>
                                </tr>
                            </> : (
                                visibleData.map((item, itemIterador) => (
                                    <tr key={item.id}>
                                        <td className="p-2 border-b-2 ">{itemIterador + 1}</td>
                                        <td className="p-2 border-b-2 ">{item.departamento}</td>
                                        <td className="p-2 border-b-2">{item.periodo_anual}</td>
                                        <td className="p-2 border-b-2">{item.periodo_mensual}</td>
                                        <td className="p-2 border-b-2">{item.tipo_orden}</td>
                                        <td className="p-2 border-b-2">{item.numero_orden}</td>
                                        <td className="p-2 border-b-2">{item.razon_social}</td>
                                        <td className="p-2 border-b-2">{item.fuente_financiamiento}</td>
                                        <td className="p-2 border-b-2">{item.monto}</td>
                                        <td className="p-2 border-b-2">
                                            <Badge color="cyan">{item.fecha_orden}</Badge>
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

export default TableOrdenes;
