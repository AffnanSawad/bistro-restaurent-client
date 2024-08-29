

const FoodCard = ({item}) => {

  
    const {name , image , price , recipe} = item;


    return (
        <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    
  

    <img
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body flex flex-col items-center font-semibold">
    <h2 className="card-title"> {name} </h2>
    <p> {recipe} </p>
    <p>Price : ${price} </p>
   
    <div className="card-actions ">
      <button className="btn  btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4">Add To Cart</button>
    </div>
  </div>
</div>
    );
};

export default FoodCard;