export interface IUserLogin {
    email : string ;
    password : string ;
}

export enum planTypes {
    Monthly = "monthly",
    Annually = "yearly",
}

// {
//     status: true,
//     message: 'Authorization URL created',
//     data: {
//       authorization_url: 'https://checkout.paystack.com/1c1xktde1ftlv3n',
//       access_code: '1c1xktde1ftlv3n',
//       reference: 'bad1v2yk35'
//     }
//   }
  