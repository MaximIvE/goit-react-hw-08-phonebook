import { useSelector } from 'react-redux';
import { Wrapper, WrapperLoader } from './Settings.styled';
import Langauge from '../Langauge/Langauge';
import Background from '../Background/Background';
import Loader from 'components/Loader';
import { getAuthLoading } from 'redux/auth/auth-selectors';


export default function Settings({changeLangauge, changeBackground}){
    const  {loading} = useSelector(store => store.contacts);
    const  loadingUser = useSelector(getAuthLoading);
    const lang = {changeLangauge};
    const bg = {changeBackground}
    
    return(
        <Wrapper>
            <Langauge {...lang}/>
            <Background {...bg}/>
            <WrapperLoader> {(loading || loadingUser)  && <Loader height={20}/>} </WrapperLoader>
        </Wrapper>
    )
}