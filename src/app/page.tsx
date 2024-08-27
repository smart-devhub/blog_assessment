// @import dependencies
import { Grid } from "@mui/material";
// @import apiservices
import { getPosts } from "../apiService/api";
// @import compoenents
import DataCard from "@/components/Card/Card";

export default async function Home() {
  const response: any = await getPosts();
  const { data } = response;

  return (
    <Grid container spacing={4}>
      {data &&
        data?.map((item: any) => {
          return <DataCard data={item} key={item.id} />;
        })}
    </Grid>
  );
}
