import './App.css'
import Logo from "../src/assets/dvmFarewellLogo.png"
import Arrow from "../src/assets/leftArrow.png"
import Sunpreet from "../src/assets/sunpreet.png"
import Ritik from "../src/assets/ritik.jpg"
import React, {useState} from 'react'
function App() {
  const data = [
    { name: 'Sunpreet', team: 'Design', image: Sunpreet },
    {name: "Ritik", team: "Frontend", image:Ritik},
    { name: 'Sunpreet', team: 'Design', image: Sunpreet },
    {name: "Ritik", team: "Frontend", image:Ritik},
    { name: 'Sunpreet', team: 'Design', image: Sunpreet },
    {name: "Ritik", team: "Frontend", image:Ritik},
    { name: 'Sunpreet', team: 'Design', image: Sunpreet },
    {name: "Ritik", team: "Frontend", image:Ritik},
    { name: 'Sunpreet', team: 'Design', image: Sunpreet },
    {name: "Ritik", team: "Frontend", image:Ritik},
    { name: 'Sunpreet', team: 'Design', image: Sunpreet },
    {name: "Ritik", team: "Frontend", image:Ritik},
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNavigation = (direction) => {
    const newIndex =
      direction === 'left'
        ? (currentIndex - 1 + data.length) % data.length
        : (currentIndex + 1) % data.length;

    setCurrentIndex(currentIndex==data.length-1? 0:currentIndex+1);
  };
  return (
    <>
    <div className='pageWrapper'>
      <div className="dvmLogo">
        <img src={Logo} alt="" />
      </div>
      <div className="leftSideWrapper">
        <div className="topTextWrapper">
          <div className='flexContainer'>
        <div className="heading">
          Farewell
        </div>
          <span className='rotateText'>2020</span>
          </div>
          <p>Your vibes made our time here awesome. Take all the good stuff with you—memories, laughs, and a ton of wisdom. The world's lucky to get you. Cheers to your next adventure!</p>
        </div>
        <div className="bottomTextWrapper">
<span>DEPARTMENT OF VISUAL MEDIA 2023</span>
        </div>
        </div>
        <div className="rightSideWrapper">
          <div className="carouselContainer">
            <div className="leftBtn" onClick={() => handleNavigation('left')}>
              <img src={Arrow} alt="" />
            </div>
            {/* <div className="info">
              <img src={Sunpreet} alt="" />
              <div className="infoText">
                <span className='name'>Sunpreet</span>
                <span className="team">Design</span>
              </div>
              <img src={data[currentIndex].image} alt={data[currentIndex].name} />
          <div className="infoText">
            <span className="name">{data[currentIndex].name}</span>
            <span className="team">{data[currentIndex].team}</span>
          </div>
            </div> */}
             <div className="info">
          {data.map((item, index) => (
            <div
              key={index}
              className={`carouselItem ${
                index === currentIndex ? 'active' : 'inactive'
              } ${index === currentIndex - 1 ? 'previous' : ''}`}
            >
              <img src={item.image} alt={item.name} />
              <div className="infoText">
                <span className="name">{item.name}</span>
                <span className="team">{item.team}</span>
              </div>
            </div>
          ))}
        </div>
          </div>
        </div>
    <div className="dvm">
      <span>DEPARTMENT OF VISUAL MEDIA 2023</span>
    </div>
    </div>
    </>
  )
}

export default App
