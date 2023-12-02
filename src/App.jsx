import './App.css'
import Logo from "../src/assets/dvmFarewellLogo.png"
import Arrow from "../src/assets/leftArrow.png"
import Sunpreet from "../src/assets/sunpreet.png"
function App() {

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
            <div className="leftBtn">
              <img src={Arrow} alt="" />
            </div>
            <div className="info">
              <img src={Sunpreet} alt="" />
              <div className="infoText">
                <span className='name'>Sunpreet</span>
                <span className="team">Design</span>
              </div>
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
