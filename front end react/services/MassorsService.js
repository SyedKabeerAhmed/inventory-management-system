import axios from 'axios';

const MASSORS_API_BASE_URL = "http://localhost:8090/rest/inventory/massors/massors"

class MassorsService {

    getMassors(){
        return axios.get(MASSORS_API_BASE_URL);
    }
    
    addMassors(massors){
        return axios.post(MASSORS_API_BASE_URL, massors);
    }
    getMassorsById(massorsId){
        return axios.get(MASSORS_API_BASE_URL + '/' + massorsId);
    }
    updateMassors(massors, massorsId){
        return axios.put(MASSORS_API_BASE_URL + '/' + massorsId, massors);
    }

    deleteMassors(massorsId){
        return axios.delete(MASSORS_API_BASE_URL + '/' + massorsId);
    }
}
export default new MassorsService()