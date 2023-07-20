import React, {useEffect, useState} from 'react';
import {albumsService} from "../../services/albumsService/albumsService";
import Album from "./Album/Album";
import styles from './Albums.module.css';

const Albums = () => {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        albumsService.getAll().then(({data}) => setAlbums(data));
    }, [])

    return (
        <>
            <h1 className={styles.title}>Albums list</h1>
            <div className={styles.container}>
                {albums.map(album => <Album key={album.id} album={album}/>)}
            </div>
        </>
    );
};

export default Albums;