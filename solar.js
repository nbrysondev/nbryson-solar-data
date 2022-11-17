const fs = require('fs')
const moment = require('moment')
import { BatchGetItemCommand } from "@aws-sdk/client-dynamodb";
import { ddbClient } from "./libs/ddbClient.js";

fs.readdirSync("./solarlogs").forEach(file => {
    //Print file name
    let object = fs.readFileSync("./solarlogs/" + file, {encoding: "utf8"})
    try {
        let dateString = file.substring(0, file.length - 4)
        let date = moment(dateString, "YYYYMMDDHH")
        let solarData = JSON.parse(object)

        solarData.realtime
        solarData.today;
        solarData.yesterday
        solarData.month
        solarData.year

    }
    catch (e) {
        // likely a file with an error
    }
})

