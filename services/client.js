import axios from 'axios'

let primaryServer = axios.create({
    baseURL: 'http://ubuntu@ec2-13-232-144-77.ap-south-1.compute.amazonaws.com/',
    headers: {
        "content-Type": "application/json"
    }
})
primaryServer.interceptors.request.use(
    (response) => {
        return response
    },
    (error) => {
        return error
    }
)

export default primaryServer;