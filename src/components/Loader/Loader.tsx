// ** MUI
import { Box, CircularProgress } from "@mui/material";

const Loader = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        left: "0",
        top: "0",
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(0, 0, 0, 0.4)",
        zIndex: "1000",
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default Loader;
