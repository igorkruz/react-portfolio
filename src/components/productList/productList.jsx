import Product from '../product/product';
import { products } from '../../data';

import './productList.scss'

const ProductList = () => {
    return (
        <div className = 'pl'>
            <div className="pl__text">
                <h1 className="pl__text-title">Create & inspire</h1>
                <p className="pl__text-descr">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea dolorem sit consequuntur, ratione minus repudiandae aut doloribus repellat aliquam illum quas delectus reprehenderit explicabo molestiae, vero, pariatur nulla? Quod, explicabo!
                </p>
            </div>
             <div className="pl__list">
                {
                    products.map(item => (
                        <Product key={item.id} img={item.img} link={item.link}/>
                    ))
                }
             </div>
        </div>
    );
}

export default ProductList;
