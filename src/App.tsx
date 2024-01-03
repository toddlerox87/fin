import './App.css';
import {UserStats} from "./pages";
import {Box, Container} from "@mui/material";
import {Button, Input, Stack} from "@mui/joy";
import {useState} from "react";
import {getAuthenticationToken} from "@common/util";

function App() {
  const [auth, setAuth] = useState(!!getAuthenticationToken())
  const [isMocked, setIsMocked] = useState(false)

  return (
    <>
      <Box style={{ backgroundColor: "#d31f3c", height: "20em" }}>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={1} sx={{ height: "100%" }}>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            spacing={1} sx={{ height: "100%" }}>
          <Input placeholder="API token" size="lg" onChange={e => {
          }} />
          <Button onClick={() => setIsMocked(x => !x)}>{isMocked ? "Use live data" : "Use mocked data"}</Button>
          </Stack>
        </Stack>
      </Box>
      <Container maxWidth="lg" className="App">
        <Box>
          {(auth || isMocked) && <UserStats isMocked={isMocked}/>}
        </Box>
      </Container>
    </>
  );
}

export default App;
