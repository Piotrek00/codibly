import {
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import TableRow from "./TableRow";
import TableRowDetails from "./TableRowDetails";

function ProductDetails({ product, isVisible, setOpenModal }) {
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
