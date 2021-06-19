import React, { useState, useEffect } from "react";
// @flow
export type dashboardProps={
fullname:String,
email:String
}
const Dashboard=({fullname, email}:dashboardProps)=>{


    return(
        <div> Hello {fullname} with email {email}</div>
    )

}
export default Dashboard;