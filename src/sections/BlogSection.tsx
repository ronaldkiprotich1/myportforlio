// import { useAppSelector } from "@/hooks/redux";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Calendar, User } from "lucide-react";

// import onlineMarketing from "../assets/images/online-marketing.jpg";
// import secureApps from "../assets/images/secure-apps.jpg";
// import uiux from "../assets/images/user-interface.jpg";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";

// const BlogSection = () => {
//   useEffect(() => {
//     AOS.init({ duration: 700, easing: "ease-in-out", once: false });

//     // Refresh AOS on scroll and resize to re-trigger animations
//     const handleScroll = () => AOS.refresh();

//     window.addEventListener("scroll", handleScroll);
//     window.addEventListener("resize", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       window.removeEventListener("resize", handleScroll);
//     };
//   }, []);
//   const blogPosts = useAppSelector((state) => state.portfolio.blogPosts);

//   const defaultPosts = [
//     {
//       id: "1",
//       title: "Top 10 Skills of Effective Online Marketing for Beginners",
//       excerpt:
//         "Learn the essential skills needed to succeed in online marketing and grow your business.",
//       image: onlineMarketing,
//       date: "2024-01-15",
//       readTime: "8 min read",
//     },
//     {
//       id: "2",
//       title: "Best Practices & User Input Validation in JavaScript",
//       excerpt:
//         "Essential techniques for validating user input and maintaining secure applications.",
//       image: secureApps,
//       date: "2024-01-10",
//       readTime: "6 min read",
//     },
//     {
//       id: "3",
//       title: "Key Principles of User Interface Design and User Experience",
//       excerpt:
//         "Understanding the core principles that make interfaces intuitive and user-friendly.",
//       image: uiux,
//       date: "2024-01-05",
//       readTime: "10 min read",
//     },
//   ];

//   const displayPosts = blogPosts.length > 2 ? blogPosts : defaultPosts;

//   return (
//     <section className="py-20 bg-portfolio-section-bg">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <span className="text-primary font-semibold text-sm uppercase tracking-wide">
//             Recent News
//           </span>
//           <h2
//             data-aos="flip-up"
//             className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4"
//           >
//             Latest From <span className="text-primary">Blogs</span>
//           </h2>
//         </div>

//         <div
//           data-aos="zoom-in"
//           className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
//         >
//           {displayPosts.map((post) => (
//             <Card
//               key={post.id}
//               className="group overflow-hidden hover:shadow-lg transition-all duration-300 border-none"
//             >
//               <div className="relative overflow-hidden h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
//                 <span className="text-muted-foreground text-sm">
//                   <img src={post.image} alt="post" />
//                 </span>
//               </div>

//               <CardContent className="p-6">
//                 <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
//                   <div className="flex items-center space-x-1">
//                     <Calendar className="w-4 h-4" />
//                     <span>{new Date(post.date).toLocaleDateString()}</span>
//                   </div>
//                   <div className="flex items-center space-x-1">
//                     <User className="w-4 h-4" />
//                     <span>{post.readTime}</span>
//                   </div>
//                 </div>

//                 <h3 className="text-lg font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
//                   {post.title}
//                 </h3>

//                 <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
//                   {post.excerpt}
//                 </p>

//                 <Button
//                   variant="outline"
//                   size="sm"
//                   className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
//                 >
//                   Read More
//                 </Button>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BlogSection;
