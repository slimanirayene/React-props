import "./App.css";
import ActionLink from "./profile/actionLink";
import myPhoto from "./butters.jpg";

function App() {
  const alertMyInput = (name) => alert(name);
  const styleObject = { width: "15rem", height: "18rem" };

  return (
    <>
      <ActionLink
        name="Sarah"
        job="Biologist"
        bio="Don't want to admit, but yeah.... I am, whatever you say i am, if i wasn't, then why would i say i am?"
        alertMyInput={alertMyInput}
      >
        <img src={myPhoto} alt="headshot" style={styleObject} />
      </ActionLink>
    </>
  );
}

export default App;
