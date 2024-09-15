class  ApiResponse {
    constructor (statusCode,  message= "sucess"){
        this.statusCode = statusCode
        this.data = this.data
        this.message = message
        this.sucess = statusCode < 400
    }
}



export { ApiResponse}
