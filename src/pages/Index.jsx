import { Container, VStack, Image, Box, Text } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="white" color="black">
      <VStack spacing={4}>
        <Box boxSize="sm" boxShadow="sm">
          <Image src="/images/geometric-illustration.png" alt="Geometric Illustration" />
        </Box>
        <Text fontSize="2xl" fontWeight="light">Welcome to the Geometric Illustration Website</Text>
        <Text fontWeight="light">Explore the interconnected functions represented in the illustration.</Text>
      </VStack>
    </Container>
  );
};

export default Index;