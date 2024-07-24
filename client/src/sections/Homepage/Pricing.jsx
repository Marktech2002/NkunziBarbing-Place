const Pricing = () => {
  return (
    <div className="flex flex-col gap-7 mt-6  justify-center items-center md:flex-row md:gap-12 md:ml-[200px] md:mt-[100px]">
      <div className="w-[85%] font-display max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-bgBlack  dark:border-gray-700 hover:border-white hover:border-2">
        <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
          Monthly Plan
        </h5>
        <div className="flex items-baseline text-gray-900 dark:text-white">
          <span className="text-3xl font-semibold">N</span>
          <span className="text-5xl font-extrabold tracking-tight">21k</span>
          <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
            /month
          </span>
        </div>
        <ul role="list" className="space-y-5 my-7">
          <li className="flex space-x-3 items-center">
            <svg
              className="flex-shrink-0 w-4 h-4 text-bgLight dark:text-tomatoColor"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              3 Sessions.
            </span>
          </li>
          <li className="flex space-x-3">
            <svg
              className="flex-shrink-0 w-4 h-4 text-bgLight dark:text-tomatoColor"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              Flexible
            </span>
          </li>
          <li className="flex space-x-3">
            <svg
              className="flex-shrink-0 w-4 h-4 text-bgLight dark:text-tomatoColor"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              A month free access
            </span>
          </li>
          <li className="flex space-x-3 line-through decoration-gray-500">
            <svg
              className="flex-shrink-0 w-4 h-4text-bgLight dark:text-tomatoColor"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500">
              Yearly
            </span>
          </li>
          <li className="flex space-x-3 line-through decoration-gray-500">
            <svg
              className="flex-shrink-0 w-4 h-4 text-bgLight dark:text-tomatoColor"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500">
              Reschedule
            </span>
          </li>
          <li className="flex space-x-3 line-through decoration-gray-500">
            <svg
              className="flex-shrink-0 w-4 h-4 text-bgLight dark:text-tomatoColor"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500">
              Refreshments
            </span>
          </li>
          <li className="flex space-x-3 line-through decoration-gray-500">
            <svg
              className="flex-shrink-0 w-4 h-4text-bgLight dark:text-tomatoColor"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500">
              24×7 email support
            </span>
          </li>
        </ul>
        <button
          type="button"
          className="text-tomatoColor border-t-tomatoColor border-[5px] bg-bgLight hover:bg-gray-300 focus:ring-2 focus:outline-none focus:ring-blue-200 hover:tracking-wider font-medium rounded-lg text-[20px] px-5 py-2 inline-flex justify-center w-full text-center"
        >
          Choose plan
        </button>
      </div>
      <div className="w-[85%] font-display max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-bgBlack  dark:border-gray-700 hover:border-white hover:border-2">
        <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
          Yearly Plan
        </h5>
        <div className="flex items-baseline text-gray-900 dark:text-white">
          <span className="text-3xl font-semibold">N</span>
          <span className="text-5xl font-extrabold tracking-tight">250k</span>
          <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
            /year
          </span>
        </div>
        <ul role="list" className="space-y-5 my-7">
          <li className="flex space-x-3 items-center">
            <svg
              className="flex-shrink-0 w-4 h-4 text-bgLight dark:text-tomatoColor"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              40 Sessions.
            </span>
          </li>
          <li className="flex space-x-3">
            <svg
              className="flex-shrink-0 w-4 h-4 text-bgLight dark:text-tomatoColor"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              Flexible
            </span>
          </li>
          <li className="flex space-x-3">
            <svg
              className="flex-shrink-0 w-4 h-4 text-bgLight dark:text-tomatoColor"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              A month free access
            </span>
          </li>
          <li className="flex space-x-3  decoration-gray-500">
            <svg
              className="flex-shrink-0 w-4 h-4text-bgLight dark:text-tomatoColor"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500">
              Yearly
            </span>
          </li>
          <li className="flex space-x-3  decoration-gray-500">
            <svg
              className="flex-shrink-0 w-4 h-4 text-bgLight dark:text-tomatoColor"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500">
              Reschedule
            </span>
          </li>
          <li className="flex space-x-3 decoration-gray-500">
            <svg
              className="flex-shrink-0 w-4 h-4 text-bgLight dark:text-tomatoColor"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500">
              Refreshments
            </span>
          </li>
          <li className="flex space-x-3 decoration-gray-500">
            <svg
              className="flex-shrink-0 w-4 h-4text-bgLight dark:text-tomatoColor"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500">
              24×7 contact and email support
            </span>
          </li>
        </ul>
        <button
          type="button"
          className="text-tomatoColor border-t-tomatoColor border-[5px] bg-bgLight hover:bg-gray-300 focus:ring-2 focus:outline-none focus:ring-blue-200 hover:tracking-wider font-medium rounded-lg text-[20px] px-5 py-2 inline-flex justify-center w-full text-center"
        >
          Choose plan
        </button>
      </div>
      <div className="w-[85%] font-display max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-bgBlack  dark:border-gray-700 hover:border-white hover:border-2">
        <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
          Yearly Plan
        </h5>
        <div className="flex items-baseline text-gray-900 dark:text-white">
          <span className="text-3xl font-semibold">N</span>
          <span className="text-5xl font-extrabold tracking-tight">250k</span>
          <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
            /year
          </span>
        </div>
        <ul role="list" className="space-y-5 my-7">
          <li className="flex space-x-3 items-center">
            <svg
              className="flex-shrink-0 w-4 h-4 text-bgLight dark:text-tomatoColor"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              40 Sessions.
            </span>
          </li>
          <li className="flex space-x-3">
            <svg
              className="flex-shrink-0 w-4 h-4 text-bgLight dark:text-tomatoColor"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              Flexible
            </span>
          </li>
          <li className="flex space-x-3">
            <svg
              className="flex-shrink-0 w-4 h-4 text-bgLight dark:text-tomatoColor"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              A month free access
            </span>
          </li>
          <li className="flex space-x-3  decoration-gray-500">
            <svg
              className="flex-shrink-0 w-4 h-4text-bgLight dark:text-tomatoColor"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500">
              Yearly
            </span>
          </li>
          <li className="flex space-x-3  decoration-gray-500">
            <svg
              className="flex-shrink-0 w-4 h-4 text-bgLight dark:text-tomatoColor"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500">
              Reschedule
            </span>
          </li>
          <li className="flex space-x-3 decoration-gray-500">
            <svg
              className="flex-shrink-0 w-4 h-4 text-bgLight dark:text-tomatoColor"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500">
              Refreshments
            </span>
          </li>
          <li className="flex space-x-3 decoration-gray-500">
            <svg
              className="flex-shrink-0 w-4 h-4text-bgLight dark:text-tomatoColor"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500">
              24×7 contact and email support
            </span>
          </li>
        </ul>
        <button
          type="button"
          className="text-tomatoColor border-t-tomatoColor border-[5px] bg-bgLight hover:bg-gray-300 focus:ring-2 focus:outline-none focus:ring-blue-200 hover:tracking-wider font-medium rounded-lg text-[20px] px-5 py-2 inline-flex justify-center w-full text-center"
        >
          Choose plan
        </button>
      </div>
    </div>
  );
};

export default Pricing;
