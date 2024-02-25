import Comment from "../models/comment";

const CommentObj = {
  list : async (req, res) => {
    try{
      return res.send([{gameId: 123, user: "이름", comment: "댓글임돵"}])
    } catch(err) {
      console.log(err);
    };
  },
  write : async (req, res) => {
    console.log(req.body);
    try {
      const {gameId, user, comment} = req.body;
      const data = await Comment.create({
        gameId,
        user,
        comment,
        createdAt: Date.now(),
      });
      return res.send({result: true, data});
    } catch(err) {
      console.log(err);
      return res.send({result: false});
    }
  },
}

export default CommentObj;