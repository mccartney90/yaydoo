const getCurrentDateTimeLarge = () => {
   let date_ob = new Date();
   let date = ("0" + date_ob.getDate()).slice(-2);
   // current month
   let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
   // current year
   let year = date_ob.getFullYear();
   // current hours
   let hours = date_ob.getHours();
   // current minutes
   let minutes = date_ob.getMinutes();
   // current seconds
   let seconds = date_ob.getSeconds();

   // prints date & time in YYYY-MM-DD HH:MM:SS format
   return year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;
};
const getCurrentDateTimeShort = () => {
   let date_ob = new Date();
   let date = ("0" + date_ob.getDate()).slice(-2);
   // current month
   let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
   // current year
   let year = date_ob.getFullYear();
   // current hours
   let hours = date_ob.getHours();
   // current minutes
   let minutes = date_ob.getMinutes();
   // current seconds
   let seconds = date_ob.getSeconds();
   // prints date in YYYY-MM-DD format
   return year + "-" + month + "-" + date;
};

const getCurrentHour = () => {
   let date_ob = new Date();
   // current hours
   let hours = date_ob.getHours();
   // current minutes
   let minutes = date_ob.getMinutes();
   // current seconds
   let seconds = date_ob.getSeconds();

   // prints time in HH:MM: format
   return hours + ":" + minutes + ":" + seconds;
};

const calcularEdad = (fecha) => {
   var hoy = new Date();
   var cumpleanos = new Date(fecha);
   var edad = hoy.getFullYear() - cumpleanos.getFullYear();
   var m = hoy.getMonth() - cumpleanos.getMonth();

   if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
      edad--;
   }

   return edad;
};
module.exports = {
   getCurrentDateTimeLarge,
   getCurrentDateTimeShort,
   getCurrentHour,
   calcularEdad,
};
