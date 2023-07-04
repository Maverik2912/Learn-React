import './App.css';
import Simpson from "./components/Simpson";
import Simpsons from "./components/Simpsons";
import RickAndMortyCharacters from "./components/RickAndMortyCharacters"

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
    const rickAndMortyCharacters = [
        {
            "id": 1,
            "name": "Rick Sanchez",
            "status": "Alive",
            "species": "Human",
            "gender": "Male",
            "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        },
        {
            "id": 2,
            "name": "Morty Smith",
            "status": "Alive",
            "species": "Human",
            "gender": "Male",
            "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        },
        {
            "id": 3,
            "name": "Summer Smith",
            "status": "Alive",
            "species": "Human",
            "gender": "Female",
            "image": "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
        },
        {
            "id": 4,
            "name": "Beth Smith",
            "status": "Alive",
            "species": "Human",
            "gender": "Female",
            "image": "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
        },
        {
            "id": 5,
            "name": "Jerry Smith",
            "status": "Alive",
            "species": "Human",
            "gender": "Male",
            "image": "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
        },
        {
            "id": 6,
            "name": "Abadango Cluster Princess",
            "status": "Alive",
            "species": "Alien",
            "gender": "Female",
            "image": "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
        }
    ]

    const genId = () => {
        return Math.random().toString(36).slice(2, 10 + 3);
    }

    return (
        <>
            <h2 className="main-title">Simpsons characters</h2>
           <Simpsons
               info={simpsonsInfo}
               genId={genId}
           />
            <RickAndMortyCharacters
                genId={genId}
                charactersInfo={rickAndMortyCharacters}
            />
        </>
    );
}

export default App;

