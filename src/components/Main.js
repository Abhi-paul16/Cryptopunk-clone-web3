import React, { useState , useEffect } from 'react'

export default function Main({punkListData , selectedPunk}) {

    
    const[activepunk , setActivePunk] = useState(punkListData[0])

    useEffect(() => {

        setActivePunk(punkListData[selectedPunk]);
  
    }, [selectedPunk , punkListData])

    return (
      
     
        <div>
            <div className="main">
                <div className="maincontent">
                    <div className="punkHighlight">
                        <div className="punkContainer">
                            <img className='SelectedPunk' src={activepunk.image_original_url} alt="" />
                        </div>
                        <div className="punkDetails">
                            <div className="title">
                                {activepunk.name}
                            </div>
                            <span className='itemNumber' >.#{activepunk.token_id}</span>
                        </div>

                      <div className="Owner">
                          <div className="ownerImageController">
                              <img src={'https://avatars.githubusercontent.com/u/68468264?v=4'} alt="" />
                          </div>
                          <div className="OwnerDetails">
                              <div className="ownerNameandHandle">
                                  <div>ahfiwauiqe7323424j28d</div>
                                  <div className="ownerHandle">
                                      @Abhi-paul16
                                  </div>

                              </div>
                          </div>
                      </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
