import { useContext } from 'react';
import { useDispatch } from "react-redux";

import { nanoid } from 'nanoid';
import { FilterSection,Input } from "./Filter.styled";
import langContext from 'langContext';

import locale from '../../materials/langauges.json';
import { addFilter } from 'redux/slice'; 

export default function Filter(){

    const dispatch = useDispatch()
    const idInputFilter = nanoid();

    const lang= useContext(langContext);
    const content=locale[lang].contacts;

    return <FilterSection>
        <label htmlFor={idInputFilter}>{content.filtrText}</label>
            <Input 
                id={idInputFilter}
                type="text"
                onChange={e => dispatch(addFilter(e.currentTarget.value.trim()))}
                placeholder={content.filtrPlaceholder}>
            </Input>
        </FilterSection>
};