import userService from './userServices';

let processMessage = (body) => {
    return new Promise(async (resolve, reject) => {
        try {
            let intent = body.queryResult.intent.displayName;
            let parameters = body.queryResult.parameters;
            
            let response;
            switch(intent) {
                case 'GetUserName':
                    // Giả sử bạn có userId trong parameters
                    let userId = parameters.userId;
                    let lastName = await userService.handleUserLogin (email);
                    if (lastName) {
                        response = `Xin chào ${lastName} tôi có thể giúp gì được bạn`;
                    
                    break;
                
            }

            resolve({
                fulfillmentText: response
            });
        } catch (e) {
            reject(e);
        }
    });
}


module.exports = {
    processMessage: processMessage
};