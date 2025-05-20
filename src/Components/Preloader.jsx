
import loader from "../assets/preloader.gif"; 
const Preloader = () => {
  return (
    <div className="flex justify-center align-items-center">
      <img src={loader} alt="loader" srcset="" className="w-100 h-80" />
    </div>
  );
}

export default Preloader
