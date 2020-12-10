import React from 'react'

import PlayList from './PlayList'

const CardList = () => {
    const dataLists = [
        {
            id:1,
            name: 'Focus',
            detail: 'Music to help you concentrate.'
        },
        {
            id:2,
            name: 'Mood',
            detail: 'Playlists to match your mood.'
        
        },
        {
            id:3,
            name: 'Featured podcast playlists',
            detail: ''

        },
        {
            id:4,
            name: 'Popular new releases',
            detail: ''

        }
    ]
    return (
        <div className="mainInner">
            {dataLists.map((list , id) => (
                 <div className="cardsWrap" key={id}>
                 <h2>{list.name}</h2>
                 <span className="seeAll">SEE ALL</span>
            <p className="subTitle">{list.detail}</p>
            <PlayList listId={list.id}/>
               </div>
            ))}
        </div>
    )
}

export default CardList
