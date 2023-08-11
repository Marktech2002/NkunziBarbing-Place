import request from 'request';

// *
  export const initializePayment = (details: any, mycallback: (error : any , body : any) => void) => {
    const options = {
      url: "https://api.paystack.co/subscription",
      headers: {
        Authorization: `Bearer ${process.env.SECRET_KEY}`,
        "content-type": "application/json",
        "cache-control": "no-cache",
      },
     details,
    }
    const callback = (error : any , response : any , body : any ) => {
            return mycallback(error , body) ;
    }
    request.post(options , callback)
  };




