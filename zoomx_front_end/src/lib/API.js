// import axios from 'axios'
// export const doPost = async (path, headers, formData) => {
//     return axios({
//         url: BASE_URL + path,
//         method: 'POST',
//         headers: headers,
//         data: formData
//     })
// }

// export const doGet = async (path, headers) => {
//     return axios({
//         url: BASE_URL + path,
//         method: 'GET',
//         headers: headers
//     })
// }

// export const doPut = async (path, headers, formData) => {
//     return axios({
//         url: BASE_URL + path,
//         method: 'PUT',
//         headers: headers,
//         data: formData
//     })
// }


// import moment from 'moment';
// import { useEffect, useState } from 'react';

// import { doGet, doPost, doPut } from './API';

// export const useSearchFlight = () => {
//     const [data, setData] = useState(null);
//     const [error, setError] = useState(null);
//     const [loading, setLoading] = useState(null);
//     async function handleSubcribeAPI(searchDTO) {
//         setLoading(true)
//         const path = "/api/vietjet/v1/search-flights"
//         const headers = {
//             Accept: "*/*",
//             "Content-Type": "application/json",
//         }
//         const formData = JSON.stringify(searchDTO)

//         try {
//             var resp = await doPost(path, headers, formData);
//             if (resp.status == 200) {
//                 setData(resp.data)
//             }
//         } catch (e) {
//             alert("Không thể kết nối VIETJET")
//             setError(e)
//         }
//         setLoading(false)
//     }

//     return { data, error, loading, handleSubcribeAPI }
// }

// export const useCurrentUser = (username) => {
//     const [data, setData] = useState(null);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         let user = JSON.parse(localStorage.getItem("currentUser"))
//         if (user)
//             setData(user)
//         else
//             getCurrentUser()
//     }, []);

//     async function getCurrentUser() {
//         const path = "/api/v1/user/current?username=" + username
//         const headers = {
//             Accept: "*/*"
//         }

//         try {
//             var resp = await doGet(path, headers);
//             if (resp.status == 200) {
//                 setData(resp.data)
//             }
//         } catch (e) {
//             setError(e)
//         }
//     }
//     return { data, error, loading: (data || error ? false : true) }
// }
// export const usePaymentMethods = (flightDTO) => {
//     const [data, setData] = useState(null);
//     const [error, setError] = useState(null);
//     const [loading, setLoading] = useState(null);

//     useEffect(() => {
//         getPaymentMethods(flightDTO)
//     }, []);

//     async function getPaymentMethods(flightDTO) {
//         setLoading(true)
//         const path = "/api/vietjet/v1/payment-methods"
//         const headers = {
//             Accept: "*/*",
//             "Content-Type": "application/json",
//         }
//         const formData = JSON.stringify(flightDTO)

//         try {
//             var resp = await doPost(path, headers, formData);
//             if (resp.status == 200) {
//                 setData(resp.data)
//             }
//         } catch (e) {
//             alert("Không thể kết nối VIETJET")
//             setError(e)
//         }
//         setLoading(false)
//     }

//     return { data, error, loading }
// }

// export const useTabAddons = (flightDTO) => {
//     const [data, setData] = useState(null);
//     const [error, setError] = useState(null);
//     const [loading, setLoading] = useState(null);

//     useEffect(() => {
//         getTabAddons()
//     }, []);

//     async function getTabAddons() {
//         setLoading(true)
//         const path = "/api/vietjet/v1/ancillary-options"
//         const headers = {
//             Accept: "*/*",
//             "Content-Type": "application/json",
//         }
//         const formData = JSON.stringify(flightDTO)
//         try {
//             var resp = await doPost(path, headers, formData);
//             if (resp.status == 200) {
//                 setData(resp.data)
//             }
//         } catch (e) {
//             setError(e)
//         }
//         setLoading(false)
//     }

//     return { data, error, loading }
// }

// export const useTabSeat = (flightDTO) => {
//     const [data, setData] = useState(null);
//     const [error, setError] = useState(null);
//     const [loading, setLoading] = useState(null);
//     useEffect(() => {
//         getTabSeat(flightDTO)
//     }, []);

