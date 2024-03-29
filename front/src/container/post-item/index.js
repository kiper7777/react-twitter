import { useState } from "react";

import "./index.css";

import Box from "../../component/box";
import PostContent from "../../component/post-content";

import { getDate } from "../../util/getDate";

export default function Container({ id, username, text, date }) {
  const [data, setData] = useState({
    id,
    username,
    text,
    date,
    reply: null,
  });

  return (
    <Box style={{ padding: "0" }}>
      <div style={{ padding: "20px", cursor: "pointer" }}>
        <PostContent
          username={data.username}
          date={data.date}
          text={data.text}
        />
      </div>
    </Box>
  );
}
