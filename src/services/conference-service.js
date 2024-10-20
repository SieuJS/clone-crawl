const axios = require("axios");
const mainServer = "http://localhost:5000";
const postConference = async (conference) => {
    const isSuccess = 
        await axios
            .post(
                mainServer+"/api/v1/post/etl",
                conference
            )
            .then((response) => {
                console.log(">> POST: https://conference-searching.onrender.com/api/v1/post/etl")
                console.log(response.data);
                return true;
            })
            .catch((error) => {
                console.log(">> POST: https://conference-searching.onrender.com/api/v1/post/etl")
                console.log(error.response.data);
                return false;
            })
    if (isSuccess) {
        return true
    } else {
        return false
    }
};

module.exports = {
    postConference,
};
