'use client';

import { AnimatePresence } from 'framer-motion';
import { FC, useState } from 'react';
import TeamCard from './TeamCard';
import TeamModal from './TeamModal';

interface TeamMember {
  name: string;
  role: string;
  imageSrc: string;
  title: string;
  linkedin?: string;
  email?: string;
  medium?: string;
  focus: string;
  education: string;
  experienceP1: string;
  experienceP2?: string;
}

interface TeamCardContainerProps {
  style?: React.CSSProperties;
  teamMembers: TeamMember[]; // Add this to pass team members data
}

const cardContainerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 'clamp(30px, 2vw, 2vw)',
  flexWrap: 'wrap',
  margin: '0 clamp(30px, 5vw, 25vw)',
  marginBottom: 'clamp(30px, 2vw, 2vw)',
  maxWidth: '1200px',
};

const outerWrapperStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
};

const TeamCardContainer: FC<TeamCardContainerProps> = ({ style, teamMembers }) => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const handleCardClick = (member: TeamMember) => {
    setSelectedMember(member);
  };

  const handleCloseModal = () => {
    setSelectedMember(null);
  };

  const combinedTextStyle = {
    ...cardContainerStyle,
    ...style,
  };

  return (
    <div style={outerWrapperStyle}>
      <div style={combinedTextStyle}>
        {teamMembers.map(member => (
          <TeamCard
            key={member.name}
            name={member.name}
            role={member.role}
            imageSrc={member.imageSrc}
            onCardClick={() => handleCardClick(member)}
          />
        ))}
      </div>
      <AnimatePresence>
        {selectedMember && (
          <TeamModal
            isOpen={Boolean(selectedMember)}
            onClose={handleCloseModal}
            imageSrc={selectedMember.imageSrc}
            name={selectedMember.name}
            title={selectedMember.title}
            linkedin={selectedMember.linkedin}
            email={selectedMember.email}
            medium={selectedMember.medium}
            focus={selectedMember.focus}
            education={selectedMember.education}
            experienceP1={selectedMember.experienceP1}
            experienceP2={selectedMember.experienceP2}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default TeamCardContainer;
