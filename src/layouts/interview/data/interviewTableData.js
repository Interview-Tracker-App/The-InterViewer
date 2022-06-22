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

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

export default function interviewdata() {
  // const Contact = ({ image, name, email }) => (
  //   <MDBox display="flex" alignItems="center" lineHeight={1}>
  //     <MDBox lineHeight={1}>
  //       <MDTypography display="block" variant="button" fontWeight="medium">
  //         {name}
  //       </MDTypography>
  //       <MDTypography variant="caption">contact: {email}</MDTypography>
  //     </MDBox>
  //   </MDBox>
  // );

  const Row = ({ first, second }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {first}
      </MDTypography>
      <MDTypography variant="caption">{second}</MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "Company", accessor: "company", align: "left" },
      { Header: "Job Title", accessor: "jobtitle", align: "center" },
      { Header: "Note", accessor: "note", align: "center" },
      { Header: "Contact", accessor: "contact", align: "center" },
      { Header: "Interview on", accessor: "interviewdate", align: "center" },
      { Header: "Applied on", accessor: "applieddate", align: "center" },
      { Header: "Status", accessor: "status", align: "center" },
      { Header: "", accessor: "edit", width:"10%", align: "center" },
    ],

    rows: [
      {
        company: (
          <MDTypography component="a" href="#" variant="caption" fontWeight="medium">
            Google
          </MDTypography>
        ),
        contact: <Row first="Jane Doe" second="john@creative-tim.com" />,
        jobtitle: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Full Stack Engineer
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="applied" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        note: (
          <MDTypography component="a" href="#" variant="caption" color="text">
            Got the offer
          </MDTypography>
        ),
        interviewdate: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/04/18
          </MDTypography>
        ),
        applieddate: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/04/18
          </MDTypography>
        ),
        edit: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
    ],
  };
}
