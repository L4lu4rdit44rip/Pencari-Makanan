import DataSource from '../data/data-source.js';
import '../component/search-bar.js';
import '../component/list-makanan.js';
const main = () =>{
  const searchElement = document.querySelector('search-bar');
  const makanListElement = document.querySelector('list-makanan');
  
  const onButtonSearchClicked = () => {
    DataSource.searchMakan(searchElement.value)
        .then(renderResult)
        .catch(fallbackResult);
  };
  const renderResult = results => {
    makanListElement.makanan = results;
  };
  
  const fallbackResult = message => {
    makanListElement.renderError(message);
  };
 
  searchElement.clickEvent = onButtonSearchClicked;
};
export default main;