// Date.prototype.addHours = function (h) {
//     this.setHours(this.getHours() + h);
//     return this;
// };
alert('test');
// var xmlHttp;
// function srvTime(){
//     try {
//         //FF, Opera, Safari, Chrome
//         xmlHttp = new XMLHttpRequest();
//     }
//     catch (err1) {
//         //IE
//         try {
//             xmlHttp = new ActiveXObject('Msxml2.XMLHTTP');
//         }
//         catch (err2) {
//             try {
//                 xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
//             }
//             catch (eerr3) {
//                 //AJAX not supported, use CPU time.
//                 alert("AJAX not supported");
//             }
//         }
//     }
//     xmlHttp.open('HEAD',window.location.href.toString(),false);
//     xmlHttp.setRequestHeader("Content-Type", "text/html");
//     xmlHttp.send('');
//     return xmlHttp.getResponseHeader("Date");
// }
//
// console.log('test');
// var st = srvTime();
// var date = new Date(st);
//
// console.log(date);
//
//
// // var localTime = new Date();
// // document.write("Local machine time is: " + localTime + "<br>");
// // document.write("Server time is: " + date);
//
// var timenow = new Date(st);
// var Hour24delivery = new Date(st).addHours(24);
// var Hour48delivery = new Date(st).addHours(48);
//
// var h24Year = Hour24delivery.getFullYear();
// var h24Month = Hour24delivery.getMonth();
// var h24Date = Hour24delivery.getDate();
//
// var h48Year = Hour48delivery.getFullYear();
// var h48Month = Hour48delivery.getMonth();
// var h48Date = Hour48delivery.getDate();
//
// var now = new Date();
// var royalmail = new Date(
//     now.getFullYear(),
//     now.getMonth(),
//     now.getDate(),
//     15,
//     30,
//     0,
//     0
// );
// var dpd = new Date(
//     now.getFullYear(),
//     now.getMonth(),
//     now.getDate(),
//     18,
//     30,
//     0,
//     0
// );
//
// var carrier = "royalmail";
// var selected_carrier;
//
// if (carrier === "dpd") {
//     selected_carrier = dpd;
// } else if (carrier === "royalmail") {
//     selected_carrier = royalmail;
// }
//
// var selectedCarrier = selected_carrier;
// var selectedCarrier_name = carrier.toString();
// var dateFuture = selectedCarrier;
// var dateNow = new Date();
//
// var seconds = Math.floor((dateFuture - dateNow) / 1000);
// var minutes = Math.floor(seconds / 60);
// var hours = Math.floor(minutes / 60);
// var days = Math.floor(hours / 24);
//
// hours = hours - days * 24;
// minutes = minutes - days * 24 * 60 - hours * 60;
// seconds = seconds - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;
//
// console.log(
//     "you have " +
//     hours +
//     "h:" +
//     minutes +
//     "m to place your " +
//     selectedCarrier_name +
//     " Order "
// );
//
// if (carrier === "dpd") {
//     if (timenow < dpd) {
//         console.log("You qualified for DPD");
//         console.log(
//             "You placed your " +
//             carrier +
//             " order at " +
//             timenow +
//             " Which means You Qualified for 24 hour delivery - your est' order date is = " +
//             h24Date +
//             ":" +
//             h24Month +
//             ":" +
//             h24Year
//         );
//     } else {
//         console.log(
//             "you have " +
//             hours +
//             "h:" +
//             minutes +
//             "m to place your " +
//             selectedCarrier_name +
//             " Order "
//         );
//     }
// }
//
// if (carrier === "royalmail") {
//     if (timenow < royalmail) {
//         console.log("You qualified for Royal Mail");
//         console.log(
//             "You placed your " +
//             carrier +
//             " order at " +
//             timenow +
//             " Which means You Qualified for 24 hour delivery - your est' order date is = " +
//             h24Date +
//             ":" +
//             h24Month +
//             ":" +
//             h24Year
//         );
//     } else {
//         console.log(
//             "you have " +
//             hours +
//             "h:" +
//             minutes +
//             "m to place your " +
//             selectedCarrier_name +
//             " Order "
//         );
//     }
// }
// /*
//
// Upcoming bank holidays in England and Wales
// ---------------------------------------------------
// 2021
// 30 August	Monday	Summer bank holiday
// 27 December	Monday	Christmas Day (substitute day)
// 28 December	Tuesday	Boxing Day (substitute day)
//
// 2022
// 3 January	Monday	New Year’s Day (substitute day)
// 15 April	Friday	Good Friday
// 18 April	Monday	Easter Monday
// 2 May	Monday	Early May bank holiday
// 2 June	Thursday	Spring bank holiday
// 3 June	Friday	Platinum Jubilee bank holiday
// 29 August	Monday	Summer bank holiday
// 26 December	Monday	Boxing Day
// 27 December	Tuesday	Christmas Day (substitute day)
// */
//
// // Bank Holidays
// var d = new Date();
// var months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December"
// ];
//
// var currentYear = d.getYear();
//
// var trimYear = currentYear;
// var yearToString = trimYear.toString();
// var updatedYear = yearToString.substring(1);
// var todaysDate = d.getDate() + ":" + months[d.getMonth()] + ":" + updatedYear;
//
// console.log("#todaysDate = " + todaysDate);
//
// var BH_2021 = {
//     BH_august30_21: "30:August:21",
//     BH_december27_21: "27:December:21",
//     BH_december28_21: "28:December:21"
// };
// var BH_2022 = {
//     BH_january_22: "01:January:22",
//     BH_april15_22: "15:April:22",
//     BH_april18_22: "18:April:22"
// };
// var logged = false;
//
// for (var key in BH_2021) {
//
//     if (todaysDate === BH_2021[key] || BH_2022[key]) {
//         logged = true;
//         console.log(
//             "Today is a bank Holiday therefore the your est order delivery date will be affected"
//         );
//     } else {
//         if (!logged) {
//             console.log("Non Bank Holiday - Standard Shipping Rates Apply");
//             logged = true;
//         }
//     }
// }
