import React, { useMemo } from 'react';
import MaterialReactTable, { MRT_ColumnDef } from 'material-react-table';
import { TeamData } from './TeamData';

export default function App() {
  const columns = useMemo<MRT_ColumnDef<typeof TeamData[0]>[]>(
    () => [
      {
        accessorKey: 'number',
        header: 'Team #',
        size: 20,
      },
      {
        accessorKey: 'name',
        header: 'Name',
        size: 190,
        filterFn: 'contains',
      },
      {
        accessorKey: 'rookie_year',
        header: 'Rookie Year',
        size: 80,
      },
      {
        accessorKey: 'city',
        header: 'City',
        size: 180,
      },
      {
        accessorKey: 'state',
        header: 'State',
        size: 100,
      },

      {
        accessorKey: 'country',
        header: 'Country',
        size: 100,
      },
      {
        accessorKey: 'district',
        header: 'District',
        size: 30,
      },
    ],
    [],
  );

  return (
    <MaterialReactTable 
      columns={columns}
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
      muiTableHeadCellFilterTextFieldProps={{ placeholder: '' }}
    />
  );
};
