/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================
* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
Coded by www.creative-tim.com
 =========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import { useRef, useEffect, useState } from "react";
// @mui material components
import { Autocomplete } from "@mui/material";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDProgress from "components/MDProgress";

// Images
import logoXD from "assets/images/small-logos/logo-xd.svg";
import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoJira from "assets/images/small-logos/logo-jira.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

import Cookies from "universal-cookie";
const cookies = new Cookies();

export default function data() {

  const [interviews, setInterviews] = useState([]);
  const [rendered, setRendered] = useState(false);

  const saveAsNewInterview = () => {
    setRendered(false);
    const bodyArr = [
      "company",
      "date",
      "source",
      "contact name",
      "contact info",
      "",
    ]; //change this later
    const bodyObj = Object.fromEntries(
      bodyArr.map((key) => [key, document.getElementsByName(key)[0].value])
    );
    bodyObj.token = cookies.get("token");

    fetch("/api/interview/interviewlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyObj),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };


  

  useEffect(()=>{
    if (!rendered) {

      const getInterviews = async () => {
        setRendered(true);
        const bodyObj = {};
        bodyObj.token = cookies.get("token");
        console.log(bodyObj);
        const data = await fetch("/api/interview/interviewlist", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bodyObj),
        });
        const returneddata = await data.json();
        console.log('json here', returneddata);
        const interviewRows = [];
        returneddata.forEach(elem => {
          console.log(elem);
          interviewRows.push(
            {
              companies: <Company image={logoAtlassian} name={elem.company} />,
              date: <MDBox display="flex" py={1}>{elem.interviewtime}</MDBox>,
              edit: <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">Edit</MDTypography>,
              position: <MDTypography  variant="caption" color="text" fontWeight="medium">{elem.jobrole}</MDTypography>,
              source: <MDTypography variant="caption" color="text">{elem.source}r</MDTypography>,
              contactName: <MDTypography variant="caption" color="text">{elem.contactname}</MDTypography>,
              contactInfo: <MDTypography variant="caption" color="text">{elem.contactinfo}</MDTypography>,
              url: <MDTypography variant="caption" color="text">{elem.joburl}</MDTypography>,

              
            }
          );
        });
        console.log(interviewRows);
        setInterviews(interviewRows);
      };

      getInterviews()
        .catch(console.error);
    }
  })



  // or

  const Company = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDTypography variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  return ({
    columns: [
      { Header: "company", accessor: "companies", align: "left" },
      { Header: "position", accessor: "position", align: "center" },
      { Header: "date", accessor: "date", align: "left" },
      { Header: "source", accessor: "source", align: "center" },
      { Header: "contact name", accessor: "contactName", align: "left" },
      { Header: "contact info", accessor: "contactInfo", align: "left" },
      { Header: "URL", accessor: "url", align: "left" },
      { Header: "", accessor: "edit", width:"10%", align: "center" },
    ],

    rows: [
      {
        companies: (
          <TextField id="outlined-basic" variant="outlined" label="Company" />
        ),
        date: (
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="MM/DD/YYYY"
          />
        ),
        source: (
          <TextField id="outlined-basic" variant="outlined" label="Soure" />
        ),
        contactName: (
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="Contact Name"
          />
        ),
        contactInfo: (
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="Contact Info"
          />
        ),
        url: <TextField id="outlined-basic" variant="outlined" label="URL" />,
        position: (
          <TextField id="outlined-basic" variant="outlined" label="position" />
        ),
      }, ...interviews
    ],
  })

  
}
