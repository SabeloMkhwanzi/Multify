import React from "react";

import {
  Box,
  HStack,
  useDisclosure,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
} from "@chakra-ui/react";

import { GiWallet } from "react-icons/gi";

// Import Wagmi hooks
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

export default function WalletModel() {
  // bgColor
  const bg = useColorModeValue("white", "gray.800");
  //const bgColor = useColorModeValue("blue.200", "blue.500");
  const ButtonColorMode = useColorModeValue("#319795", "#00AF91");
  const { data } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();

  if (data) {
    return (
      <Box>
        <HStack spacing={20}>
          <Box
            alignItems="center"
            bg={bg}
            px={2}
            py={3}
            height="50"
            width="200px"
            borderWidth={1}
            borderRadius="md"
            borderColor="gray.500"
          >
            <Text fontSize="md" as="address" isTruncated maxWidth={150}>
              Connected to {data.address}
            </Text>
            {/* <Text fontSize="xs" as="samp">
              Balance: {`${Number(getBalance?.formatted).toFixed(3)} ETH`}
            </Text> */}
          </Box>
          <Button
            borderRadius="lg"
            right="4.5rem"
            bgColor={ButtonColorMode}
            leftIcon={<GiWallet />}
            onClick={() => disconnect()}
            shadow="lg"
          >
            Disconnect
          </Button>
        </HStack>
      </Box>
    );
  }
  return (
    <>
      <Button
        borderRadius="lg"
        borderColor="gray.500"
        right="4.5rem"
        bgColor={ButtonColorMode}
        leftIcon={<GiWallet />}
        onClick={() => connect()}
        shadow="lg"
      >
        Connect Wallet
      </Button>
    </>
  );
}