//     async function getTabSeat(flightDTO) {
//         setLoading(true)
//         const path = "/api/vietjet/v1/seat-selection-options"
//         const headers = {
//             Accept: "*/*",
//             "Content-Type": "application/json",
//         }
//         const formData = JSON.stringify(flightDTO)
//         try {
//             var resp = await doPost(path, headers, formData);
//             if (resp.status == 200) {
//                 setData(resp.data)
//             }
//         } catch (e) {
//             setError(e)
//         }
//         setLoading(false)
//     }

//     return { data, error, loading }
// }

// export const useQuotations = (quotations) => {
//     const [data, setData] = useState(null);

//     useEffect(() => {
//         handleSubcribeAPI()
//     }, []);

//     async function handleSubcribeAPI() {
//         const path = "/api/vietjet/v1/quotations"
//         const headers = {
//             Accept: "*/*",
//             "Content-Type": "application/json",
//         }
//         const data = JSON.stringify({ "httpMethod": "POST", "requestUri": "/reservations", "body": quotations })
//         try {
//             var resp = await doPost(path, headers, data);
//             if (resp.status == 200) {
//                 setData(resp.data)
//             }
//         } catch (error) {
//         }
//     }

//     return { data }
// }

// export const useGetCompany = () => {
//     const [dataCompany, setDataCompany] = useState(null);
//     const [errorCompany, setErrorCompany] = useState(null);
//     const [loadingCompany, setLoadingCompany] = useState(null);

//     useEffect(() => {
//         handleCompany()
//     }, []);

//     async function handleCompany() {
//         setLoadingCompany(true)
//         const path = "/api/vietjet/v1/companys"
//         const headers = {
//             Accept: "*/*"
//         }
//         // const data = JSON.stringify({"httpMethod":"POST", "requestUri":"/reservations" ,"body":quotations})
//         try {
//             var resp = await doGet(path, headers);
//             if (resp.status == 200) {
//                 setDataCompany(resp.data)
//             }
//         } catch (error) {
//             alert("Không thể kết nối VIETJET")
//             setErrorCompany(error)
//         }
//         setLoadingCompany(false)
//     }

//     return { dataCompany, errorCompany, loadingCompany }
// }

// export async function postReservations(quotations) {
//     const path = "/api/vietjet/v1/reservations"
//     const headers = {
//         Accept: "*/*",
//         "Content-Type": "application/json",
//     }
//     const data = JSON.stringify({ "body": quotations })
//     var resp = await doPost(path, headers, data);
//     if (resp.status == 200 || resp.status == 201) {
//         return (resp.data)
//     } else throw resp
// }


// export async function addTransaction(request) {
//     const path = "/api/vietjet/v1/transaction"
//     const headers = {
//         Accept: "*/*",
//         "Content-Type": "application/json",
//     }
//     let passengers = JSON.parse(localStorage.getItem("passengers"))
//     let payment = JSON.parse(localStorage.getItem("payment_transaction"))
//     let user = JSON.parse(localStorage.getItem("currentUser"))
//     let ticket = JSON.parse(localStorage.getItem("tickets"))
//     let dataTransaction = {
//         "userId": user.userId,
//         "tranperFombrchId": user.brchId,
//         "tranAmount": request,
//         "feeAmount": payment.fee,
//         "vatAmount": payment.vat,
//         "tranCustomer": passengers[0]?.mobilePhone,
//         "tranKey": passengers[0].firstName + passengers[0].lastName,
//         "tranState": 5,
//         "srvcId": 12345,
//         "currCode": "VND",
//         "tranFromaccno": payment?.paymentMethod == "1" ? "0" : (payment?.paymentMethod == "2" ? 'deposit:' + user.userName : payment?.numberAcc),
//         "tranToaccno": "1600205001646",
//         "tranFromBrchId": (payment?.paymentMethod == "1" || payment.paymentMethod == "2") ? user.brchId : parseInt(payment.numberAcc.substring(0, 4)),
//         "tranToBrchId": 1600,
//         "paynow": payment.paymentMethod,
//         "suppauditNumber": "123",
//         "ipCasauditNumber": "123",
//         "tranDesc": passengers[0]?.mobilePhone + "|" + passengers[0].lastName + " " + passengers[0].firstName + "|" + passengers[0].address + " " + ticket.departure?.flight.flights[0].departure.airport.code + "-" + ticket.departure?.flight.flights[0].arrival.airport.code+ " " + (ticket.return ?  ticket.return?.flight.flights[0].departure.airport.code + "-" +ticket.return?.flight.flights[0].arrival.airport.code : "") + "|[" + passengers[0]?.mobilePhone + " " + moment(new Date).format("MM/YYYY") + " " + request.toString() + "]"+"TNguoiNop:"+passengers[0]?.mobilePhone,
//         "isCancelled": 0,
//         "manualaditNumber": "0",
//         "pan": "",
//         "teminalId": "",
//         "supplierCode": "VIEJET",
//         "billNo": "CMT",
//         "isCompared": "N"
//     }
//     const data = JSON.stringify(dataTransaction)
//     try {
//         var resp = await doPost(path, headers, data);
//         if (resp.status === 200) {
//             let respDTO = resp.data
//             localStorage.setItem("transaction", JSON.stringify(respDTO))
//         } else throw resp
//     } catch (error) {
//         throw error
//     }
// }

