import{useState, useEffect, useContext} from 'react';
import { LangaugeStyled, Btn } from "./Langauge.styled";

import langContext from 'langContext';

export default function Langauge({changeLangauge}){

    const langauge = useContext(langContext);
    const [choice, setChoise] = useState(()=>langauge ?? "Ua");
    
    useEffect(()=>{
        localStorage.setItem('langauge', JSON.stringify(choice));
        changeLangauge(choice);
    },[choice, changeLangauge]);
    
    const activeStyle=(lang)=>{
        const active = {
            fontWeight: 600,
            cursor: 'auto',
            };
        if(lang === choice) return active;
    };

    return (
        <LangaugeStyled>
            <Btn type="button" disabled={choice === "Ua"} style={activeStyle("Ua")} name="Ua" onClick={(e)=>setChoise(e.target.name)}>Укр</Btn>|
            <Btn type="button" disabled={choice === "En"} style={activeStyle("En")} name="En" onClick={(e)=>setChoise(e.target.name)}>En</Btn>
        </LangaugeStyled>
    )
}