import React from "react";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Box,
} from "@mui/material";
import { getPostComments, getPostDetail } from "../../../apiService/api";

export default async function DetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug: id } = params;
  const postdata = await getPostDetail(id);
  const comments = await getPostComments(id);

  const post = postdata.data;
  const postComments = comments.data;

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      mt={4}
      px={2}
    >
      {/* Post Details */}
      <Card
        sx={{
          width: "100%",
          maxWidth: 600,
          mb: 4,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <CardContent>
          <Typography
            variant="h4"
            component="div"
            gutterBottom
            fontWeight="bold"
          >
            {post?.title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {post?.description || ""}
          </Typography>
        </CardContent>
      </Card>

      {/* Comments Section */}
      <Card
        sx={{ width: "100%", maxWidth: 600, borderRadius: 2, boxShadow: 3 }}
      >
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            gutterBottom
            fontWeight="bold"
          >
            Comments
          </Typography>
          <List sx={{ padding: 0 }}>
            {postComments &&
              postComments?.map((comment: any, index: number) => (
                <React.Fragment key={comment.id}>
                  <ListItem alignItems="flex-start" sx={{ padding: "16px 0" }}>
                    <ListItemText
                      primary={
                        <Typography variant="body1" fontWeight="medium">
                          {comment?.name || ""}
                        </Typography>
                      }
                      secondary={
                        <Typography variant="body2" color="text.secondary">
                          {comment?.body || ""}
                        </Typography>
                      }
                    />
                  </ListItem>
                  {index < postComments?.length - 1 && (
                    <Divider variant="middle" component="li" sx={{ my: 1 }} />
                  )}
                </React.Fragment>
              ))}
          </List>
        </CardContent>
      </Card>
    </Box>
  );
}
