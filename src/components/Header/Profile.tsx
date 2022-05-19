import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
            <Box mr="4" textAlign="right">
            <Text>Guilherme Gomes</Text>
            <Text color="gray.300" fontSize="small">guilhermegcaires@gmail.com</Text>
          </Box>
      )}
    <Avatar size="md" name="Guilherme Gomes" src="" />
  </Flex>
  );
}