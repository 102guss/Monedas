
import Header from "./components/Header";
import CoinsContainer from "./components/CoinsContainer";

const App = () => {
 
  return (
    <>
      <Header />
      <main className="container mx-auto  py-8">
     
        <div className="coins-list">
          <CoinsContainer />
        </div>
      </main>
    </>
  );
};
export default App;
