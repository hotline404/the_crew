import Crew from "./Crew";
import Post from "./Post";

export const PAGE = {
  post : {
    name: 'Post',
    element: <Post />,
  },

  crew : {
    name: 'Crew',
    element: <Crew />
  }
}

export const PAGE_ARR = Object.values(PAGE);