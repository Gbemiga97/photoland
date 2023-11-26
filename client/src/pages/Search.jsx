import { useLocation } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { CategoryNav, Product } from "../components";


const Search = () => {

  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const searchTerm = searchParams.get('query')

  //get products based on search
  const {data} = useFetch(`products?populate=*&filters[title][$contains]=${searchTerm}`)

  console.log(data)

  return (
   <section className="mb-7 pt-40 lg:pt-4 xl:pt-0">
    <div className="container mx-auto">
      <div className="flex gap-x-7">
        {/* category nav */}
        <CategoryNav />
      <div>
        {/* title */}
        <div className="py-3 text-xl uppercase text-center lg:text-left ">
          {
            data?.length > 0 ? `${data.length} results for ${searchTerm}` : `no results found for ${searchTerm}`
          }
        </div>
        {/* products grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-[15px] md:gap-7">
          {
            data?.map(product => (
              <Product product={product} key={product.id} />
            ))
          }
        </div>
      </div>
      </div>
    </div>
   </section>
  )
};

export default Search;
