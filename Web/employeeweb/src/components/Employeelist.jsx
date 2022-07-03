import React, { useMemo, useState } from 'react';
import { useTable, usePagination } from 'react-table';
import axios from 'axios';

export default function Employeelist() {
  const [data, setData] = useState([]);
  useMemo(() => {
    axios
      .get('https://localhost:7243/employeelist', {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('generatedToken')}`,
        },
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  const columns = useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id',
      },
      {
        Header: 'Employee Name',
        accessor: 'employeeName',
      },
      {
        Header: 'Age',
        accessor: 'age',
      },
      {
        Header: 'DOB',
        accessor: 'dob',
      },
      {
        Header: 'Created On',
        accessor: 'createdOn',
      },
    ],

    []
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    prepareRow,
  } = useTable({ columns, data: data }, usePagination);

  const { pageIndex } = state;
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table
        {...getTableProps()}
        className="w-full text-sm text-left text-gray-500 dark:text-gray-400"
      >
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()} className="px-6 py-3">
                  {column.render('Header')}
                </th>
              ))}
              <th className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
              <th className="px-6 py-3">
                <span className="sr-only">Delete</span>
              </th>
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className="bg-white border-b hover:bg-gray-50"
              >
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()} className="px-6 py-4">
                      {cell.render('Cell')}
                    </td>
                  );
                })}
                <td className="px-6 py-4 text-right">
                  <button className="font-medium text-blue-600 hover:underline">
                    Edit
                  </button>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="font-medium text-red-600 hover:underline">
                    Remove
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex justify-end">
        <span className="mr-2 flex items-center text-sm font-medium text-gray-500">
          Showing
          <span className="ml-1">
            {pageIndex + 1} of {pageOptions.length}
          </span>
        </span>
        <div>
          <button
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
            className="pagination-btn"
          >
            Previous
          </button>
          <button
            onClick={() => nextPage()}
            disabled={!canNextPage}
            className="pagination-btn"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
