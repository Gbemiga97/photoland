import useFetch from "../hooks/useFetch";
import {ProductSlider} from ".";


const RelatedProducts = ({categoryTitle}) => {
//get products bt category title
  const {data} = useFetch(`/products?populate=*&filters[categories][title]=${categoryTitle}`)

  return (
    <section className="mb-16">
      <div className="container mx-auto">
        <h2 className="h2 mb-6 text-center xl:text-left">
          Related Products</h2>
        <ProductSlider data={data} />
      </div>
    </section>
  )
};

export default RelatedProducts;
