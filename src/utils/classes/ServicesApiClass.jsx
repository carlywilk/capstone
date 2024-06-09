import axios from "axios";

export class ServicesApi {
    constructor() {
        this.serverUrl = process.env.REACT_APP_SERVER_URL;
    }

    async getServicesList() {
        return await axios.get(`${this.serverUrl}/api/services`);
    }

    async getResourceServices(id) {
        return await axios.get(`${this.serverUrl}/api/resources/${id}/services`)
    }

    async getService(serviceType) {
        return await axios.get(`${this.serverUrl}/api/services/${serviceType}`)
    }
}
