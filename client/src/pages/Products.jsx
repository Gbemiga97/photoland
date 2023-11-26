
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { CategoryNav, Product } from "../components";
import { useEffect, useState } from "react";

const Products = () => {
  const {id} = useParams()

  //get products based on category id
  const {data} = useFetch(`/products?populate=*&filters[categories][id][$eq=${id}`)

  const [title, setTitle] = useState(null)

  //set the title when the data is fetched

  useEffect(() => {
    if(data) {
      setTitle(data[0].attributes.categories.data[0].attributes.title)
    }
  })

  return (
    <section className="mb-16 pt-40 lg:pt-0">
      <div className="container mx-auto">
        <div className="flex gap-[1.8rem]">
          <CategoryNav />

          <main>

            {/* title */}
            
              <p className="py-3 text-xl uppercase text-center lg:text-left">
                {title}</p>
           

            {/* products */}
            <div className="grid  grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-[15px] md:gap-[1.8rem]">
              {
                data?.map(product => (
                  <Product product={product} key={product.id} />
                ))
              }
            </div>
          </main>
        </div>
      </div>
    </section>
  )
};

export default Products;
