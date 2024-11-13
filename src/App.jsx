import { Box } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import CodeEditor from "./components/CodeEditor";
import Header from "./components/Header/Header";


function App() {
  return (
    <Box minH="100vh" bg="#0f0a19" color="gray.500" px={6} py={8}
      pt={3}
    >
      <Helmet>
      <meta name="description" content="Online compiler supporting all programming languages. Experience high-performance code execution with real-time results." />
      <title>Page Title</title>
    </Helmet>

      <Header/>
      <CodeEditor />
    </Box>
  );
}

export default App;
