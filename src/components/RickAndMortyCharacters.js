import React from "react";
import styles from "./modules/rickAndMorty.module.css"
import RickAndMortyCharacter from "./RickAndMortyCharacter";

const RickAndMortyCharacters = ({charactersInfo, genId}) => {

    const characters = charactersInfo.map(({id, name, status, gender, species, image}) => {
        return <RickAndMortyCharacter
            key={genId()}
            id={id}
            name={name}
            status={status}
            gender={gender}
            species={species}
            image={image}
        />
    })

    return (
        <div className={styles.mainContainer}>
            <h2 className={styles.mainTitle}>The Rick and Morty characters</h2>
            <div className={styles.flexContainer}>
                {characters}
            </div>
        </div>
    )
}

export default RickAndMortyCharacters;