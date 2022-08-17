import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import { TeamData } from './TeamData';

export default function App() {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'number',
        header: 'Team #',
        size: 20,
        muiTableHeadCellFilterTextFieldProps: { placeholder: '' },
      },
      {
        accessorKey: 'name',
        header: 'Name',
        size: 190,
        muiTableHeadCellFilterTextFieldProps: { placeholder: '' },
        filterFn: 'contains',
      },
      {
        accessorKey: 'rookie_year',
        header: 'Rookie Year',
        size: 80,
        muiTableHeadCellFilterTextFieldProps: { placeholder: '' },
      },
      {
        accessorKey: 'city',
        header: 'City',
        size: 180,
        muiTableHeadCellFilterTextFieldProps: { placeholder: '' },
      },
      {
        accessorKey: 'state',
        header: 'State',
        size: 100,
        muiTableHeadCellFilterTextFieldProps: { placeholder: '' },
      },

      {
        accessorKey: 'country',
        header: 'Country',
        size: 100,
        muiTableHeadCellFilterTextFieldProps: { placeholder: '' },
      },
      {
        accessorKey: 'district',
        header: 'District',
        size: 30,
        muiTableHeadCellFilterTextFieldProps: { placeholder: '' },
      },
    ],
    [],
  );

  // @ts-ignore
  return <MaterialReactTable columns={columns}
    data={TeamData}
    enableTopToolbar={false}
    enableDensityToggle={false}
    enableFullScreenToggle={false}
    enableHiding={false}
    initialState={{
      density: 'compact',
      isFullScreen: true,
      showColumnFilters: true,
      pagination: { pageSize: 20, pageIndex: 0 }
    }}
  />;
};