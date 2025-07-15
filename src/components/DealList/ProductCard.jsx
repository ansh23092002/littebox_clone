

const ProductCard = ({    Items}) => {
  return (
    <a className="pr-1 w-full    text-zinc-900 ">
     
      {/* single MovieCard by the uniqe Id */}
      
     <img src="https://littleboxindia.com/cdn/shop/files/Collar_Striped_Long_Sleeve_Shirt.jpg?v=1742282553" alt="" />
      <h2 className=" mt-2 ">{Items.text}</h2>
      <p className=''>Rs. {Items.price}</p>
    
    </a> 
  )
}

export default ProductCard
