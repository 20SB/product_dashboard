import React from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Text,
} from "@chakra-ui/react";

const ProductDetails = ({ product, onClose }) => (
    <Modal isOpen={true} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>{product.title}</ModalHeader>
            <ModalBody>
                <Text>Price: {product.price}</Text>
                <Text>Popularity: {product.popularity}</Text>
                <Text>Description: {product.description || "No description available."}</Text>
            </ModalBody>
            <ModalFooter>
                <Button colorScheme="blue" onClick={onClose}>
                    Close
                </Button>
            </ModalFooter>
        </ModalContent>
    </Modal>
);

export default ProductDetails;
