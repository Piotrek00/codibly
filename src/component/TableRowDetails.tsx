import { Td, Tr } from "@chakra-ui/table";
import { useState } from "react";
import { Product } from "./ColorTable";
import ProductDetails from "./ProductDetails";

function TableRowDetails({ product }: { product: Product }) {
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
        <Td>{product.color}</Td>
        <Td>{product.pantone_value}</Td>
      </Tr>
      <ProductDetails
        product={product}
        isVisible={false}
        setOpenModal={setOpenModal}
      />
    </>
  );
}

export default TableRowDetails;
