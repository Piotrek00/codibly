import {
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
} from "@chakra-ui/react";
import { useState } from "react";
import TableRow from "./TableRow";

export default interface Product {
  name: string;
  id: number;
  year: number;
  color: string;
  pantone_value: string;
}

interface Colory {
  data: Product[] | Product;
}

function ColorTable({ kolory, loading }: { kolory: Colory }) {
  const [search, setSearch] = useState("");
  const [modalIsOpen, setIsModalOpen] = useState(false);

  if (loading) {
    return <Text>...</Text>;
  }

  return (
    <div>
      <TableContainer borderRadius="10px" boxShadow="lg">
        <Table variant="simple" size="lg">
          <Thead background="#F7FAFC">
            <Tr>
              <Th isNumeric>ID</Th>
              <Th>NAME</Th>
              <Th isNumeric>YEAR</Th>
            </Tr>
          </Thead>
          <Tbody>
            {kolory &&
              Array.isArray(kolory.data) &&
              kolory.data.map((kolor: Product) => {
                return <TableRow product={kolor} key={kolor.id} />;
              })}
            {kolory && kolory.data && !Array.isArray(kolory.data) && (
              <TableRow product={kolory.data} key={kolory.data.id} />
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default ColorTable;
