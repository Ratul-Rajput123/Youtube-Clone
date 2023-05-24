import React from 'react'
import styled from 'styled-components';
import Videos from './Videos';

function VideoCard(props) {
  return <div>
    <VideoContainer>
      <iframe className="video-control" width="560" height="315" src={props.video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      <img className="channel-logo" alt="img" src={props.logo}></img>
      <p className="video-title">{props.title}</p>
      <p className="channel-details">{props.channelName} <br /> {props.channelDetails}</p>
    </VideoContainer>
  </div>
}

function mapVideoCard(items) {
  return (
    <VideoCard
      key={items.key}
      video={items.video}
      logo={items.channelLogo}
      title={items.title}
      channelName={items.channelName}
      channelDetails={items.channelViewsTime}
    />
  )
}

function HomeSection() {
  return (
    <div>
      <Container>
        {Videos.map(mapVideoCard)}
      </Container>
    </div>
  )
}

export default HomeSection

const Container = styled.div`
position:absolute;
display:flex;
width:94%;
margin-top:95px;
margin-left:5%;
flex-wrap:wrap;
flex-direction:row;
z-index:-8; 
`

const VideoContainer = styled.div`
height:400px;
display:flex;
flex-direction:column;
flex-wrap:wrap;
margin-top:10px;
margin-left:10px;

.video-control{
    border-radius:20px;
    width:360px;
    height:250px;
    margin:15px 15px 10px 15px;
  }
  .video-control:hover{
    border-radius:0px;
    cursor:pointer;
  }

.channel-logo{ 
   position:absolute; 
   border-radius:100%;
   width:37px;
   margin-top:280px;
   margin-left:12px;
 } 
.video-title{  
  width:300px;  
  text-wrap:wrap;
  color:white;  
  margin-left:55px;
  font-family:'Roboto',sans-serif;
}

.channel-details{
  position:absolute;  
  width:300px;  
  text-wrap:wrap;
  color:#a6a6a6; 
  margin-left:55px;
  font-family:'Roboto',sans-serif;
  margin-top:340px;
}

`