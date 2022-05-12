import React from "react";
import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import { useAccount } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

export default function BuyCrypto() {
  const TextTitleColor = useColorModeValue("black", "black");
  const { data } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  return (
    <Box my="5">
      {/* <Text
        color={TextTitleColor}
        mb={2}
        letterSpacing={1}
        fontSize="xl"
        fontWeight="semibold"
        decoration="lightblue"
        textTransform="uppercase"
      >
        Multify
      </Text> */}

      <Text
        color={TextTitleColor}
        mb={2}
        letterSpacing={1}
        fontSize="xl"
        fontWeight="semibold"
        decoration="lightblue"
        textTransform="uppercase"
      >
        Buy Cryptocurrenciess
      </Text>
      <Box alignItems="center">
        <Box
          //display="block"
          as="iframe"
          height="652"
          width="100%"
          src="https://staging-global.transak.com?apiKey=b42f80c6-09e3-4995-a781-660fc5a2c8f4"
        />
      </Box>
    </Box>
  );
}
