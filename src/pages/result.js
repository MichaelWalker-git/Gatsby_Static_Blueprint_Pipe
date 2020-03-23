import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Typography } from "@material-ui/core"
import LinearProgress from "@material-ui/core/LinearProgress"
import TreeView from "@material-ui/lab/TreeView"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import TreeItem from "@material-ui/lab/TreeItem"
import "../styles/Components.css"
import AppAppBar from "../modules/views/AppAppBar"
import AppFooter from "../modules/views/AppFooter"

const useStyles = makeStyles({
  root: {
    color: "black",
    flexGrow: 1,
    fontWeight: "bolder",
    fontSize: "14.5rem",
    padding: "1rem",
  },
})


export default () => {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState([])
  const [selected, setSelected] = React.useState([])

  const handleToggle = (event, nodeIds) => {
    setExpanded(nodeIds)
  }

  const handleSelect = (event, nodeIds) => {
    setSelected(nodeIds)
  }

  const uploadedFile = (typeof window === `undefined`) ? null : (JSON.parse(JSON.parse(window.localStorage.getItem("jsonBluePrint"))))

  return (
    <React.Fragment>
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
        {uploadedFile &&
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
                <TreeItem nodeId="3" label={uploadedFile["ADA"]["Dining Area"][0]["Bar"]}>
                  <TreeItem nodeId="13"
                            label={"A customer who use wheelchairs must be able to sit at the bar. A 60-inch long protion of the counter must be lowered. The height of this area must be between 28 and 34 inches from the floor to the top of the bar with knee space at least 27 inches high, 30 inches wide, and 19 inches deep."}/>
                </TreeItem>
              </TreeItem>
            </TreeItem>
            <TreeItem nodeId="4" label={"Bathroom"}>
              <TreeItem nodeId="5" label={"Toilet"}>
                <TreeItem nodeId="6" label={uploadedFile["ADA"]["Bathroom"][0]["Toilet"]}>
                  <TreeItem nodeId="14"
                            label={"A customer who use wheelchairs must be able to sit at the bar. A 60-inch long protion of the counter must be lowered. The height of this area must be between 28 and 34 inches from the floor to the top of the bar with knee space at least 27 inches high, 30 inches wide, and 19 inches deep."}>

                  </TreeItem>

                </TreeItem>
              </TreeItem>
              <TreeItem nodeId="7" label={"Sink Clearance"}>
                <TreeItem nodeId="8" label={uploadedFile["ADA"]["Bathroom"][1]["Sink"]}>
                  <TreeItem nodeId="15" label={
                    <div>
                      <Typography variant={"body1"}>
                        "604.6 Flush Controls. Flush controls shall be hand operated or automatic. Hand operated flush
                        controls shall comply with 309. Flush controls shall be located on the open side of the water
                        closet except in ambulatory accessible compartments complying with 604.8.2"
                      </Typography>
                      <a
                        href={"https://www.access-board.gov/guidelines-and-standards/buildings-and-sites/about-the-ada-standards/ada-standards/chapter-6-plumbing-elements-and-facilities"}>Citation</a>
                    </div>
                  }/>
                </TreeItem>
              </TreeItem>
              <TreeItem nodeId="9" label={"Sink Height"}>
                <TreeItem nodeId="10" label={uploadedFile["ADA"]["Bathroom"][2]["Sink"]}>
                  <TreeItem nodeId="16" label={
                    <div>
                      <Typography variant={"body1"}>
                        "606.3 Height. Lavatories and sinks shall be installed with the front of the higher of the rim
                        or counter surface 34 inches (865 mm) maximum above the finish floor or ground.

                        EXCEPTIONS: 1. A lavatory in a toilet or bathing facility for a single occupant accessed only
                        through a private office and not for common use or public use shall not be required to comply
                        with 606.3."
                      </Typography>
                      <a
                        href={"https://www.access-board.gov/guidelines-and-standards/buildings-and-sites/about-the-ada-standards/ada-standards/chapter-6-plumbing-elements-and-facilities"}>Citation</a>
                    </div>
                  }>

                  </TreeItem>
                </TreeItem>
              </TreeItem>
              <TreeItem nodeId="11" label={"Mirror"}>
                <TreeItem nodeId="12" label={uploadedFile["ADA"]["Bathroom"][3]["Mirror height"]}>
                  <TreeItem nodeId="17"
                            label={
                              <div>
                                <Typography variant={"body1"}>
                                  "603.3 Mirrors. Mirrors located above lavatories or countertops shall be installed
                                  with the bottom edge of the reflecting surface 40 inches (1015 mm)
                                  maximum above the finish floor or ground. Mirrors not located above lavatories or
                                  countertops shall be
                                  installed with the bottom edge of the reflecting surface 35 inches (890 mm) maximum
                                  above the finish floor or ground.

                                  Advisory 603.3 Mirrors. A single full-length mirror can accommodate a greater number
                                  of people, including children. In order for mirrors to be usable
                                  by people who are ambulatory and people who use wheelchairs, the top edge of mirrors
                                  should be 74 inches (1880 mm) minimum from the floor or ground."

                                </Typography>
                                <a
                                  href={"https://www.access-board.gov/guidelines-and-standards/buildings-and-sites/about-the-ada-standards/ada-standards/chapter-6-plumbing-elements-and-facilities"}>Citation</a>
                              </div>
                            }/>
                </TreeItem>
              </TreeItem>
            </TreeItem>
          </TreeView>
        </div>}
      </div>
      <AppFooter/>
    </React.Fragment>

  )
};
