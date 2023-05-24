import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';

interface IProps<T> {
  data: T[];
  columns: {
    Header: string;
    Cell: (item: T) => JSX.Element;
  }[]
}

function CustomTable<T>({ columns, data }: IProps<T>) {
  return (
    <TableContainer borderRadius="8px">
      <Table variant="striped" colorScheme="tableColor">
        <Thead>
          <Tr>
            {columns.map((item, idx) => (
              <Th key={idx}>{item.Header}</Th>  
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {data.map((tdItem: any, index: number) => (
            <Tr key={index}>
              {columns.map((item, idx) => (
                <Td key={idx}>{item.Cell(tdItem)}</Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;