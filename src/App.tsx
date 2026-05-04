import Footer from "./components/Footer";
import Header from "./components/Header";
import AppRoutes from "./routes";

function App() {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;