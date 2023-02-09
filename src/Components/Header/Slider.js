import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../img/1000_F_179084594_m84uQdkgfyXIzAuxyt11u7SQimc1t45V.jpg'
import img2 from '../../img/1000_F_207936521_lVsnUDbSAnkiw1Xoe25RHENgtaYt9IQk.jpg'
import img3 from '../../img/1000_F_220813158_aj0gUojgNgDUJJKmP71kZzBnt9EgPSRp.jpg'

import img5 from '../../img/1000_F_334678586_JH3hCMxMQg538cJcMlyoFnucjJp5eJMn.jpg'


function Slider() {
    return (
        <Carousel >
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                />
                <Carousel.Caption className='text-secondary'>
                    <h3 >Single Room</h3>
                    
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img2}
                    alt="Second slide"
                />

                <Carousel.Caption className='text-secondary'>
                    <h3>Doubble Room</h3>
                    
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img3}
                    alt="Third slide"
                />

                <Carousel.Caption className='text-secondary'>
                    <h3>Triple</h3>
                    
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img5}
                    alt="Third slide"
                />

                <Carousel.Caption className='text-secondary'>
                    <h3>Quad Room</h3>
                    
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    );
}

export default Slider;