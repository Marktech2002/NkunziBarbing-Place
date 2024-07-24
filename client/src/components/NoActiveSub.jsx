/* eslint-disable react/no-unescaped-entities */


const NoActiveSubscription = () => {
    return (
    <div className="font-display">
        <div className="flex flex-col mt-[96px] items-center justify-center  md:ml-[56px]">
             <img className="md:w-[200px] md:h-[200px]" src="https://img.icons8.com/plasticine/100/general-warning-sign.png" alt="general-warning-sign"/> 
             <h1 className="font-bold">No Active Subscription</h1>
             <p className="text-center leading-snug max-w-[371px] mt-2 md:max-w-none md:leading-normal md:text-lg md:tracking-wide">You don't have an active subscription, kindly hit the subscribe button to get started.</p>
             <a href="/" className="mt-8 tracking-wide text-gray-900 bg-gradient-to-r from-white via-yellow-100 to-yellow-100 hover:bg-gradient-to-bl hover:border-2 hover:border-gray-800 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-yellow-400 font-semibold rounded-lg text-sm px-[54px] py-2.5 text-center me-2 mb-2 ">Subscribe <span className="pl-2">→</span></a>
       </div>
    </div>
);
}
 
export default NoActiveSubscription;