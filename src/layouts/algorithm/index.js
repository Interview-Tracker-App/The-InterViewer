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

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";

// Material Dashboard 2 React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Billing page components
import MDInput from "components/MDInput";

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";

{/* <MDInput type="text" label="Text" value="John Smith" />
<MDInput type="search" label="Search" value="Creative Tim" />
<MDInput type="email" label="Email" value="someone@example.com" />
<MDInput type="url" label="URL" value="www.creative-tim.com" />
<MDInput type="tel" label="Phone" value="40-(770)-888-444" />
<MDInput type="password" label="Password" value="password" />
<MDInput type="number" label="Number" value="123456789" />
<MDInput type="datetime" label="Date time" value="2018-11-23T10:30:00" />
<MDInput type="date" label="Date" value="2018-11-23" />
<MDInput type="month" label="Month" value="2018-11" />
<MDInput type="week" label="Week" value="2018-W23" />
<MDInput type="time" label="Time" value="10:30:00" />
<MDInput type="color" label="Color" value="#17c1e8" /> */}

function algorithm(props) {
  const temp = [
    {
        "algotitle": "threesum",
        "algoid": 2,
        "codetitle": "recursive",
        "codeid": 1,
        "id": 1,
        "title": "recursive",
        "problem": "solve this algo",
        "notes": "help three",
        "createdat": "2022-06-22T02:10:25.000Z",
        "timescompleted": 3,
        "code": "console.log(hellow)"
    },
    {
        "algotitle": "threesum",
        "algoid": 2,
        "codetitle": "iterative",
        "codeid": 2,
        "id": 2,
        "title": "iterative",
        "problem": "solve this algo",
        "notes": "help three",
        "createdat": "2022-06-22T02:10:25.000Z",
        "timescompleted": 3,
        "code": "console.log(hellow)"
    },
    {
        "algotitle": "threesum",
        "algoid": 2,
        "codetitle": "O(1)",
        "codeid": 3,
        "id": 3,
        "title": "O(1)",
        "problem": "solve this algo",
        "notes": "help three",
        "createdat": "2022-06-22T02:10:25.000Z",
        "timescompleted": 3,
        "code": "console.log(hellow)"
    }
  ];

  const saveAsNewProblem = () => {
    const bodyArr = ['algotitle', 'problem', 'notes', 'code', 'codetitle'];   
    
    // const bodyObj2 = {
    //   token: "$2b$04$y3HzatMEPrKAR7rQSS6k6.qr3fQM2RXr1Zgo8SDQhDPJzsZB5vVGC",
    //   algotitle: "reverseLL", 
    //   problem: "reverse the linked list",
    //   notes: "easier with doubly ll", 
    //   code: "console.log('ll rocks')", 
    //   codetitle: "iterative"
    // };
    
    const bodyObj = Object.fromEntries(
      bodyArr.map(key => [key, document.getElementsByName(key)[0].value])
    )
    bodyObj.token = props.token;

    fetch("/api/algo/createalgo", {
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

  //functionality to catch the editor console. 
  //problem is it is printing everything in the editor into the console. It is not actuallly running the code from the editor.
  // solution is you have to hijack the window.console and print them to the code box. 
  //OR find a new editor with console built in. 


  const onChange =(newValue) => {
    console.log("change", newValue);
  
  }

  return (
    <DashboardLayout>
      <DashboardNavbar absolute isMini />
      <MDBox mt={8}>
        <MDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={5} spacing={3} display="flex" justifyContent="no-space" gap="20px" flexDirection="column">
              <Card>
                <MDInput type="text" label="Title" name="algotitle" defaultValue={temp[0].algotitle}/>
              </Card>
              <Card>
                <MDInput type="text" label="Solution Title" name="codetitle" defaultValue={temp[0].codetitle}/>
              </Card>
              <Card>
                <MDInput label="Problem prompt" name="problem"  fullWidth={true} multiline rows={10}  defaultValue={temp[0].problem}/>
              </Card>
              <Card>
                <MDInput label="Notes" name="notes" fullWidth={true} multiline rows={10}  defaultValue={temp[0].notes}/> 
              </Card>
              <Card>
                {/* <MDInput label="Notes" fullWidth={true} multiline rows={10} /> */}
              </Card>
            </Grid>
            <Grid item xs={12} lg={7} spacing={3} display="flex" justifyContent="no-space" gap="20px" flexDirection="column">
              <Card style={{maxHeight: '50vh'}}>
                <AceEditor
                  mode="javascript"
                  theme="github"
                  onChange={onChange}
                  name="UNIQUE_ID_OF_DIV"
                  editorProps={{ $blockScrolling: true }}
                />
              </Card>
              <Card>
                <MDInput label="Console" name="code"  fullWidth={true} multiline rows={8}  defaultValue={temp[0].code}/>
              </Card>
            </Grid>
          </Grid>
          <Grid xs={12} fullWidth container justifyContent="flex-end"> 
            <Grid  mt={2} mb={3}  gap="10px" display="flex" flexDirection="row" >
              <MDButton variant="gradient" color="success" onClick={saveAsNewProblem}>
                Save as New Problem
              </MDButton>
              <MDButton variant="gradient" color="success" onClick={()=>{console.log("hi")}}>
                Save as New Solution
              </MDButton>
              <MDButton variant="gradient" color="success" onClick={()=>{console.log("hi")}}>
                Save Current Solution
              </MDButton>
              <MDButton variant="gradient" color="primary" onClick={()=>{console.log("hi")}}>
                Delete
              </MDButton>
              
            </Grid>
          </Grid>
        </MDBox>
       
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default algorithm;
