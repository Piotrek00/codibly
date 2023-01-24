import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
} from "@chakra-ui/react";
import { type } from "os";
import { Product } from "./ColorTable";
import TableRowDetails from "./TableRowDetails";

function ProductDetails(
  { product }: { product: Product },
  isVisible: boolean,
  setOpenModal: (arg0: boolean) => void
): any {
  return (
    product &&
    isVisible && (
      <Modal
        size="2xl"
        isOpen={isVisible}
        onClose={() => {
          setOpenModal(false);
        }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>COLOR INFO</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <TableContainer borderRadius="10px" boxShadow="lg">
              <Table variant="simple">
                <Thead background="#F7FAFC">
                  <Tr>
                    <Th isNumeric>ID</Th>
                    <Th>NAME</Th>
                    <Th isNumeric>YEAR</Th>
                    <Th>COLOR</Th>
                    <Th>PANTONE VALUE</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {product && (
                    <TableRowDetails product={product} key={product.id} />
                  )}
                </Tbody>
              </Table>
            </TableContainer>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    )
  );
}

export default ProductDetails;
