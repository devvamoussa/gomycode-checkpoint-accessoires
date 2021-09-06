import Profil from './Profil/profil';
import img from "./img/image1.jpg"



function App() {
  const Image = img
  const alertMyhandleName = name => alert(name);

  return (
    <div className="App">
      <Profil FullName="Doumbia Vamoussa" Bio="Je suis dev." Profession="Etudiant" alertMyhandleName={alertMyhandleName}>
        <img src={Image} height="200px" width="300px" />
      </Profil>
    </div>
  );
}

export default App;
