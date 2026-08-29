import { MdDescription } from "react-icons/md";
import project1 from "../assets/project1.png"; 
import { FaGithub } from "react-icons/fa6";
import { ArrowUpRight} from "lucide-react";
import{AnimatedBorderButton} from "@/components/AnimatedBorderButton"
const projects=[
{
    title: "E-commerce Dashboard",
    description:"A comprehensive dashboard showcasing companies sales and profits",
    image:project1,
    tags:["Python","MYSql","PowerBI"],
    link:"https://github.com/Ashish102003/Vendor_Performance_Analysis",
    github:"https://github.com/Ashish102003/Vendor_Performance_Analysis",
}

]



export const Projects=()=>{
    return (<section id="projects" className="py-32 relative overflow-hidden">
        {/* background-glow */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-6 relative z-10">
            {/*Section Header */}
            <div className="text-center mx-auto max-w-3xl mb-16">
                <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                    Featured Worked</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                    Projects that
                <span className="font-serif italic font-normal text-white"> make an impact.</span>
                </h2>
                <p className="text-muted-foreground animate-fade-in animation-delay-200">
                    A collection of projects showcasing how I leverage data, analytics, and technology to solve real-world business problems and deliver actionable insights.
                </p>
            </div>
            {/*Projects grid */}
            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project,idx)=> (
                    <div key={idx} 
                         className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                         style={{animationDelay: `${(idx+1)*100}ms`}}
                         >
                    
                        {/* image*/}
                        <div className="relative overflow-hidden rounded-xl">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/> 
                            <div
                            className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60"
                            />
                            {/* overlay links */}
                            <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <a href={project.link}className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                                    <ArrowUpRight  className="w-5 h-5"/>
                                </a>
                    <a href={project.FaGithub}
                    className="p-3 
                    rounded-full glass hover:bg-primary 
                    hover:text-primary-foreground transition-all">
                    
    <FaGithub size={20} />
</a>
                            </div>
                           
                        </div>
                        {/*content*/}
                        <div className="p-6 space y-4">
                            <div className="flex items-start justify-between">
                                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                                <ArrowUpRight
                                className="w-5 h-5 text-muted-foreground
                                group-hover:text-primary
                                group-hover:translate-x-1
                                group-hover:translate-y-1 transition-all"
                                 />
                            </div>
                            <p className="text-muted-foreground text-sm">{project.description}</p>
                            <div className="flex flex-wrap gap-2">{project.tags.map((tag,tagIdx)=>(
                                <span 
                                key={tagIdx}
                                className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/80 text-muted-foreground hover:border-primary/58 hover:text-primary transition-all duration-300 cursor-pointer">{tag}</span>
                            ))}</div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-12 animate-fade-in animation-delay-500">
                {/* View All cta*/}
                <AnimatedBorderButton>

                    View All Projects
                    <ArrowUpRight className="w-5 h-5" />
                </AnimatedBorderButton>

            </div>
        </div>
        </section>
    );
};