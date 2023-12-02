import { Link, useLocation } from 'react-router-dom';

function footerTabs() {
    const currentPage = useLocation().pathname;

    return(
        <ul className='footer-container'>
            <div  className="footer-image">
                <a href="https://www.linkedin.com/login"><img src='./LinkedIn.svg'></img></a>
            </div>
            <div className="footer-image">
                <a href="https://github.com/Wgomez1987"><img src='./github.svg'></img></a>
            </div>
        </ul>
    )
}
export default footerTabs;