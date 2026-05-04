import Footer from "./components/Footer";
import Header from "./components/Header";
import AppRoutes from "./routes";

function App() {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Header />

      <main className="pt-20">
        <AppRoutes />
      </main>

      <Footer />
    </div>
  );
}

export default App;