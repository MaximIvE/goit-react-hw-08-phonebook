import { useContext } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { nanoid } from 'nanoid';
import { FilterSection, Input } from "./Filter.styled";
import langContext from 'langContext';

import locale from '../../shared/materials/langauges.json';
import { setFilter } from 'redux/filter/filter-slice'; 

export default function Filter(){

    const dispatch = useDispatch()
    const idInputFilter = nanoid();
    const {filter} = useSelector(store => store);

    const lang= useContext(langContext);
    const content=locale[lang].contacts;

    return <FilterSection>
        <label htmlFor={idInputFilter}>{content.filtrText}</label>
            <Input 
                id={idInputFilter}
                type="text"
                onChange={e => dispatch(setFilter(e.currentTarget.value.trim())) }
                value={filter}
                placeholder={content.filtrPlaceholder}>
            </Input>
        </FilterSection>
};