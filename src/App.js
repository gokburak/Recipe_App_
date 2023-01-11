import { ThemeProvider } from "styled-components";
import AppRouter from "./router/AppRouter"
import theme from "./components/globalStyles/theme"



function App() {
  // const app_id = "2415284d";
  // const Api_Key = "dd04ef6cda28763365df20bfc310c6f0";
  // const url = `https://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${Api_Key}&mealTypes=${meal}`;

  return (
    <ThemeProvider theme={theme} >
    
       <AppRouter/>
       
    </ThemeProvider>
  );
}

export default App;
