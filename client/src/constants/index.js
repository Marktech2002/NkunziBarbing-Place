export const navLinks = [
    { to: "/", label: "HOME" },
    { to: "/", label: "ABOUT" },
    { to: "/", label: "SERVICES" },
    { to: "/login", label: "LOGIN" },
    { to: "/register", label: "REGISTER" },
];

export const buttonLinks = [
    {to : "/login" , label : "Appointment"}
]

export const reviews = [
     {no : "01" , label: "EVERYTIME I VISIT NKUNZICUT I GET FRESH CUTS AND CLEAN SHAVES. BEST BARBER SERVICE IN TOWN." , user : "WEEVIL 👽"},
     {no : "02" , label: "EVERYTIME I VISIT NKUNZICUT I GET FRESH CUTS AND CLEAN SHAVES. BEST BARBER SERVICE IN TOWN." , user : "AHMED AHMED"},
     {no : "03" , label: "EVERYTIME I VISIT NKUNZICUT I GET FRESH CUTS AND CLEAN SHAVES. BEST BARBER SERVICE IN TOWN." , user : "FEMI FICASSO "},
     {no : "04" , label: "EVERYTIME I VISIT NKUNZICUT I GET FRESH CUTS AND CLEAN SHAVES. BEST BARBER SERVICE IN TOWN." , user : "BULU SMOPH"},
]

export const footerHeader = [
    {no : "1" , label : "HAIR CUT"},
    {no : "2" , label : "SHAVING"},
    {no : "3" , label : "FACIAL"},
    {no : "4" , label : "TRIMMING"},
    {no : "5" , label : "CLIPPER"},
    {no : "6" , label : "PEDICURE"},
    {no : "3" , label : "FACIAL"},
]

export const dummyAppointments = [
    // {
    //   userId: 1,
    //   description: "Hair Soft locs takedown",
    //   appointmentDate: "2023-07-15T13:30:00.000Z",
    //   timestamp: 1637356800000, 
    // },
    // {
    //   userId: 2,
    //   description: "Checkup with Nkunzi",
    //   appointmentDate: "2023-07-16T13:45:00.000Z",
    //   timestamp: 1637832000000,
    // },
  ];

export const planCodes = {
    Monthly: "PLN_jm0ev7b0qn3tum9",
    Yearly: "PLN_h62lib9hb001enm",
};

export const backendURL = {
   register : "http://localhost:80/nkunzi/user/register",
   login : "http://localhost:80/nkunzi/user/login",
   getUser : "http://localhost:80/nkunzi/user/me",
}
