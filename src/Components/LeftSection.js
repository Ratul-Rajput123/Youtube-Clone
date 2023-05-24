import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';
import styled from 'styled-components';

function LeftSection() {
    return (
        <div>
            <Wrapper>

                <HomeIcon className="home-icon hover-icon" />
                <p className="text-control">Home</p>

                <img alt="img" src="/Images/ytb-shorts.svg" className="shorts-icon hover-icon"></img>
                <p className="text-control">Shorts</p>

                <SubscriptionsOutlinedIcon className="subscription-icon hover-icon" />
                <p className="text-control ">Subscription</p>

                <VideoLibraryOutlinedIcon className="video-library-icon hover-icon" />
                <p className="text-control">Library</p>

                <RestoreOutlinedIcon className="history-icon hover-icon" />
                <p className="text-control">History</p>

            </Wrapper>
        </div>
    )
}

export default LeftSection;

const Wrapper = styled.div`
  position:fixed;
  width:6%;
  display:flex;
  flex-direction:column;
  align-items:center;
  margin-top:90px;

  .text-control{
      position:ralative;
      color:white;
      font-family:'Roboto',sans-serif;
      font-size:10px;
    }  
 .hover-icon:hover{
    background-color:#222222;
    border-radius:10px;
    padding:10px;
    cursor:pointer;
  }

  .home-icon{
   color:white;
  }

  .shorts-icon{
   width:22px;
   padding-top:20px;
  } 
  
  .subscription-icon{
     
      color:white;
      padding-top:20px;
   }

  .video-library-icon{
   color:white;
   padding-top:20px;
  }

  .history-icon{
      color:white;
      padding-top:20px;
  }
`
