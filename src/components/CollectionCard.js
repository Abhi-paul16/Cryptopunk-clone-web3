import React from 'react'
import weth from "../assets/weth.png"
import "./CollectionCard.css"
export default function CollectionCard({name, id , triats , image , key  }) {
    return (
     <div key ={key } className='collectionCard'>
            <img src={image} alt="" />
        <div className="details">
            <div className="name">
                {name}
                <div className="id">.#{id}</div>
            </div>
            <div className="priceContainer">
                <img src={weth} className='wethImage' alt="" />
                <div className="price">
                    {triats[0]?.value}
                </div>
            </div>
         </div>
    </div>
    )
}
