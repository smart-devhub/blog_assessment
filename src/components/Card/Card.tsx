import React from "react";
// @import dependencies
import {
  Card,
  CardContent,
  Typography,
  Grid,
  CardActionArea,
} from "@mui/material";
import Link from "next/link";

export default function DataCard({ data }: any) {
  return (
    <Grid item xs={12} sm={12} md={4} lg={3} xl={3} key={data.id}>
      <Link href={`/post/${data.id}`} passHref>
        <Card
          variant="elevation"
          elevation={3}
          sx={{
            height: "100%",
            textDecoration: "none",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CardActionArea>
            <CardContent>
              <Typography
                variant="h5"
                component="div"
                sx={{
                  fontWeight: "bold",
                  mb: 1,
                }}
              >
                {data.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ whiteSpace: "pre-line", lineHeight: 1.6 }}
              >
                {data.body}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </Grid>
  );
}
