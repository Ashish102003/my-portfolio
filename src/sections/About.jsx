import {Code2, Database,TrendingUp,Users} from "lucide-react";



const highlights=[
    {
    icon:Code2,
    title:"Optimized Solutions",
    description:
      "Learning to build efficient logic, write structured code, and create optimized SQL queries for better performance."
},

    {
    icon: Database,
    title:"Data & Insights",
    description:
      "Learning SQL, data analysis, and business insights to transform raw data into meaningful information."
},

   {
    icon:TrendingUp,
    title:"Growth Mindset",
    description:
      "Focused on learning consistently, improving step by step, and adapting to new technologies."
},

   {
    icon:Users,
    title:"Collaboration",
    description:
     "Comfortable collaborating with teams, sharing ideas, and communicating effectively to achieve meaningful outcomes."
}
]

export const About=()=>{
    return (
    <section id="about" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/*left column */}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                    <span className="text-secondary-foreground text-sm 
                    font-medium tracking-wider uppercase">About Me</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animate-delay-100 text-secondary-foreground">Buiding the future,
                <span className="font-serif italic font-normal text-white">one component at a time.</span>
                </h2>
                <div className="space-y-4 text-muted-foreground animate-fade-in animate-delay-200">
                    <p>
                    I’m an MCA student with a strong interest in data-driven technologies, 
                    analytical problem solving, and building meaningful digital solutions. 
                    I enjoy working with structured data, identifying patterns, and exploring 
                    how technology can support smarter business decisions.
                    </p>
                    <p>
                    Currently, I’m focusing on areas such as SQL, Power BI, data analytics, 
                    and data engineering while continuously strengthening my technical and 
                    problem-solving skills through projects and hands-on learning. Alongside 
                    data-oriented roles, I’m also open to opportunities that combine technology, 
                    analysis, and practical business understanding.
                    </p>
                    <p>
                    While my primary focus remains in data analytics and related technologies, 
                    I’ve also gained experience working with frontend development and UI/UX-focused 
                    projects. Exploring these areas helped me better understand how technical 
                    solutions and user experience work together to create meaningful digital products.
                    </p>
                </div>
                <div className="glass rounded-2xl p-6 glow-border animation-fade-in animate-delay-300">
                    <p className="text-lg font-medium italic text-foreground">
                    I aim to grow at the intersection of technology, data, and problem solving — 
                    building solutions that are not only technically strong but also meaningful 
                    and impactful. Driven by curiosity and continuous learning, I strive to turn 
                    ideas, insights, and challenges into practical digital experiences while 
                    evolving into a well-rounded technology professional.
                    </p>
                </div>
            </div>
            {/*Right Column highlights*/}
            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((item,idx)=>(
                <div key={idx} className="glass p-6 rounded-2xl animate-fade-in"
                  style={{animationDelay:`${(idx+1)*100}ms`}}
                >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                        <item.icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
            </div>
        </div>
    </section>
    );
};  