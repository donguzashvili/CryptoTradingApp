// ** MUI
import { Box } from "@mui/material";

// ** components
import Routing from "./routing/Routing";
import Header from "./components/Header/Header";

// ** style
import "./assets/style/index.css";

function App() {
  return (
    <Box
      sx={{
        maxWidth: "1920px",
        margin: "0 auto",
        height: "100%",
        display: "flex",
        flexFlow: "column nowrap",
      }}
    >
      <Header />
      <Routing />
    </Box>
  );
}

export default App;
