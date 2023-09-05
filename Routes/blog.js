import express from 'express';
const Routes = express.Router();
import Blog from '../Model/blog/blog.js';

import { GetBlog,GetNew,PostArticle,GetId,DeleteArticle,GetEdit,EditArticle } from '../Controller/blog.js';

//渲染文章列表頁面
Routes.route('/').get(GetBlog).post(PostArticle);
//渲染創建文章頁面
Routes.route('/new').get(GetNew);
//查看創建文章的內容&刪除文章fuction
Routes.route('/:id').get(GetId).delete(DeleteArticle);
//渲染修改文章頁面
Routes.route('/edit/:id').get(GetEdit);
//修改文章的fuction
Routes.put('/:id',async(req,res) =>{
    const update = await Blog.findByIdAndUpdate(req.params.id,{
        $set: req.body
       },{new: true})
//      .then((date) =>{
//     const {title, description, markdown} = req.body;
    
//     date.title = title;
//     date.description = description;
//     date.markdown = markdown;
    
//     try{
//         date.save().then(()=>{
//             // res.redirect('/blog/:id')
//             res.status(200).json(update)
//         })
//     }catch(error){
//         // res.render('blog/edit.ejs')
//         // console.log(e)
//         res.status(400).json(error)
//     }
//  })
    // console.log(update)
})


export default Routes;