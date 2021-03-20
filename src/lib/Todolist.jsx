import { Grid } from "@material-ui/core";
import LeftPane from "./LeftPane";
import MiddlePane from "./MiddlePane";
import RightPane from "./RightPane";

// import { AmplifySignOut } from '@aws-amplify/ui-react';
function Todolist() {

  return (
    <Grid container spacing={0}>
      <Grid item lg={3}>
        <LeftPane />
      </Grid>
      <Grid item lg={5}>
        <MiddlePane />
      </Grid>
      <Grid item lg={4}>
        <RightPane />
      </Grid>
    </Grid>
  );
}

export default Todolist;
