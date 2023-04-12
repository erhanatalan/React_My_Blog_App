import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Box, Button } from "@mui/material";
import useBlogCall from "../hooks/useBlogCalls";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Detail = ({ item }) => {
    const { getDetail } = useBlogCall();
  useEffect(() => {
    getDetail(item.id);
  }, []);
  const { detailx } = useSelector((state) => state.blogs);
  console.log(detailx);
  const { postLikes } = useBlogCall();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.auth);
  console.log(currentUser);

  const handleFav = () => {
    currentUser ? postLikes(item.id) : navigate("/login");
  };

  let date = String(new Date(`${item.publish_date}`))
    .split("GMT+0300 (GMT+03:00)")
    .join("")
    .split(" ")
    .slice(1)
    .join(" ");
  // console.log(date);
  return (
    <Card sx={{ maxWidth: 500, minWidth: 500, margin: "30px" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {item.author[0].toUpperCase()}
          </Avatar>
        }
        title={item.author}
        subheader={date}
      />
      <CardMedia
        component="img"
        height="194"
        sx={{ objectFit: "fill" }}
        image={item.image}
        alt="Paella dish"
      />
      <CardContent sx={{ height: "155px", overflow: "hidden" }}>
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.content}
        </Typography>
      </CardContent>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites" onClick={handleFav}>
              <FavoriteIcon />
              <Typography>{item.likes}</Typography>
            </IconButton>
            <IconButton aria-label="add to favorites">
              <ChatBubbleOutlineIcon />
              <Typography>{item.comment_count}</Typography>
            </IconButton>
            <IconButton aria-label="add to favorites">
              <VisibilityIcon />
              <Typography>{item.post_views}</Typography>
            </IconButton>
          </CardActions>
        </Box>
        <Button
          sx={{
            border: "1px solid red",
            backgroundColor: "red",
            color: "black",
            width: "120px",
            height: "30px",
            marginRight: "5px",
            fontSize: "12px",
          }}
        >
          Read More
        </Button>
      </Box>
    </Card>
  );
};

export default Detail;