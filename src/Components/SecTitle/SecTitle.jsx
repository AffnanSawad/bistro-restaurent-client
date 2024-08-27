

const SecTitle = ({heading,subHeading}) => {
    return (
        <div className="mx-auto md:w-4/12 text-center my-8">
           
           
           
            <p className="text-yellow-600 mb-3">---{subHeading}--- </p>
            <h3 className="text-2xl font-bold uppercase border-y-4 py-4">{heading} </h3>


            
        </div>
    );
};

export default SecTitle;