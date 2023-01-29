import axios from "axios";
class DataSource {
  static searchMakan(keyword) {
    return axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`,{format:"json"})
    .then(response =>{
      console.log(response);
      return response.data;
    })
    .then(data =>{
      if(data.meals){
        return Promise.resolve(data.meals);
      }
      else{
        return Promise.reject(`${keyword} is not found`);
      }
    });
  }
}
export default DataSource;