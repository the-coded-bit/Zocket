import { MantineProvider } from "@mantine/core";
import "./App.css";
import { Page } from "./components";


function App() {
  return (
    <MantineProvider
      theme={{
        spacing: { xs: 15, sm: 20, md: 25, lg: 40, xl: 100 },
        colorScheme: 'dark'
      }}
    >
      <Page>hello</Page>
    </MantineProvider>
  );
}

export default App;
