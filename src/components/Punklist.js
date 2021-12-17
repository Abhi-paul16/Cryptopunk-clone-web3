import React from 'react'
import CollectionCard from './CollectionCard'
export default function Punklist({punkListData}) {
    return (
        <div className='punkList'>
            {punkListData.map(punk=>(
                
                <div>
                    <CollectionCard
                     key={punk.id}
                     id={punk.token_id}
                     name={punk.name}
                     triats={punk.triats}
                     image={punk.image_original_url}
                    />
{console.log(punk)}
                </div>
            ))}
        </div>
    )
}
