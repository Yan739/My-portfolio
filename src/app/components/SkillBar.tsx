const SkillBar = ({ skill, index }: { skill: Skill; index: number }) => (
  <div className="space-y-2">
    <div className="flex justify-between items-center">
      <span className="text-gray-300 flex items-center gap-2">
        <span>{skill.icon}</span>
        {skill.name}
      </span>
      <span className="text-cyan-400 font-semibold">{skill.level}%</span>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-2">
      <div 
        className={`h-2 rounded-full bg-gradient-to-r ${
          skill.category === 'frontend' ? 'from-cyan-400 to-blue-500' :
          skill.category === 'backend' ? 'from-green-400 to-emerald-500' :
          skill.category === 'database' ? 'from-purple-400 to-pink-500' :
          'from-orange-400 to-red-500'
        } transition-all duration-1000 ease-out`}
        style={{ width: `${skill.level}%` }}
      ></div>
    </div>
  </div>
);
