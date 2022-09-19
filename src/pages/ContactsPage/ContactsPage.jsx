import Phonebook from "components/Phonebook/Phonebook";
import { Wrapper } from './ContactsPage.styled';

const ContactsPage = () => {

    return (
        <Wrapper>
            {<Phonebook />}
        </Wrapper>
    )
}

export default ContactsPage;