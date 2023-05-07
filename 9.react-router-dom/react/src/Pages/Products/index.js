import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


const Products = () => {
    // un Estado
    const [products, setProducts] = useState([])

    // el hook
    useEffect(() => {
        // el método y su fetch(URL)
        const getProducts = async () => {
            let productsList = await fetch('http://fakestoreapi.com/products')
            productsList = await productsList.json()
            setProducts(productsList)
        }
        getProducts()
    }, [])




    return (
        <>
            <div ClassName="row row-cols-1 row-cols-md-2 g-4">
                {
                    products.map(product => {
                        const { title, price, description, category, image, rating, id } = product
                        return (
                            <div ClassName="col">
                                <Link to={`/product-detail/${id}`}>
                                    <div ClassName="card">
                                        <img src={image} ClassName="card-img-top" alt="..." />
                                        <div ClassName="card-body">
                                            <h5 ClassName="card-title">{title}</h5>
                                            <p ClassName="card-text">{description}.</p>
                                        </div>
                                    </div>
                                </Link>

                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}


export default Products
