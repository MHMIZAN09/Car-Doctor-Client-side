import img1 from '../../../assets/images/banner/1.jpg';
import img2 from '../../../assets/images/banner/2.jpg';
import img3 from '../../../assets/images/banner/3.jpg';
import img4 from '../../../assets/images/banner/4.jpg';

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="relative w-full carousel-item ">
                <img src={img1} className="w-full rounded-xl" />
                <div className="absolute rounded-xl h-full left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='pt-24 pl-12 text-white space-y-7'>
                        <h2 className="text-5xl font-bold">Affordable <br />
                            Price For Car <br /> Servicing</h2>
                        <p>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div className='flex gap-7'>
                            <button className='btn btn-primary'>Discover More</button>
                            <button className='btn btn-outline btn-secondary'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 flex justify-end transform -translate-y-1/2 left-5 right-5">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="relative w-full carousel-item">
                <img src={img2} className="w-full rounded-xl" />
                <div className="absolute rounded-xl h-full left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='pt-24 pl-12 text-white space-y-7'>
                        <h2 className="text-5xl font-bold">Affordable <br />
                            Price For Car <br /> Servicing</h2>
                        <p>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div className='flex gap-7'>
                            <button className='btn btn-primary'>Discover More</button>
                            <button className='btn btn-outline btn-secondary'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 flex justify-end transform -translate-y-1/2 left-5 right-5">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="relative w-full carousel-item">
                <img src={img3} className="w-full" />
                <div className="absolute rounded-xl h-full left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='pt-24 pl-12 text-white space-y-7'>
                        <h2 className="text-5xl font-bold">Affordable <br />
                            Price For Car <br /> Servicing</h2>
                        <p>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div className='flex gap-7'>
                            <button className='btn btn-primary'>Discover More</button>
                            <button className='btn btn-outline btn-secondary'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 flex justify-end transform -translate-y-1/2 left-5 right-5">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="relative w-full carousel-item">
                <img src={img4} className="w-full" />
                <div className="absolute rounded-xl h-full left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='pt-24 pl-12 text-white space-y-7'>
                        <h2 className="text-5xl font-bold">Affordable <br />
                            Price For Car <br /> Servicing</h2>
                        <p>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div className='flex gap-7'>
                            <button className='btn btn-primary'>Discover More</button>
                            <button className='btn btn-outline btn-secondary'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 flex justify-end transform -translate-y-1/2 left-5 right-5">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
           
        </div>
        
    );
};

export default Banner;