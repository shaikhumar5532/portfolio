
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const SkillCategory = ({ title, skills }: { title: string, skills: { name: string, level: number }[] }) => (
  <div className="space-y-6 py-4">
    <h3 className="text-lg font-medium text-slate-light">{title}</h3>
    <div className="space-y-5">
      {skills.map((skill) => (
        <div key={skill.name} className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">{skill.name}</span>
            <span className="text-xs text-slate-dark font-mono">{skill.level}%</span>
          </div>
          <Progress value={skill.level} className="h-1.5 bg-navy-light" indicatorClassName="bg-teal" />
        </div>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const [activeTab, setActiveTab] = useState("frontend");
  
  const skillsData = {
    frontend: [
      { name: 'React', level: 90 },
      { name: 'JavaScript', level: 95 },
      { name: 'TypeScript', level: 85 },
      { name: 'HTML/CSS', level: 90 },
      { name: 'Tailwind CSS', level: 85 },
    ],
    backend: [
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 80 },
      { name: 'MongoDB', level: 75 },
      { name: 'REST API', level: 90 },
      { name: 'GraphQL', level: 70 },
    ],
    tools: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 70 },
      { name: 'AWS', level: 65 },
      { name: 'CI/CD', level: 75 },
      { name: 'Figma', level: 80 },
    ],
  };

  return (
    <section id="skills" className="section">
      <h2 className="section-heading">Skills</h2>
      
      <Card className="bg-navy-light border-slate-dark">
        <CardContent className="p-6">
          <Tabs defaultValue="frontend" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-3 gap-2 bg-navy border-slate-dark rounded-lg">
              <TabsTrigger value="frontend" className="data-[state=active]:bg-navy-light data-[state=active]:text-teal">
                Frontend
              </TabsTrigger>
              <TabsTrigger value="backend" className="data-[state=active]:bg-navy-light data-[state=active]:text-teal">
                Backend
              </TabsTrigger>
              <TabsTrigger value="tools" className="data-[state=active]:bg-navy-light data-[state=active]:text-teal">
                Tools
              </TabsTrigger>
            </TabsList>
            <TabsContent value="frontend">
              <SkillCategory title="Frontend Development" skills={skillsData.frontend} />
            </TabsContent>
            <TabsContent value="backend">
              <SkillCategory title="Backend Development" skills={skillsData.backend} />
            </TabsContent>
            <TabsContent value="tools">
              <SkillCategory title="Development Tools" skills={skillsData.tools} />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </section>
  );
};

export default Skills;
