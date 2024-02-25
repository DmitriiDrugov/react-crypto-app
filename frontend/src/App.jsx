import AppLayout from "./components/layout/App_Layout";
import { CryptoContextProvider } from "./context/crypto-context";

export default function App() {
  return (
    <CryptoContextProvider>
      <AppLayout />
    </CryptoContextProvider>
  );
}
