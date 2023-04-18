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
import { useRef } from "react";
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
  const saveAsNewInterview = () => {
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

  const getInterviews = () => {
    bodyObj.token = cookies.get("token");
    fetch("/api/interview/interviewlist", {
      method: "GET",
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

  // or

  const Company = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDTypography variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "company", accessor: "companies", align: "left" },
      { Header: "date", accessor: "date", align: "left" },
      { Header: "source", accessor: "source", align: "center" },
      { Header: "contact name", accessor: "contactName", align: "left" },
      { Header: "contact info", accessor: "contactInfo", align: "left" },
      { Header: "URL", accessor: "url", align: "left" },
      { Header: "position", accessor: "position", align: "center" },
      // { Header: "contactName", accessor: "contactName", align: "center" },
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
      },

      {
        companies: <Company image={logoAtlassian} name="Add Progress Track" />,
        date: <MDBox display="flex" py={1}></MDBox>,

        source: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            $3,000
          </MDTypography>
        ),
        contactName: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress
              value={10}
              color="info"
              variant="gradient"
              label={false}
            />
          </MDBox>
        ),
        position: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress
              value={10}
              color="info"
              variant="gradient"
              label={false}
            />
          </MDBox>
        ),
      },
    ],
  };
}
