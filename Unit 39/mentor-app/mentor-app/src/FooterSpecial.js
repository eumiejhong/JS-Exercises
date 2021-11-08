import React from 'react'
import "./FooterSpecial.css"

export default function FooterSpecial({toggle}) {
    const className = 'footer';

    return (
        <div className={className} onClick={toggle}>
            <h2>Weekly Special! Buy One Get 50% Treats!</h2>
            <img className="pikachu" src="https://secure.img1-fg.wfcdn.com/im/98270403/resize-h800-w800%5Ecompr-r85/8470/84707680/Pokemon+Pikachu+Wall+Decal.jpg" alt={"pikachu"}/>
        </div>
    )
}
