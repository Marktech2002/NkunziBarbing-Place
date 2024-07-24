const Button = ({label , iconURL}) => {
    return (
        <button className="flex justify-center items-center gap-1 px-7 py-3 text-lg text-white leading-none bg-black -ml-20 md:-ml-8">
          {label}
          <img src={iconURL} alt="Arrow right icon" className="ml-2 rounded-full w-5 h-5"/>
        </button>
    ); 
}
 
export default Button; 