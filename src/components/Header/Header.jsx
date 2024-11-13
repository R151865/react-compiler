import { Box, HStack, Text } from "@chakra-ui/react";
import logo from "/compilecodes-logo.svg";  // Make sure the logo is in the public directory

const Header = () => {
  return (
    <Box>
      <HStack
      mb={2} 
      spacing={4} align="center"> {/* Use HStack to align logo and text */}
        <img src={logo} alt="Compile Codes Logo" width="30" height="30" /> {/* Display the logo */}
        <Text 
         
          fontSize="lg" 
          color="white" 
          letterSpacing="5px" 
          fontWeight={700}
        >
          COMPILE CODES
        </Text>
      </HStack>
    </Box>
  );
};

export default Header;
