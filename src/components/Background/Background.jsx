import { useState} from 'react';
import {imageApi} from '../../shared/api/imageApi';
import Modal from 'components/Modal';
import ImageGallery from '../ImageGallery/ImageGallery';

import { RiImage2Fill } from "react-icons/ri";

import { BackgroundBtn, iconStyle} from "./Background.styled";


export default function Background({changeBackground}){
    const [showeModal, setShoweModal] = useState(false);
    const [backgroundImg, setBackgroundImg] = useState(null);

    const onModal=async()=>{
        
        const data = await imageApi();
        console.log(data);
        
        setBackgroundImg(data.hits);
        setShoweModal(true);
    };

    const changeImage=(newImage)=>{
        changeBackground(newImage);
        setShoweModal(false);
    }

    return  <>
            <BackgroundBtn type="button" disabled={showeModal} onClick={onModal}>
                <RiImage2Fill style={iconStyle}/>
            </BackgroundBtn>
           {showeModal && <Modal onClose={()=>setShoweModal(false)}>
                <ImageGallery reply={backgroundImg} changeImage={changeImage}/>
            </Modal>}
            </>
};
