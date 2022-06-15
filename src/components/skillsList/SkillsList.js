import * as React from 'react';
import { useSelector } from 'react-redux';

export default function SkillsList() {
  const skills = useSelector((store) => store.searchSliceReducer.skills);

  return (
    <div>
      <ul>
        {skills.map((skill) => <li key={skill.id}>{skill.name}</li>)}
      </ul>
    </div>

  );
}
