 const getCars = async (callback) => {
     try {
         const response = await fetch(
             `https://freetestapi.com/api/v1/cars?limit=10`
         );

         const data = await response.json();
         callback(data);

     } catch (error) {
         console.log('Данные не доступны', error);
     }
 };



 export default getCars