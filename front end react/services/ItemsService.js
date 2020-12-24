import axios from 'axios';

const ITEMS_API_BASE_URL = "http://localhost:8090/rest/inventory/items/items"
 
class ItemsService {

    getItems(){
        return axios.get(ITEMS_API_BASE_URL);
    }
    
    addItems(items){
        return axios.post(ITEMS_API_BASE_URL, items);
    }
    getItemById(itemsId){
        return axios.get(ITEMS_API_BASE_URL + '/' + itemsId);
    }
    updateItems(items, itemsId){
        return axios.put(ITEMS_API_BASE_URL + '/' + itemsId, items);
    }

    deleteItems(itemsId){
        return axios.delete(ITEMS_API_BASE_URL + '/' + itemsId);
    }


    
}

export default new ItemsService()