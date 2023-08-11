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

// {
//     status: true,
//     message: 'Verification successful',
//     data: {
//       id: 3014830613,
//       domain: 'test',
//       status: 'success',
//       reference: 'c5pmchovnw',
//       receipt_number: null,
//       amount: 2100000,
//       message: null,
//       gateway_response: 'Successful',
//       paid_at: '2023-08-09T20:34:10.000Z',
//       created_at: '2023-08-09T20:33:43.000Z',
//       channel: 'card',
//       currency: 'NGN',
//       ip_address: '154.118.26.149',
//       metadata: '',
//       log: {
//         start_time: 1691613232,
//         time_spent: 18,
//         attempts: 1,
//         errors: 0,
//         success: true,
//         mobile: false,
//         input: [],
//         history: [Array]
//       },
//       fees: 41500,
//       fees_split: null,
//       authorization: {
//         authorization_code: 'AUTH_8jkaes32jy',
//         bin: '408408',
//         last4: '4081',
//         exp_month: '12',
//         exp_year: '2030',
//         channel: 'card',
//         card_type: 'visa ',
//         bank: 'TEST BANK',
//         country_code: 'NG',
//         brand: 'visa',
//         reusable: true,
//         signature: 'SIG_Dxk3eJc7KeIBF8XVSsfE',
//         account_name: null
//       },
//       customer: {
//         id: 133202527,
//         first_name: null,
//         last_name: null,
//         email: 'mak@gmail.com',
//         customer_code: 'CUS_ao0t9pntixvq8is',
//         phone: null,
//         metadata: null,
//         risk_action: 'default',
//         international_format_phone: null
//       },
//       plan: 'PLN_kul05jcfzis6z1t',
//       split: {},
//       order_id: null,
//       paidAt: '2023-08-09T20:34:10.000Z',
//       createdAt: '2023-08-09T20:33:43.000Z',
//       requested_amount: 2100000,
//       pos_transaction_data: null,
//       source: null,
//       fees_breakdown: null,
//       transaction_date: '2023-08-09T20:33:43.000Z',
//       plan_object: {
//         id: 879036,
//         name: 'For Monthly Session',
//         plan_code: 'PLN_kul05jcfzis6z1t',
//         description: null,
//         amount: 2100000,
//         interval: 'monthly',
//         send_invoices: true,
//         send_sms: true,
//         currency: 'NGN'
//       },
//       subaccount: {}
//     }
//   }
  