// import { useAppSelector } from "@/hooks/redux";
// import { Card, CardContent } from "@/components/ui/card";
// import { Star } from "lucide-react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";

// const TestimonialsSection = () => {
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
//   const testimonials = useAppSelector((state) => state.portfolio.testimonials);

//   // Default testimonial for demo
//   const defaultTestimonial = {
//     id: "1",
//     name: "Sarah Johnson",
//     role: "Product Manager",
//     company: "TechCorp Inc.",
//     content:
//       "Working with Robert was an absolute pleasure. His attention to detail and technical expertise helped us deliver our project ahead of schedule. The quality of his work exceeded our expectations, and his communication throughout the process was excellent.",
//     avatar: "/placeholder.svg",
//   };

//   const displayTestimonial =
//     testimonials.length > 0 ? testimonials[0] : defaultTestimonial;

//   return (
//     <section className="py-20 bg-background">
//       <div className="container mx-auto px-4">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <div data-aos="fade-right" className="space-y-6">
//             <div>
//               <div className="flex items-center space-x-2 mb-4">
//                 <div className="w-12 h-12 bg-emerald-600/20 rounded-full flex items-center justify-center">
//                   <div className="w-6 h-6 bg-primary rounded-full"></div>
//                 </div>
//                 <span className="text-primary font-semibold">
//                   Client's Feedback
//                 </span>
//               </div>

//               <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
//                 I am Fully Committed
//                 <br />
//                 <span className="text-primary">To The Needs My</span>
//                 <br />
//                 Customers
//               </h2>

//               <p className="text-muted-foreground">
//                 Client satisfaction is my top priority. I work closely with each
//                 client to understand their unique requirements and deliver
//                 solutions that exceed expectations.
//               </p>
//             </div>
//           </div>

//           <div data-aos="fade-down" className="relative">
//             <Card className="bg-gradient-to-br from-orange-400 to-emerald-400 p-8 border-none">
//               <CardContent className="p-0">
//                 <div className="bg-white rounded-2xl p-8 relative">
//                   {/* Quote marks */}
//                   <div className="absolute -top-4 -left-4 w-8 h-8 bg-emerald-400 rounded-full flex items-center justify-center">
//                     <span className="text-white text-xl font-bold">"</span>
//                   </div>

//                   {/* Rating stars */}
//                   <div className="flex items-center space-x-1 mb-4">
//                     {[...Array(5)].map((_, i) => (
//                       <Star
//                         key={i}
//                         className="w-5 h-5 fill-yellow-400 text-yellow-500"
//                       />
//                     ))}
//                   </div>

//                   <p className="text-foreground mb-6 leading-relaxed">
//                     {displayTestimonial.content}
//                   </p>

//                   <div className="flex items-center space-x-4">
//                     <img
//                       src={displayTestimonial.avatar}
//                       alt={displayTestimonial.name}
//                       className="w-12 h-12 rounded-full object-cover"
//                     />
//                     <div>
//                       <div className="font-semibold text-foreground">
//                         {displayTestimonial.name}
//                       </div>
//                       <div className="text-sm text-muted-foreground">
//                         {displayTestimonial.role}, {displayTestimonial.company}
//                       </div>
//                     </div>
//                   </div>

//                   {/* Decorative emoji */}
//                   <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-emerald-400/20 rounded-full flex items-center justify-center">
//                     <span className="text-2xl">😊</span>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialsSection;
