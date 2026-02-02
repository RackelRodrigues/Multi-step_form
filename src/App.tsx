import { GlobalProvider } from "./contexts/AuthContext";
import AppContent from "./pages/Index";

function App() {
  return (
    <GlobalProvider>
      <AppContent />
    </GlobalProvider>
  );
}

export default App;
