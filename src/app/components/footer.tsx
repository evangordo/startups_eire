import { Box, Text, Link } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box as="footer" py={4} textAlign="center" bg="gray.100">
      <Text fontSize="sm" color="gray.600">
        Open source project - Help to grow the{" "}
        <Link href="https://github.com" color="blue.500" isExternal>
          Dublin startup ecosystem
        </Link>
      </Text>
    </Box>
  );
}
