import React, { useEffect, useRef } from "react";
import {
  Button,
  Select,
  FormControl,
  Radio,
  RadioGroup,
  Stack,
  Flex,
  Box,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";

import { useForm } from "react-hook-form";

export default function SelectButton(props) {
  const BoxBgColor = useColorModeValue("gray.200", "#243036");
  // const BoxBorderColor = useColorModeValue("gray.200", "gray.500");
  const ButtonColorMode = useColorModeValue("#319795", "#00AF91");
  const ButtonColorMode1 = useColorModeValue("gray.300", "#303E46");
  const ButtonBorderColorMode1 = useColorModeValue("gray.300", "gray.600");

  const ref = useRef(null);
  useForm();

  const myfunc = () => {
    console.log("I was activated 1 seconds later");
  };

  useEffect(() => {
    setTimeout(() => {
      ref.current.click();
    }, 1000);
  }, []);

  return (
    <Flex
      justifyContent="left"
      my={1}
      mb={4}
      py={1}
      //bg={BoxBgColor}
      //borderColor={BoxBorderColor}
      //borderRightWidth="1px"
      //borderRadius="xl"
      maxW="xl"
    >
      <Flex mt={5} mx={4}>
        <form onSubmit={props.getApi}>
          <FormControl>
            <Stack spacing={1} direction="row">
              <Select
                textAlign="center"
                maxW={118}
                name="chainId"
                type="number"
                borderWidth={1}
                borderColor={ButtonBorderColorMode1}
                bg={ButtonColorMode1}
                shadow="md"
              >
                <option name="chainId" value="1">
                  Ethereum
                </option>
                <option name="chainId" value="137">
                  Polygon
                </option>
                <option name="chainId" value="43114">
                  Avalanche
                </option>
                <option name="chainId" value="56">
                  Binance
                </option>
                <option name="chainId" value="1284">
                  Moonbeam
                </option>
                <option name="chainId" value="42161">
                  Arbitrum
                </option>
                <option name="chainId" value="250">
                  Fantom
                </option>
              </Select>
              <Button
                ref={ref}
                onClick={myfunc}
                borderRadius="lg"
                right="0"
                bg={ButtonColorMode}
                type="submit"
                textTransform="uppercase"
                shadow="lg"
              >
                analyse
              </Button>
            </Stack>
          </FormControl>

          <Box mx="xl">
            <RadioGroup
              my={2}
              textAlign="left"
              name="dexName"
              type="number"
              defaultValue="sushiswap"
            >
              {/* <Text
                mb={2}
                color={"gray.400"}
                letterSpacing={0.3}
                fontSize="md"
                fontWeight="thin"
                decoration="lightblue"
                textTransform="uppercase"
              >
                Dexes Selection
              </Text> */}
              <SimpleGrid
                spacing={10}
                direction="row"
                textTransform="uppercase"
                fontWeight="normal"
                fontSize="xs"
                columns={[1, null, 5]}
              >
                <Radio
                  size="sm"
                  colorScheme="red"
                  name="dexName"
                  value="uniswap_v2"
                  borderColor="gray.600"
                >
                  Uniswap
                </Radio>
                <Radio
                  size="sm"
                  name="dexName"
                  colorScheme="green"
                  value="sushiswap"
                  borderColor="gray.600"
                >
                  Sushiswap
                </Radio>
                <Radio
                  size="sm"
                  colorScheme="orange"
                  name="dexName"
                  value="pancakeswap"
                  borderColor="gray.600"
                >
                  Pancakeswap
                </Radio>
                <Radio
                  size="sm"
                  colorScheme="red"
                  name="dexName"
                  value="quickswap"
                  borderColor="gray.600"
                >
                  Quickswap
                </Radio>

                <Radio
                  size="sm"
                  name="dexName"
                  colorScheme="green"
                  value="traderjoe"
                  borderColor="gray.600"
                >
                  Traderjoe
                </Radio>
                {/* <Radio
                  size="sm"
                  name="dexName"
                  colorScheme="green"
                  value="pangolin"
                  borderColor="gray.600"
                >
                  Pangolin
                </Radio>
                <Radio
                  size="sm"
                  colorScheme="orange"
                  name="dexName"
                  value="spiritswap"
                  borderColor="gray.600"
                >
                  Spiritswap
                </Radio>
                <Radio
                  size="sm"
                  colorScheme="red"
                  name="dexName"
                  value="spookyswap"
                  borderColor="gray.600"
                >
                  Spookyswap
                </Radio> */}
                {/* <Radio
                  size="sm"
                  colorScheme="orange"
                  name="dexName"
                  value="standard"
                  borderColor="gray.600"
                >
                  Standard
                </Radio> */}
                {/* <Radio
                  size="sm"
                  colorScheme="red"
                  name="dexName"
                  value="apeswap"
                  borderColor="gray.600"
                >
                  Apeswap
                </Radio> */}
                {/* <Radio
                  size="sm"
                  name="dexName"
                  colorScheme="green"
                  value="apeswap_v2"
                  borderColor="gray.600"
                >
                  Katana
                </Radio> */}
                {/* <Radio
                  size="sm"
                  colorScheme="orange"
                  name="dexName"
                  value="katana"
                  borderColor="gray.600"
                >
                  Stellaswap
                </Radio> */}
                {/* <Radio
                  size="sm"
                  colorScheme="red"
                  name="dexName"
                  value="beamswap"
                  borderColor="gray.600"
                >
                  Beamswap
                </Radio> */}
              </SimpleGrid>
            </RadioGroup>
          </Box>
        </form>
      </Flex>
      {/* <Box
        borderColor="gray.600"
        alignContent="space-between"
        mx={6}
        maxWidth={180}
      >
        <Divider />
      </Box> */}
      {/* <Flex mx="16" bottom={1} pos="fixed">
        <Image shadow="xl" width={120} src="/logo.png" alt="covalent logo" />
      </Flex> */}
    </Flex>
  );
}
