import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {

    const [selectedProduct, setSelectedProduct] = useState({})

    const {id} = useParams()
    useEffect(() = {
        const getProductById = async () => {
            let result = await fetch(`http://fakestoreapi.com/products/${id}`)
            result = await result.json()
            setSelectedProduct(result)
        }
        getProductById()
    }, [])
    
    const {image, title, description} = selectedProduct

    return (
        <>
            <h1>Detalle de Producto:</h1>
            <div ClassName="card">
                <img src={image} ClassName="card-img-top" alt="..." />
                <div ClassName="card-body">
                    <h5 ClassName="card-title">{title}</h5>
                    <p ClassName="card-text">{description}</p>
                    {/* <p ClassName="card-text">{category}</p> */}
                    {/* <p ClassName="card-text">{price}</p> */}
                </div>
            </div>
        </>
    )
}


export default ProductDetail