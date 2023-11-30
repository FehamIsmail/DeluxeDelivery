"use client"
import React, {useEffect} from 'react';

interface ProfilePictureProps {
    url: string;
    size: number;
}
function ProfilePicture(props: ProfilePictureProps) {
    const {url, size} = props;

    const imgRef = React.useRef<HTMLImageElement>(null);

    useEffect(() => {
        if(imgRef.current){
            imgRef.current.style.width = `${size}px`;
            imgRef.current.style.height = `${size}px`;
        }
    },[imgRef])

    return (
        <img ref={imgRef} className={`shadow-md object-cover bg-white rounded-full`} src={url} alt={'profile picture'} />
    );
}

export default ProfilePicture;