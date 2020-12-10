import React from 'react'
import {
    useParams
  } from "react-router-dom";
  import {ReactComponent as HeartIcon} from './../../svgs/heart.svg'
  import {ReactComponent as DotsIcon} from './../../svgs/threeDot.svg'
  import {ReactComponent as PlayIcon} from './../../svgs/play.svg'
 import './../../App.scss'

const ListPlay = () => {
    let { id } = useParams();

    return (
        <div>
            <div className="playlistPageInfo">
                <div className="upperPageInfo">
                <img src="https://images.unsplash.com/photo-1607514835898-e86c29bf4b8d?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="pic" />
              <div className="playlistInfoTexts">
              <h5>PLAYLIST</h5>
                <h2>Throwback Thursday</h2>
                <p>Relive the magic of Broadway & showtunes through the years! Cover: Wicked</p>
                <div className="playlistInfoSpotify">
                <a draggable = {false} href="">Spotify</a>
                <span> • </span>
                <span>1,898,611 likes</span>
                <span> • </span>
                <span>43 songs, 2 hr 47 min</span>
                </div>
                
              </div>
             </div>
            </div>
            <div className="downPageView">
                <div className="gradinatDownPage"></div>
                <div className="pageInfoButtons">
                   <button><PlayIcon /></button>
                    <div className="icons">
                        <div className="iconHeart">
                            <HeartIcon />
                        </div>
                        <div className="iconDot">
                            <DotsIcon />
                        </div>
                    </div>
                </div>
                <div className="pageListPlay">
                   <ul className="songlist">
                       <li>
                           <div className="icon">
                                    1   
                           </div>
                           <div className="songDetail">
                              <h3>Lexander Hamilton</h3>
                              <span>Lesile Odom Jr.,Anthony Ramos</span>
                           </div>
                           <div className="songTime">
                                <span>03:43</span>
                           </div>
                          
                        </li>
                        <li>
                           <div className="icon">
2
                           </div>
                           <div className="songDetail">
                              <h3>Lexander Hamilton</h3>
                              <span>Lesile Odom Jr.,Anthony Ramos</span>
                           </div>
                           <div className="songTime">
                                <span>03:43</span>
                           </div>
                          
                        </li>
                        <li>
                           <div className="icon">
3
                           </div>
                           <div className="songDetail">
                              <h3>Lexander Hamilton</h3>
                              <span>Lesile Odom Jr.,Anthony Ramos</span>
                           </div>
                           <div className="songTime">
                                <span>03:43</span>
                           </div>
                          
                        </li>
                        <li>
                           <div className="icon">
4
                           </div>
                           <div className="songDetail">
                              <h3>Lexander Hamilton</h3>
                              <span>Lesile Odom Jr.,Anthony Ramos</span>
                           </div>
                           <div className="songTime">
                                <span>03:43</span>
                           </div>
                          
                        </li>
                        <li>
                           <div className="icon">
5
                           </div>
                           <div className="songDetail">
                              <h3>Lexander Hamilton</h3>
                              <span>Lesile Odom Jr.,Anthony Ramos</span>
                           </div>
                           <div className="songTime">
                                <span>03:43</span>
                           </div>
                          
                        </li>
                        <li>
                           <div className="icon">
6
                           </div>
                           <div className="songDetail">
                              <h3>Lexander Hamilton</h3>
                              <span>Lesile Odom Jr.,Anthony Ramos</span>
                           </div>
                           <div className="songTime">
                                <span>03:43</span>
                           </div>
                          
                        </li>
                   </ul>
                </div>
            </div>                           
        </div>
            
            
    )
}

export default ListPlay
