import React,
    { createContext, useState, useContext,
    useMemo, useCallback } from 'react';
import axios from 'axios';
import {container, btn} from './style';

const Context = createContext();

const PDF = (props) => {
    const [savedFiles, setSavedFiles] = useState(null);
    const [chosenFile, setChosenFile] = useState(null);
    const name = useMemo(() => {
        savedFiles, setSavedFiles,
        chosenFile, setChosenFile
    });
    return <Context.Provider {...props} file={name} />
}

export { PDF }