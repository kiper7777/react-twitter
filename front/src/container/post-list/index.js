import Title from "../../component/title";
import Grid from "../../component/grid";
import Box from "../../component/box";

export default function Container() {
  return (
    <Grid>
      <Box>
        <Grid>
          <Title>Home</Title>
          Input
        </Grid>
      </Box>
    </Grid>
  );
}
