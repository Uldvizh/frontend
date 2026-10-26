import Header from "./../components/Header/Header";
import { Carousel } from 'react-bootstrap';

const Home = () => {
    return (
        <div>
            <main className="main" id="main1">     
                <Header />
                
                <div className="background-canvas">
                    <Carousel className="fullscreen-carousel" fade={false} controls={true} indicators={true}>
                        <Carousel.Item>
                            <div className="carousel-slide bg-primary">
                                <h2>Слайд 1</h2>
                            </div>
                        </Carousel.Item>
                        
                        <Carousel.Item>
                            <div className="carousel-slide bg-secondary">
                                <h2>Слайд 2</h2>
                            </div>
                        </Carousel.Item>
                        
                        <Carousel.Item>
                            <div className="carousel-slide bg-dark">
                                <h2>Слайд 3</h2>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </main>

            <main className="main" id="main2">
                <svg className="qwe" width="1771" height="844" viewBox="0 0 1771 844" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="1771" height="844" rx="109" fill="white" fillOpacity="0.01"/>
                </svg>
            </main>
        </div>
    );
};

export default Home;