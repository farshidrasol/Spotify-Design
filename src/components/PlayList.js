import React from 'react'
import {ReactComponent as PlayIcon} from './../svgs/play.svg'
import {Link} from 'react-router-dom'

const PlayList = ({listId}) => {
    const dataPlayList = [
        {
            id:101,
            list_id : 1,
            name: 'Deep Focus',
            detail: 'Keep calm and focus with ambient and post0rock music.',
            image: "https://images.unsplash.com/photo-1607514835898-e86c29bf4b8d?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
            id:102,
            list_id : 1,
            name: 'Peaceful Piano',
            detail: 'Relax and indulge with beautiful piano pieces',
            image: "https://images.unsplash.com/photo-1607424002410-92af2df55f32?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3MXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
            id:103,
            list_id : 1,
            name: 'Lo-Fi Beats',
            detail: 'Beats to relax, study and focus.',
            image: "https://images.unsplash.com/photo-1607490369841-780b859d6928?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
            id:121,
            list_id : 1,
            name: 'Deep Focus',
            detail: 'Keep calm and focus with ambient and post0rock music.',
            image: "https://images.unsplash.com/photo-1607348423940-55e93d60e1af?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3N3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
            id:122,
            list_id : 1,
            name: 'Deep Focus',
            detail: 'Keep calm and focus with ambient and post0rock music.',
            image: "https://images.unsplash.com/photo-1607419640280-0a39d37e18dc?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4MHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
            id:123,
            list_id : 1,
            name: 'Deep Focus',
            detail: 'Keep calm and focus with ambient and post0rock music.',
            image: "https://images.unsplash.com/photo-1607218017764-02a4a8038af8?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4Mnx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
            id:104,
            list_id : 2,
            name: 'Mood Booster',
            detail: 'Get happy with todays does of feel-good songs!',
            image: "https://images.unsplash.com/photo-1607512088806-07c94e49e996?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
            id:105,
            list_id : 2,
            name: 'Fellin Myself',
            detail: 'When you fell like youre 100% that b****',
            image: "https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2018/10/bluebells,_oxfordshire.jpg?fit=1500%2C1000&ssl=1"
        },
        {
            id:106,
            list_id : 3,
            name: '2020 Podcast Hall of',
            detail: 'Hand-picked episodes showcasing the best of 2020',
            image: "https://images.unsplash.com/photo-1607591605038-08cf899600f5?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
            id:107,
            list_id : 3,
            name: 'Sound Stories',
            detail: 'Keep calm and focus with ambient and post0rock music.',
            image: "https://images.unsplash.com/photo-1607431887725-379d8ea70f77?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5M3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
            id:109,
            list_id : 3,
            name: 'Crime Scene',
            detail: 'Keep calm and focus with ambient and post0rock music.',
            image: "https://images.unsplash.com/photo-1607514113802-9b2ead0c0813?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
            id:108,
            list_id : 3,
            name: 'Best Sports Podcast',
            detail: 'Keep calm and focus with ambient and post0rock music.',
            image: "https://images.unsplash.com/photo-1607522792643-80089ac9da10?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Nnx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
            id:110,
            list_id : 4,
            name: 'New Music Friday',
            detail: 'New music from Shawn Mendes, Lil Baby, Juice WRLSA, Simon',
            image: "https://images.unsplash.com/photo-1607357848612-21e7f88ffe32?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2NXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
            id:111,
            list_id : 4,
            name: 'Coco (feat DaBaby)',
            detail: '24k Goldn',
            image: "https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2018/10/bluebells,_oxfordshire.jpg?fit=1500%2C1000&ssl=1"
        },
    ]

    const currentPlaylist = dataPlayList.filter((playList => playList.list_id === listId))

    return (
              <div className="cardWrapInner">
                  {currentPlaylist.map((item , id) => (
                    <Link to={`/playlist/` + item.id}>
                        <div className="card" key={id}>
                         <div className="cardImage">
                             
                             <img src={item.image} alt="Pic 1" />
                             <span className="playIcon">
                             <PlayIcon />
                         </span>
                         </div>
                        
                         <div className="cardContent">
                         <h3>{item.name}</h3>
                         <h5>{item.detail}</h5>
                         </div>
                     </div>
                     </Link>
                  ) )}
                     
                    
                   </div>
    )
}

export default PlayList
