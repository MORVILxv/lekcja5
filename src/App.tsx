import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const zadania = [
    {name: "Zadanie 1", status: "Wykonane"},
    {name: "Zadanie 2", status: "Wykonane"},
    {name: "Zadanie 3", status: "Niewykonane"}
];

function App() {
    const cards = zadania.map((zadanie) => (<Zadanie 
        name = {zadanie.name}
        status = {zadanie.status}
    />))
    return (
    <main>
        <h1>Lista zadań</h1>

        <table className="table table-striped">
            <tbody>
                {cards}
            </tbody>
        </table>
    </main>
);
}


function Zadanie(props: any) {
    return (
        <tr>
            <td>{props.name}</td>
            <td><button className="btn btn-primary">Wykonane</button></td>
            <td><button className="btn btn-primary">Niewykonane</button></td>
            <td>{props.status}</td>
        </tr>
    )
}

export default App;