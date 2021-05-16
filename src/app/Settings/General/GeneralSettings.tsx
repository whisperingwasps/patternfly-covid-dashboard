import * as React from 'react';
import { PageSection, Title } from '@patternfly/react-core';
import {
  Table,
  TableHeader,
  TableBody,
  sortable,
  SortByDirection,
  wrappable,
  cellWidth,
  info
} from '@patternfly/react-table';

const columnsData = [
  { title: 'Repositories', transforms: [sortable] },
  {
    title: 'Branches',
    transforms: [
      info({
        tooltip: 'More information about branches'
      }),
      sortable
    ]
  },
  { title: 'Pull requests', transforms: [sortable] },
  {
    title: 'Workspaces',
    transforms: [sortable, wrappable, cellWidth(20)]
  },
  {
    title: 'Last commit',
    transforms: [
      info({
        tooltip: 'More information about commits'
      })
    ]
  }
];
const rowsData = [
  ['one', 'two', 'a', 'four', 'five'],
  ['a', 'two', 'k', 'four', 'five'],
  ['p', 'two', 'b', 'four', 'five']
];
const sortBYData = {};


const GeneralSettings: React.FunctionComponent = () => {
  const [columns, setColumns] = React.useState(columnsData);  
  const [rows, setRows] = React.useState(rowsData);  
  const [sortBy, setSortBy] = React.useState(sortBYData);  

  const onSort = (_event, index, direction) => {
    const sortedRows = rows.sort((a, b) => (a[index] < b[index] ? -1 : a[index] > b[index] ? 1 : 0));    
      setSortBy( {
        index,
        direction
      })
      setRows(direction === SortByDirection.asc ? sortedRows : sortedRows.reverse())
    
  }

  return(
  <PageSection>
    <Title headingLevel="h1" size="lg">
      General Settings Page Title
    </Title>
    <Table aria-label="Sortable Table" sortBy={sortBy} onSort={onSort} cells={columns} rows={rows}>
        <TableHeader />
        <TableBody />
      </Table>
  </PageSection>
  )
};

export { GeneralSettings };
