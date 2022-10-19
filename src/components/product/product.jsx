import './product.scss'

const Product = ({img, link}) => {

    return(
        <div className='p'>
            <div className="p__browser">
                <div className="p__browser-circle"></div>
                <div className="p__browser-circle"></div>
                <div className="p__browser-circle"></div>
            </div>
            <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={img} alt={link}className='p__img' />
            </a>
        </div>
    );
}

export default Product;