// export async function updateTransaction(id, dataReservations, value, request) {
//     const path = "/api/vietjet/v1/transaction"
//     const headers = {
//         Accept: "*/*",
//         "Content-Type": "application/json",
//     }

//     let passengers = JSON.parse(localStorage.getItem("passengers"))
//     let ticket = JSON.parse(localStorage.getItem("tickets"))

//     let dataTransaction = {
//         "tranId": id,
//         "tranState": value,
//         "tranDesc": dataReservations.locator + "|" + passengers[0].lastName + " " + passengers[0].firstName + "|" + passengers[0].address + " " + ticket.departure?.flight.flights[0].departure.airport.code + "-" +ticket.departure?.flight.flights[0].arrival.airport.code  + " " + (ticket.return ?  ticket.return?.flight.flights[0].departure.airport.code + "-" + ticket.return?.flight.flights[0].arrival.airport.code : "") + "|[" + dataReservations.locator + " " + moment(new Date).format("MM/YYYY") + " " + request.toString() + "]"+"TNguoiNop:"+passengers[0]?.mobilePhone,
//         "billNo": dataReservations.locator,
//     }
//     const data = JSON.stringify(dataTransaction)
//     try {
//         var resp = await doPut(path, headers, data);
//         if (resp.status == 200) {
//         }
//     } catch (error) {
//     }
// }


// export const sendEmail = async (email, key) => {
//     let EmailItinerary = {
//         languageCode: "vi",
//         includeAllPassengers: true,
//         itineraryTypeCode: "D",
//         senderAddress: "noreply.itinerary@vietjetair.com",
//         passengerKey: "",
//         includeLogo: true,
//         includeTermsAndConditions: true,
//         emailAddresses: email,
//         key: key

//     }
//     const path = "/api/vietjet/v1/email-itinerary"
//     const headers = {
//         Accept: "*/*",
//         "Content-Type": "application/json",
//     }
//     const data = JSON.stringify(EmailItinerary)
//     try {
//         var resp = await doPost(path, headers, data);
//         if (resp.status == 200) {
//         }
//     } catch (error) {
//     }
// }


// export const useGetProvince = () => {
//     const [dataProvince, setDataProvince] = useState(null);

//     async function handleProvince(key) {
//         const path = "/api/vietjet/v1/provinces?key=" + key
//         const headers = {
//             Accept: "*/*"
//         }
//         try {
//             var resp = await doGet(path, headers);
//             if (resp.status == 200) {
//                 setDataProvince(resp.data)
//             }else throw resp
//         } catch (error) {
//             alert("Không thể kết nối VIETJET")
//         }
//     }

//     return { dataProvince, handleProvince }
// }
// export const useGetReservations = () => {
//     const [dataReservations, setDataReservations] = useState(null);
//     const [loading, setLoading] = useState(null);
//     async function handleReservations(key) {
//         const path = "/api/vietjet/v1/reservations/" + key
//         const headers = {
//             Accept: "*/*"
//         }
//         try {
//             var resp = await doGet(path, headers);
//             if (resp.status == 200) {
//                 setDataReservations(resp.data)
//             }
//         } catch (error) {
//             alert("Không thể kết nối VIETJET")
//             setDataReservations(null)
//         }

