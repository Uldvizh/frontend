import Header from "./../components/Header/Header";
import AnimatedArrow from './../components/AnimatedArrow/AnimatedArrow';

const Home = () => {
    return (
        <div>
            <main className="main" id="main1">     
                <div className="girlCanvas"></div>
                <h5 className="textLabels" id="textLabel1">Куда сходим?</h5>
                <h5 className="textLabels" id="textLabel2">Что в городе?</h5>
                <h5 className="textLabels" id="textLabel3">Где движуха?</h5>
                <h1>УлДВИЖ</h1>
            <AnimatedArrow id="arrow-left" className="arrow-animated" />
            <AnimatedArrow id="arrow-right" className="arrow-animated" />
            </main>
            <main className="main" id="main2">
            <Header/>   
            </main>
        </div>
    );
};

export default Home;