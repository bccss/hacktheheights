import React from 'react';
import '../stylesheets/Team.css';

const teamMembers = [
  { name: 'Alice', position: 'Frontend Developer', imageUrl: 'https://placekitten.com/100/100', linkedin: 'https://www.linkedin.com/in/alice/' },
  { name: 'Bob', position: 'Backend Developer', imageUrl: 'https://placekitten.com/100/101', linkedin: 'https://www.linkedin.com/in/bob/' },
  { name: 'Charlie', position: 'DevOps', imageUrl: 'https://placekitten.com/100/102', linkedin: 'https://www.linkedin.com/in/charlie/' },
  { name: 'Trevor', position: 'Compliance Manager', imageUrl: 'https://placekitten.com/100/103', linkedin: 'https://www.linkedin.com/in/alice/' },
  { name: 'Jane', position: 'Analyst', imageUrl: 'https://placekitten.com/100/104', linkedin: 'https://www.linkedin.com/in/bob/' },
  { name: 'Jack', position: 'Chief Fun Officer', imageUrl: 'https://placekitten.com/100/105', linkedin: 'https://www.linkedin.com/in/charlie/' }
  // Add more members as needed
];

const Team = () => {
  return (
    <div>
      <div className='title'>TEAM</div>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.imageUrl} alt={`${member.name}`} />
            <h3>{member.name}</h3>
            <p>{member.position}</p>
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
              <svg className="linkedin-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M22.225 0h-20.45c-.982 0-1.775.793-1.775 1.775v20.451c0 .982.793 1.774 1.775 1.774h20.45c.982 0 1.775-.792 1.775-1.775v-20.45c0-.982-.793-1.775-1.775-1.775zm-12.649 20.419h-2.919v-10.01h2.919v10.01zm-1.465-11.359c-.945 0-1.524-.626-1.524-1.41 0-.801.579-1.408 1.499-1.408 .921 0 1.523.607 1.524 1.408 0 .784-.604 1.41-1.499 1.41zm13.128 11.359h-2.917v-5.392c0-1.369-.489-2.304-1.711-2.304-1.041 0-1.663.7-1.939 1.37-.099.245-.125.589-.125.939v5.387h-2.919s.04-8.752 0-9.649h2.919v1.378c.394-.606 1.094-1.472 2.667-1.472 1.945 0 3.035 1.26 3.035 3.956v5.787z"/>
              </svg>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
