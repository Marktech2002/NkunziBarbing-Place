import { useState, useEffect } from "react";
import { NavBar } from "../sections/Dashboard";
import Loading from "../components/loading";

const Subscribe = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="">
      {loading ? (
        <Loading />
      ) : (
        <div className="font-display">
          <section>
            <NavBar />
          </section>
          {/*  */}
          <div className="">
            <div className="">
              <h2 className=" tracking-wider text-xl mt-[100px] ml-8 md:ml-[100px]">
                Welcome Champ,
              </h2>
              <p className="mt-[15px] tracking-wider ml-9 mb-3 md:ml-[200px]">
                Plan
              </p>
            </div>
            <div className="flex flex-col gap-12 items-center md:ml-[200px] md:flex-row">
              {/* box for plan */}
              <div className="border-2 shadow-lg shadow-bgLight w-fit px-6 py-6 rounded-lg">
                <div className="flex gap-[140px] md:gap-[220px]">
                  <h2>Monthly </h2>
                  <p>
                    <span className="font-bold"> N21k</span>/month
                  </p>
                </div>
                <p className="text-grayColor text-sm">30 days available</p>
                <p className="border-2 px-3 py-1 mt-5 w-fit rounded-md hover:bg-white cursor-pointer">
                  Active Subscription
                </p>
              </div>
              <div className="border-2 border-bgLight w-fit px-6 py-6 rounded-lg">
                <div className="flex gap-[140px] md:gap-[220px]">
                  <h2>Yearly </h2>
                  <p>
                    <span className="font-bold"> N250k</span>/month
                  </p>
                </div>
                <p className="text-grayColor text-sm">365 days available</p>
                <p className="border-2 px-3 py-1 mt-5 rounded-md hover:bg-white cursor-pointer w-fit">
                  Change Subscription
                </p>
              </div>
            </div>
            {/*  */}
            <div className="mt-[50px] tracking-wider ml-9 mb-3 md:ml-[200px]">
              <div className="flex gap-32 mr-6 items-center justify-center md:justify-start md:gap-[500px]">
                <h2 className="text-lg leading-none">Enable Auto renew </h2>
                <div className="relative inline-block">
                  <input
                    type="checkbox"
                    id="hs-small-switch-soft"
                    className="peer relative w-10 h-6 p-px bg-gray-100 border border-gray-200 text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-white disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-blue-100 checked:border-blue-200 focus:checked:border-blue-200 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-800/30 dark:checked:border-white dark:focus:ring-offset-gray-600 before:inline-block before:w-5 before:h-5 before:bg-white checked:before:bg-white before:translate-x-0 checked:before:translate-x-full before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-white"
                  />
                  <label htmlFor="hs-small-switch-soft" className="sr-only">
                    switch
                  </label>
                </div>
              </div>
              <p className="mt-4 mr-4">
                The option is checked by default , if the current plan expires
                your subscription will be renewed automatically.
              </p>
            </div>
            {/* Payment History */}
            <h2 className="mt-[38px] tracking-wider ml-9 mb-3 md:ml-[200px]">Billing History</h2>
            <div className="flex flex-col">
              <div className="-m-1.5 mt- ml-5 mr-5 overflow-x-auto md:ml-[190px]">
                <div className="p-1.5 max-w-fit md:min-w-full inline-block align-middle">
                  <div className="border rounded-lg shadow overflow-hidden dark:border-gray-700 dark:shadow-gray-900">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                      <thead className="bg-black bg-opacity-80">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-start tracking-widest text-xs font-medium text-gray-500 uppercase dark:text-gray-400"
                          >
                            DATE 
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-gray-400"
                          >
                            DETAILS
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-gray-400"
                          >
                           AMOUNT
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-gray-400"
                          >
                          PLAN
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y bg-black divide-gray-200 dark:divide-gray-700">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                           01/01/2024
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                            Beginner Plan
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                            N21,000.00
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                            <button
                              type="button"
                              className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-grayColor hover:text-blue-800"
                            >
                             Monthly
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                           01/02/2024
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                            Premium Plan
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                            N210,000.00
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                            <button
                              type="button"
                              className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-grayColor hover:text-blue-800"
                            >
                             Yearly
                            </button>
                          </td>
                        </tr>

                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Subscribe;
