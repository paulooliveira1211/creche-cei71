import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRoutes from "./routes";

function App() {
  return (
    <div className="bg-slate-50 min-h-screen text-gray-800">
      <Header />

      <main className="pt-20">
        <AppRoutes />
      </main>

      <Footer />
    </div>
  );
}

export default App;