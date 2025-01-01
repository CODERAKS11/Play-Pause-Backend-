class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something went wrong",
        errors = [],
        statck= "",
    ){
        super(message);
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false
        this.errors = errors
        //below conde is used to capture the stack trace of the error
        //and store it in the stack property of the error object
        //not much revelent for us now but it is a good practice to do so
        if(statck){
            this.stack = statck
        } else {
            Error.captureStackTrace(this, this.
            constructor)
        }
    }


    
}

export{ ApiError }