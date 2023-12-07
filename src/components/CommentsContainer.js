import React from "react";

const CommentsContainer = () => {
  const commentsData = [
    {
      name: "Kalpit Raorane",
      text: "My Youtube Project",
      replies: [
        {
          name: "Kalpit Raorane",
          text: "My Youtube Project",
          replies: [
            {
              name: "Kalpit Raorane",
              text: "My Youtube Project",
              replies: [
                {
                    name: "Kalpit Raorane",
                    text: "My Youtube Project",
                    replies: [
                        {
                            name: "Kalpit Raorane",
                            text: "My Youtube Project",
                            replies: [
                                {
                                    name: "Kalpit Raorane",
                                    text: "My Youtube Project",
                                    replies: [],
                                  },
                            ],
                          },
                    ],
                  },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Kalpit Raorane",
      text: "My Youtube Project",
      replies: [
        {
          name: "Kalpit Raorane",
          text: "My Youtube Project",
          replies: [
            {
              name: "Kalpit Raorane",
              text: "My Youtube Project",
              replies: [],
            },
          ],
        },
      ],
    },
    {
      name: "Kalpit Raorane",
      text: "My Youtube Project",
      replies: [],
    },
    {
      name: "Kalpit Raorane",
      text: "My Youtube Project",
      replies: [],
    },
    {
      name: "Kalpit Raorane",
      text: "My Youtube Project",
      replies: [],
    },
    {
      name: "Kalpit Raorane",
      text: "My Youtube Project",
      replies: [
        {
          name: "Kalpit Raorane",
          text: "My Youtube Project",
          replies: [
            {
              name: "Kalpit Raorane",
              text: "My Youtube Project",
              replies: [
                {
                  name: "Kalpit Raorane",
                  text: "My Youtube Project",
                  replies: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Kalpit Raorane",
      text: "My Youtube Project",
      replies: [],
    },
  ];

  const Comment = ({ data }) => {
    const { name, text, replies } = data;

    return (
      <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
        <img
        className="w-8 h-8"
          alt="user"
          src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
        ></img>
        <div className="px-3">
          <p className="font-bold">{name}</p>
          <p>{text}</p>
        </div>
      </div>
    );
  };

  const CommentList = ({comments}) =>{
    return comments.map((comment,index)=>(
    <div key={index}>
    <Comment  data={comment}/>
    <div className="pl-5 border border-l-black ml-5">
    <CommentList comments={comment.replies}/>
    </div>
    </div>
    ));
  };


  return (
    <div className="m-5 p-2 text-left">
      <h1 className="text-xl font-bold">Comments: </h1>
      {/* <Comment data={commentsData[0]} /> */}
      <CommentList comments={commentsData}/>
    </div>
  );
};

export default CommentsContainer;
