import Profil from './Profil/profil';
import img from "./img/image1.jpg"
import "./App.css"



function App() {
  const Image = img
  const alertMyhandleName = name => alert(name);

  return (
    <div className="App">
      <Profil FullName="Doumbia Vamoussa" Bio="Je suis dev." Profession="Etudiant"
       alertMyhandleName={alertMyhandleName}>
        <img src={Image} height="auto" width="400px" />
      </Profil>
    </div>
  );
}

export default App;
