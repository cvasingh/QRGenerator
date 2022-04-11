import React, { useState, useEffect } from 'react'
import QRcode from 'qrcode';

export const QRgen = ({ link }) => {
    const [src, setSrc] = useState('');
    useEffect(() => {
        QRcode.toDataURL(link).then(setSrc)
    }, [])
    return (<a href={src} download>
        <img src={src} class="qr_img" />
    </a>
    )
}
