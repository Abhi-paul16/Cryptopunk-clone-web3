import React, { useState , useEffect } from 'react';

//css
import "./Main.css"

import instagramLogo from "../assets/owner/instagram.png";
import twitterLogo from "../assets/owner/twitter.png";
import moreLogo from "../assets/owner/more.png";




export default function Main({punkListData , selectedPunk}) {

    
    const[activepunk , setActivePunk] = useState(punkListData[0])

    useEffect(() => {

        setActivePunk(punkListData[selectedPunk]);
  
    }, [selectedPunk , punkListData])

    return (
        
            <div className="main">
                        <div className="punkContainer">
                            <img className='SelectedPunk' src={activepunk.image_original_url} alt="" />
                        </div>
                        <div className="punkDetails">
                            <div className="title">
                                {activepunk.name}  <span className='itemNumber' >.#{activepunk.token_id}</span>
                            </div>
                           
                            <div className="ownerImageController">
                              <img className='owner-logo' src={'https://avatars.githubusercontent.com/u/68468264?v=4'} alt="" />
                              <div className="OwnerDetails">
                              <div className="ownerNameandHandle">
                                  <div>Frontend Developer|| Youtuber</div>
                                  <div className="ownerHandle"> @Abhi-paul16 </div>
                              </div>
                        </div>
                          </div>
                      
                        </div>
                
                        <div className="ownerlogo">
                              <div className="ownerlink">
                                  <img className='logo' src={instagramLogo} alt="Instagram Logo" />
                              </div>
                              <div className="ownerlink">
                                  <img className='logo' src={twitterLogo} alt="Twitter" />
                              </div>
                              <div className="ownerlink ">
                                  <img className='logo' src={moreLogo} alt="More-logo" />
                              </div>
                        </div>
            </div>

    )
}