//     }
//     return { dataReservations, handleReservations }
// }

// export const useTransactions = () => {
//     const [dataTransactions, setDataTransactions] = useState(null);

//     async function handleTransactions(searchTransactionDTO) {
//         const path = "/api/vietjet/v1/transactions"
//         const headers = {
//             Accept: "*/*",
//             'Content-Type': 'application/json'
//         }
//         const data = JSON.stringify(searchTransactionDTO)
//         try {
//             var resp = await doPost(path, headers, data);
//             if (resp.status == 200) {
//                 setDataTransactions(resp.data)
//             }
//         } catch (error) {
//         }
//     }

//     return { dataTransactions, handleTransactions }
// }

// export const usePassenger = (passenger) => {
//     const [data, setData] = useState(null);

//     useEffect(() => {
//         handlePassenger(passenger)
//     }, [])

//     async function handlePassenger(passenger) {

//         const path = `/api/vietjet/v1/passenger?key=${passenger.key}&passengerKey=${passenger.passengerKey}`
//         const headers = {
//             Accept: "*/*",
//             'Content-Type': 'application/json'
//         }

//         try {
//             var resp = await doGet(path, headers);
//             if (resp.status == 200) {
//                 setData(resp.data)
//             }else throw resp
//         } catch (error) {
//             alert("Không thể kết nối VIETJET")
//         }
//     }

//     return { data, handlePassenger }
// }


// export const handleUpdatePassenger = async (dataPassenger) => {
//     const path = `/api/vietjet/v1/update-passenger?key=${dataPassenger.key}&passengerKey=${dataPassenger.passengerKey}`
//     const headers = {
//         Accept: "*/*",
//         'Content-Type': 'application/json'
//     }
//     const data = JSON.stringify({ "body": dataPassenger.dataBody })

//     try {
//         var resp = await doPost(path, headers, data);
//         if (resp.status === 200) {
//             return resp.data
//         } else throw resp
//     } catch (error) {
//         alert("Không thể kết nối VIETJET")
//         throw error
//     }
// }

// export const useUpdateQuotationsPassenger = () => {
//     const [data, setData] = useState(null);


//     async function handleUpdateQuotationsPassenger(dataPassenger) {

//         const path = `/api/vietjet/v1/quotations-reservations-passenger?key=${dataPassenger.key}&passengerKey=${dataPassenger.passengerKey}`
//         const headers = {
//             Accept: "*/*",
//             'Content-Type': 'application/json'
//         }
//         const data = JSON.stringify({ "body": dataPassenger.dataBody })
//         try {
//             var resp = await doPost(path, headers, data);
//             if (resp.status == 200) {
//                 setData(resp.data)
//             }else throw resp
//         } catch (error) {
//             alert("Không thể kết nối VIETJET")
//         }
//     }

//     return { data, handleUpdateQuotationsPassenger }
// }

// export async function addAirReservation(id, dataReservations) {
//     const path = "/api/vietjet/v1/air-reservationkey"
//     const headers = {
//         Accept: "*/*",
//         "Content-Type": "application/json",
//     }

//     let datas = {
//         tranId: id,
//         ticketCode: dataReservations.locator,
//         reservationKey: dataReservations.key
//     }
//     const data = JSON.stringify(datas)
//     try {
//         var resp = await doPost(path, headers, data);
//         if (resp.status == 200) {

//         }
//     } catch (error) {
//     }
// }
// export const useAirRe = () => {
//     const [data, setData] = useState(null);
//     const [loading, setLoading] = useState(null);

//     async function handleAirRe(ticketCode) {
//         setLoading(true)
//         const path = "/api/vietjet/v1/air-reservationkeys"
//         const headers = {
//             Accept: "*/*",
//             'Content-Type': 'application/json'
//         }
//         const data = JSON.stringify({ ticketCode })
//         try {
//             var resp = await doPost(path, headers, data);
//             if (resp.status == 200) {
//                 setData(resp.data)
//             }
//         } catch (error) {
//         }
//         setLoading(false)
//     }

//     return { data, handleAirRe }
// }

// export const useJourney = (key, journeyKey) => {
//     const [dataJourney, setDataJourney] = useState(null);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         getJourney()
//     }, []);

