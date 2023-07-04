import './App.css';
import Simpson from "./components/simpson";
import Simpsons from "./components/simpsons";

function App() {
    const simpsonsInfo = [
        {
            name: 'Bart',
            surname: 'Simpson',
            age: 10,
            gender: 'male',
            photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
        },
        {
            name: 'Homer',
            surname: 'Simpson',
            age: 40,
            gender: 'male',
            photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
        },
        {
            name: 'Marge',
            surname: 'Simpson',
            age: 38,
            gender: 'female',
            photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
        },
        {
            name: 'Lisa',
            surname: 'Simpson',
            age: 9,
            gender: 'female',
            photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
        },
        {
            name: 'Maggie',
            surname: 'Simpson',
            age: 1,
            gender: 'male',
            photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
        }
    ];
    const genId = () => {
        return Math.random().toString(36).slice(2, 10 + 3);
    }

    return (
        <>
            <h1 className="main-title">Simpsons characters</h1>
           <Simpsons
               info={simpsonsInfo}
               genId={genId}
           />
        </>
    );
}

export default App;

