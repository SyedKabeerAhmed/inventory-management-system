import axios from 'axios';

const VENDORS_API_BASE_URL = "http://localhost:8090/rest/inventory/vendors/vendors"

class VendorsService {

    getVendors(){
        return axios.get(VENDORS_API_BASE_URL);
    }
    
    addVendors(vendors){
        return axios.post(VENDORS_API_BASE_URL, vendors);
    }
    getVendorsById(vendorsId){
        return axios.get(VENDORS_API_BASE_URL + '/' + vendorsId);
    }
    updateVendors(vendors, vendorsId){
        return axios.put(VENDORS_API_BASE_URL + '/' + vendorsId, vendors);
    }

    deleteVendors(vendorsId){
        return axios.delete(VENDORS_API_BASE_URL + '/' + vendorsId);
    }
}
export default new VendorsService()