import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
    return (
        <div>
        <CharacterForm />
        </div>
    )
}

function CharacterForm() {
    const [characterData, setCharacterData] = useState({
        name: '',
        race: '',
        class: '',
        level: 1,
        description: '',
        public: false
    });
    const [errors, setErrors] = useState({});

    const handleChange = (event: { target: { name: string; value: string } }) => {
        const { name, value } = event.target;
        setCharacterData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const errors = validateForm(characterData);
        setErrors(errors);

        if (Object.keys(errors).length === 0) {
            console.log('Dane postaci:', characterData);
        }
        console.log('Błędy walidacji:', errors);
    };

    function validateForm(formData: typeof characterData) {
        const errors: any = {};

        if (formData.name.trim().length < 3 || formData.name.trim().length > 20) {
            errors.name = "Imię musi mieć od 3 do 20 znaków";
        }

        if (formData.race === '') {
            errors.race = "Proszę wybrać rasę";
        }

        if (formData.class === '') {
            errors.class = "Proszę wybrać klasę";
        }

        if (!Number.isInteger(Number(formData.level)) || Number(formData.level) < 1 || Number(formData.level) > 100) {
            errors.level = "Poziom musi być liczbą całkowitą od 1 do 100";
        }

        if (formData.description.trim().length > 200) {
            errors.description = "Opis nie może przekraczać 200 znaków";
        }

        return errors;
    }

    return (
        <div>
            <h2>Stwórz postać</h2>
            <form onSubmit = {handleSubmit}>
                <div>
                    <label htmlFor="name">Imię:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={characterData.name}
                        onChange={handleChange}
                    />
                </div>
                {errors.name && <p className="error" style={{ color: 'red' }}>{errors.name}</p>}

                <div>
                    <label htmlFor="race">Rasa:</label>
                    <select id="race" name="race" value={characterData.race} onChange={handleChange}>
                        <option value="">Wybierz rasę</option>
                        <option value="czlowiek">Człowiek</option>
                        <option value="elf">Elf</option>
                        <option value="krasnolud">Krasnolud</option>
                        <option value="ork">Ork</option>
                    </select>
                </div>
                {errors.race && <p className="error" style={{ color: 'red' }}>{errors.race}</p>}

                <div>
                    <label htmlFor="class">Klasa:</label>
                    <select id="class" name="class" value={characterData.class} onChange={handleChange}>
                        <option value="">Wybierz klasę</option>
                        <option value="wojownik">Wojownik</option>
                        <option value="mag">Mag</option>
                        <option value="zaklinacz">Łucznik</option>
                    </select>
                </div>
                {errors.class && <p className="error" style={{ color: 'red' }}>{errors.class}</p>}

                <div>
                    <label htmlFor="level">Poziom:</label>
                    <input
                        type="number"
                        id="level"
                        name="level"
                        value={characterData.level}
                        onChange={handleChange}
                    />
                </div>
                {errors.level && <p className="error" style={{ color: 'red' }}>{errors.level}</p>}

                <div>
                    <label htmlFor="description">Opis:</label>
                    <textarea
                        id="description"
                        name="description"
                        value={characterData.description}
                        onChange={handleChange}
                    />
                </div>
                {errors.description && <p className="error" style={{ color: 'red' }}>{errors.description}</p>}

                <div>
                    <label htmlFor="public">Publiczna:</label>
                    <input
                        type="checkbox"
                        id="public"
                        name="public"
                        checked={characterData.public}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Stwórz postać</button>
            </form>
        </div>
    );
}

export default App;