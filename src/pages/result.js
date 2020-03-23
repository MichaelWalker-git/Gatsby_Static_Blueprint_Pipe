import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Typography} from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import "../styles/Components.css";
import AppAppBar from "../modules/views/AppAppBar"
import AppFooter from "../modules/views/AppFooter"

const useStyles = makeStyles({
    root: {
        color: "black",
        flexGrow: 1,
        fontWeight: "bolder",
        fontSize: "14.5rem",
        height: 216,
        maxWidth: 400,
    },
});


export default () => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState([]);
    const [selected, setSelected] = React.useState([]);

    const handleToggle = (event, nodeIds) => {
        setExpanded(nodeIds);
    };

    const handleSelect = (event, nodeIds) => {
        setSelected(nodeIds);
    };
    const uploadedFile = (JSON.parse(JSON.parse(window.localStorage.getItem("jsonBluePrint"))));

    console.log(uploadedFile["ADA"], "uploadedFile");

     return (
       <div>
           <AppAppBar/>
           <div className="resultsContainer">

               <Typography
                 align="center"
                 variant={"h5"}
               >
                   Results
               </Typography>
               {/*TODO: Reverse after finished*/}
               {!uploadedFile && <LinearProgress/>}
               {/*{uploadedFile &&*/}
               <div className={"resultsBody"}>
                   <TreeView
                     className={classes.root}
                     defaultCollapseIcon={<ExpandMoreIcon/>}
                     defaultExpandIcon={<ChevronRightIcon/>}
                     expanded={expanded}
                     selected={selected}
                     onNodeToggle={handleToggle}
                     onNodeSelect={handleSelect}
                   >
                       <TreeItem nodeId="1" label={"Dining Area"}>
                           <TreeItem nodeId="2" label={"Bar"}>
                               <TreeItem nodeId="3" label={uploadedFile["ADA"]["Dining Area"][0]["Bar"]}/>
                           </TreeItem>
                       </TreeItem>
                       <TreeItem nodeId="4" label={"Bathroom"}>
                           <TreeItem nodeId="5" label={"Toilet"}>
                               <TreeItem nodeId="6" label={uploadedFile["ADA"]["Bathroom"][0]["Toilet"]}/>
                           </TreeItem>
                           <TreeItem nodeId="7" label={"Sink Clearance"}>
                               <TreeItem nodeId="8" label={uploadedFile["ADA"]["Bathroom"][1]["Sink"]}/>
                           </TreeItem>
                           <TreeItem nodeId="9" label={"Sink Height"}>
                               <TreeItem nodeId="10" label={uploadedFile["ADA"]["Bathroom"][2]["Sink"]}/>
                           </TreeItem>
                           <TreeItem nodeId="11" label={"Mirror"}>
                               <TreeItem nodeId="12" label={uploadedFile["ADA"]["Bathroom"][3]["Mirror height"]}/>
                           </TreeItem>
                       </TreeItem>
                   </TreeView>
               </div>
           </div>
           <AppFooter/>
       </div>

     )
};
