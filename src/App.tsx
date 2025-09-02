import { GlobalProvider } from "./contexts/globalContext";
import AppContent from "./pages/Index";

function App() {
  return (
    <GlobalProvider>
      <AppContent />
    </GlobalProvider>
  );
}

export default App;
