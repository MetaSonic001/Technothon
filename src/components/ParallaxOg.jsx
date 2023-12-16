import Plx from "react-plx";
import Img1 from '../assets/pnggg.jpg';
import Img2 from '../assets/noun-bandraworli-sea-link-1019314.png';
import Img3 from '../assets/GG.png';
import "./ParallaxOg.css"

const ParallaxOg = () => {
  return (
    <div className="scene">
    <div className="w-full h-full">
      {/* plx for background image */}
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 700,
            easing: "ease-in",
            properties: [
              {
                startValue: 1,
                endValue: 1.3,
                property: "scale"
              }
            ]
          }
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          zIndex: 100
        }}
      >
        <img style={{ width: "100%", opacity: 0.5 }} src={Img1} alt="foreground" />
      </Plx>
       {/* Text*/}
       <Plx
        parallaxData={[
          {
            start: 0,
            end: 400,
            properties: [
              {
                startValue: 1,
                endValue: 0,
                property: "opacity"
              }
            ]
          }
        ]}
        style={{
          position: "fixed",
          left: "38%",
          top: "20%",
          width: "100%"
        }}
      >
        <img style={{ width: "25vw" }} src={Img3} alt="Title" />
      </Plx>

      {/* plx for overlay */}
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 800,
            properties: [
              {
                startValue: 1,
                endValue: 1.18,
                property: "scale"
              }
            ]
          }
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%"
        }}
      >
        <img style={{ width: "100%" }} src={Img2} alt="background" />
      </Plx>

     

      <div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          zIndex: 200,
          paddingTop: "56%",
          height: "400vh",
          width: "100%"
        }}
      >
        <div style={{ backgroundColor: "#81D0D4", height: "100%" }}></div>
      </div>
    </div>
    </div>
  );
}

export default ParallaxOg;