//     async function getJourney() {
//         const path = "/api/vietjet/v1/journey?key=" + key + "&journeyKey=" + journeyKey
//         const headers = {
//             Accept: "*/*"
//         }

//         try {
//             var resp = await doGet(path, headers);
//             if (resp.status == 200) {
//                 setDataJourney(resp.data)
//             } else throw resp
//         } catch (e) {
//             alert("Không thể kết nối VIETJET")
//             setError(e)
//         }
//     }
//     return { dataJourney, error }
// }

// export const useGetBySTK = () => {
//     const [vanTinTK, setData] = useState(null);
//     const [errorVTTK, setError] = useState(null);
//     const [loadingVTTK, setLoading] = useState(null);

//     async function getBySTK(stk) {
//         setLoading(true)

//         const path = "/api/vietjet/v1/get-by-stk?stk=" + stk
//         const headers = {
//             Accept: "*/*"
//         }
//         try {
//             var resp = await doGet(path, headers);
//             if (resp.status == 200) {
//                 setData(resp.data)
//             } else throw resp
//         } catch (e) {
//             alert("Không thể kết nối VIETJET")
//             setError(e)
//         }
//         setLoading(false)
//     }
//     return { vanTinTK, errorVTTK, loadingVTTK, getBySTK }
// }

// export const useCityPairs = () => {
//     const [dataCity, setData] = useState(null);
//     const [errorCity, setError] = useState(null);
//     const [loadingCity, setLoading] = useState(null);
//     useEffect(() => {
//         getCityPairs()
//     }, []);
//     async function getCityPairs() {
//         setLoading(true)

//         const path = "/api/vietjet/v1/city-pairs"
//         const headers = {
//             Accept: "*/*"
//         }
//         try {
//             var resp = await doGet(path, headers);
//             if (resp.status == 200) {
//                 setData(resp.data)
//             } else throw resp
//         } catch (e) {
//             alert("Không thể kết nối VIETJET")
//             setError(e)
//         }
//         setLoading(false)
//     }
//     return { dataCity, errorCity, loadingCity }
// }

// export const useGetByCMT = () => {
//     const [thongTinTK, setData] = useState(null);
//     const [errorTTTK, setError] = useState(null);
//     const [loadingTTTK, setLoading] = useState(null);

//     async function getByCMT(cmt) {
//         setLoading(true)

//         const path = "/api/vietjet/v1/get-by-cmt?cmt=" + cmt
//         const headers = {
//             Accept: "*/*"
//         }
//         try {
//             var resp = await doGet(path, headers);
//             if (resp.status == 200) {
//                 setData(resp.data)
//             } else throw resp
//         } catch (e) {
//             setError(e)
//             alert("Không thể kết nối VIETJET")
//         }
//         setLoading(false)
//     }
//     return { thongTinTK, errorTTTK, loadingTTTK, getByCMT }
// }

// export const useQuotationJourney = () => {
//     const [dataQuationJourney, setData] = useState(null);

//     async function handleConfirm(request, key, journeyKey) {
//         const path = "/api/vietjet/v1/quotations-journey?key=" + key + "&journeyKey=" + journeyKey
//         const headers = {
//             Accept: "*/*",
//             'Content-Type': 'application/json'
//         }
//         let data = JSON.stringify({ "body": request })
//         try {
//             var resp = await doPost(path, headers, data);
//             if (resp.status == 200) {
//                 setData(resp.data)
//             }else throw resp
//         } catch (error) {
//             alert("Không thể kết nối VIETJET")
//         }
//     }

//     return { dataQuationJourney, handleConfirm }
// }

// export const useInsurancePolicyOptions = () => {
//     const [dataInsurance, setData] = useState(null);

//     async function insurancePolicyOptions(request) {
//         const path = "/api/vietjet/v1/insurance"
//         const headers = {
//             Accept: "*/*",
//             'Content-Type': 'application/json'
//         }
//         let data = JSON.stringify({ "body": request })
//         try {
//             var resp = await doPost(path, headers, data);
//             if (resp.status == 200) {
//                 setData(resp.data)
//             }else throw resp
//         } catch (error) {
//             alert("Không thể kết nối VIETJET")
//         }
//     }

//     return { dataInsurance, insurancePolicyOptions }
// }


