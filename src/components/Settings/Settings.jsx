import { useSelector } from 'react-redux';
import { Wrapper, WrapperLoader } from './Settings.styled';
import Langauge from '../Langauge/Langauge';
import Background from '../Background/Background';
import Loader from 'components/Loader';

export default function Settings({langauge, changeLangauge, changeBackground}){
    const  {loading} = useSelector(store => store.contacts);
    const lang = {langauge, changeLangauge};
    const bg = {changeBackground}
    
    return(
        <Wrapper>
            <Langauge {...lang}/>
            <Background {...bg}/>
            <WrapperLoader> {loading && <Loader height={20}/>} </WrapperLoader>
            
        </Wrapper>
    )
}