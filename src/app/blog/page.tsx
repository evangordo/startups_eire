import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  Button,
  Card,
  CardBody,
  Stack,
  Flex,
} from "@chakra-ui/react";

export default function BlogPage() {
  return (
    <Box as="main" py={8}>
      <Container maxW="container.xl">
        <Heading as="h1" size="2xl" mb={8}>
          Blog
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
          <Card>
            <CardBody>
              <Stack spacing={4}>
                <Heading as="h2" size="lg">
                  Sample Blog
                </Heading>
                <Text color="gray.600">
                  This is a preview of the blog post content
                </Text>
                <Flex
                  justify="space-between"
                  align="center"
                  fontSize="sm"
                  color="gray.500"
                >
                  <Text>December 4, 2024</Text>
                  <Button variant="link" colorScheme="blue">
                    Read More
                  </Button>
                </Flex>
              </Stack>
            </CardBody>
          </Card>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
