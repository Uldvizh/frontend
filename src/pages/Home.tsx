import Header from "./../components/Header/Header";
import AnimatedArrow from './../components/AnimatedArrow/AnimatedArrow';
import GirlCanvas from "./../assets/canvasGrl.png";

const Home = () => {
    return (
        <div>
            <main className="main" id="main1">     
              <Header></Header>
               <div className="background-canvas">



<svg width="1634" height="1066" viewBox="0 0 1634 1066" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_f_12_68)">
<path d="M27.2762 300C402.336 512.796 684.578 615.624 1334 682.245C776.67 758.118 458.389 809.785 27.2762 1079L-87 682.245L27.2762 300Z" fill="#4C3A90"/>
</g>
<defs>
<filter id="filter0_f_12_68" x="-387" y="0" width="2021" height="1379" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_12_68"/>
</filter>
</defs>
</svg>
                 <svg width="1507" height="1066" viewBox="0 0 1507 1066" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_f_12_67)">
<path d="M1497.29 300C1153.64 512.796 895.037 615.624 300 682.245C810.657 758.118 1102.28 809.785 1497.29 1079L1602 682.245L1497.29 300Z" fill="#4C3A90"/>
</g>
<defs>
<filter id="filter0_f_12_67" x="0" y="0" width="1902" height="1379" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_12_67"/>
</filter>
</defs></svg>


<div className="mainBarCanvas">
    <div className="bar-canvas left-bar-Canvas">
        <h1 className="textLabel">УЛДВИЖ</h1>
    </div>
    <div className="bar-canvas right-bar-Canvas">
        <img className="GirlCanvas" src={GirlCanvas} alt="" />
    </div>
</div>



               </div>


            </main>
            
            
        </div>
    );
};

export default Home;