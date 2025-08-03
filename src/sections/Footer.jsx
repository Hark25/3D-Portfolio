import { socialImgs } from '../Constants/index.js';

const Footer = () => {
    return ( 
        <footer className="footer">
            <div className="footer-container">

                <div className="flex flex-col justify-center md:items-start items-center">
                    <a href="/"> Thank You </a>
                </div>

                <div className="socials">
                    {socialImgs.map((img) => (
                        <a href={img.link} target='_blank' rel='noopener noreferrer' className='icon' key={img.link}>
                            <img src={img.imgPath} alt={img.name} />
                        </a>
                    ))}
                </div>

                <div className="flex flex-col justify-center">
                    <p className='text-center md:text-end'>© {new Date().getFullYear()} Harkeerat Lit. All rights reservered.</p>
                </div>

            </div>
        </footer>
     );
}
 
export default Footer;