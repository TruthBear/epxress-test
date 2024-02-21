// notice/list -> 리스트페이지
// notice/write -> 글쓰기페이지
// notice/{게시물 아이디} -> 디테일페이지
// notice/{게시물아이디}/edit -> 수정페이지
// notice/{게시물아이디}/delete -> 삭제페이지

import Notice from "../models/notice";


export const NoticeObj = {
  list : async (req, res) => {
    try{
     return res.send({name: "list"});
    } catch(err) {
      console.log(err);
    };
  },
  write : async (req, res) => {
    try {
      const { title, description, writer } = req.body;
      const data = await Notice.create({
        title,
        description,
        writer,
        createdAt: Date.now(),
      });
      return res.send({ result: true, data });
    } catch (err) {
      console.log(err);
      return res.send({ result: false });
    }
  },
  detail : (req, res) => res.send("notice detail"),
  edit : (req, res) => res.send("notice edit"),
  delete : (req, res) => res.send("notice delete"),
}