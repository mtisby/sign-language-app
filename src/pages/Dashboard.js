import React, { useState, useEffect } from "react";
// @flow
export type dashboardProps={
email:String,
handleLogOut:string=>void
}
const Dashboard=({email,handleLogOut}:dashboardProps)=>{


    return(
        <div> Hello
        <p onClick={handleLogOut}>Logout</p></div>

    )

}
export default Dashboard;