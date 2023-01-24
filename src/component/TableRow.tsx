import { Td, Tr } from "@chakra-ui/table";
import { useState } from "react";
import ProductDetails from "./ProductDetails";

function TableRow({ product }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Tr
        fontSize="lg"
        fontWeight="semibold"
        style={{ backgroundColor: product.color }}
        key={product.id}
        onClick={() => {
          setOpenModal(true);
        }}
      >
        <Td>{product.id}</Td>
        <Td>{product.name}</Td>
        <Td>{product.year}</Td>
      </Tr>
      <ProductDetails
        product={product}
        isVisible={openModal}
        setOpenModal={setOpenModal}
      />
    </>
  );
}

export default TableRow;
