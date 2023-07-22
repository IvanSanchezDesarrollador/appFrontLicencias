import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { useFetch } from '../../../../Api/useFetch';
import { FaArrowRight, FaArrowLeft, FaSearch } from 'react-icons/fa';
import {
  Badge,
  TextInput,
  Title,
  Text
} from '@tremor/react';

import '../../../../components/pagination.css';
import Loading from '../../../../components/Loading';

const TableLicencias = () => {
  const {
    data: licensesData,
    loading: licensesLoading, // Agregar estado de carga para licensesData
    /*error: licensesError,
    handleCancelRequest: cancelLicensesRequest
    */
  } = useFetch('https://api.open-data-analytics.info/api/licenses');
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
    const filteredLicenses = licensesData.filter(
      (item) =>
        ((item.codigo_licencia && item.codigo_licencia.toLowerCase().includes(searchTerm.toLowerCase())) ?? 0) ||

        ((item.nombre_local && item.nombre_local.toLowerCase().includes(searchTerm.toLowerCase())) ?? 0) ||

        ((item.ruc && item.ruc.toLowerCase().includes(searchTerm.toLowerCase())) && 0)
    );
    setFilteredData(filteredLicenses);
    setCurrentPage(0);
  }, [licensesData, searchTerm]);

  const startIndex = currentPage * pageSize;
  const endIndex = startIndex + pageSize;
  const visibleData = filteredData.slice(startIndex, endIndex);

  if (licensesLoading) {
    return (
      <div className="flex justify-center items-center h-[40rem]">
        <Loading></Loading>
      </div>
    );
  }

  return (
    <div className='overflow-y-auto'>
      <div className="xl:flex justify-between items-center">
        
        <TextInput
          icon={FaSearch}
          placeholder="Buscar por Código de Licencia, Nombre local o RUC"
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
                <th className="py-4 px-2">Ruc</th>
                <th className="py-4 px-2">Local</th>
                <th className="py-4 px-2">Dirección</th>
                <th className="py-4 px-2">Estado</th>
                <th className="py-4 px-2">Tipo</th>
                <th className="py-4 px-2">Expedición</th>
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
                    <td className="p-2 border-b-2">{item.codigo_licencia}</td>
                    <td className="p-2 border-b-2">{item.ruc}</td>
                    <td className="p-2 border-b-2">{item.nombre_local}</td>
                    <td className="p-2 border-b-2">{item.direccion_local}</td>
                    <td className="p-2 border-b-2">{item.estado_licencia}</td>
                    <td className="p-2 border-b-2">{item.tipo_licencia}</td>
                    <td className="p-2 border-b-2">
                      <Badge color="cyan">{item.fecha_expedicion}</Badge>
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
};

export default TableLicencias;
