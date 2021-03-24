import Home from "@/views/Home";
import About from "@/views/About";
import Blog from "@/views/Blog";
import Project from "@/views/Project";
import Message from "@/views/Message";
import BlogDetail from "@/views/Blog/BlogDetail"

export default [{
    name: "Home",
    path: "/",
    component: Home
  },
  {
    name: "About",
    path: "/about",
    component: About
  },
  {
    name: "Blog",
    path: "/blog",
    component: Blog
  },
  {
    name: "CategoryBlog",
    path: "/blog/cate/:categoryId",
    component: Blog
  },
  {
    name: "BlogDetail",
    path: "/blog/:blogId",
    component: BlogDetail

  },
  {
    name: "Project",
    path: "/project",
    component: Project
  },
  {
    name: "Message",
    path: "/message",
    component: Message
  },
];