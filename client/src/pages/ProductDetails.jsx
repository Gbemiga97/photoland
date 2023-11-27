import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { RelatedProducts } from "../components";
import { useCartContext } from "../context/CartContext";


const ProductDetails = () => {

  const {addToCart} = useCartContext()
  const {id} = useParams()
  

  const {data} = useFetch(`/products?populate=*&filters[id][$eq]=${id}`)

  if(!data) {
    return <div className="container mx-auto">Loading...</div>
  }


  //category title
  const categoryTitle = data[0].attributes.categories.data[0].attributes.title

  return (
    <section className="mb-16 pt-44 lg:pt-[1.8rem] xl:pt-0">
      <div className="container mx-auto">
        {/* text */}
        <div className="flex flex-col lg:flex-row gap-[1.8rem] mb-[1.8rem]">
          <div className="flex-1 lg:max-w-[40%] lg:h-[540px] grad rounded-lg flex items-center justify-center">
            <img 
            className="w-full max-w-[65%]"
            src={`http://localhost:1337${data[0].attributes.image.data.attributes.url}`}
            alt={data[0].attributes.title} />
          </div>
          <div className="flex-1 bg-primary p-12 xl:p-20 rounded-lg flex flex-col justify-center">
            {/* category title */}
            <p className="uppercase text-accent text-lg font-medium mb-2">
              {data[0].attributes.categories.data[0].attributes.title} Cameras
            </p>

            {/* title */}
            <h2 className="h2 mb-4">
              {data[0].attributes.title}
            </h2>

            {/* description */}
            <p className="mb-12">
              {data[0].attributes.description}
            </p>

            <div className="flex items-center gap-x-8 ">
              <h3 className="text-3xl text-accent font-semibold">
                ${data[0].attributes.price}
              </h3>
              <button
              onClick={() => addToCart(data, id)}
              className="btn btn-accent">
                Add to cart</button>
            </div>

          </div>
        </div>

        {/* related products */}
        <RelatedProducts categoryTitle={categoryTitle} />
      </div>
    </section>
  )
};

export default ProductDetails;
