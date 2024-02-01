"use client";

import { useState, ReactNode, FC } from 'react';
import TeamCard from './TeamCard';
import TeamModal from './TeamModal';

const teamMembers = [
    {
        name: "Devon Gethers",
        role: "Managing Partner",
        imageSrc: "./headshotDevon.png",
        photo: "path/to/photoDevon.jpg",
        title: "Managing Partner",
        linkedin: "https://linkedin.com/in/devongethers",
        email: "devongethers@example.com",
        medium: "https://medium.com/@devongethers",
        focus: "Business Development",
        education: "Harvard University",
        experience: "15 years in management"
    },
    {
        name: "Karlton Haney",
        role: "Managing Partner",
        imageSrc: "/headshotKarlton.png",
        photo: "path/to/photoKarlton.jpg",
        title: "Managing Partner",
        linkedin: "https://linkedin.com/in/karltonhaney",
        email: "karltonhaney@example.com",
        medium: "https://medium.com/@karltonhaney",
        focus: "Strategic Planning",
        education: "Stanford University",
        experience: "12 years in strategic roles"
    },
    {
        name: "Dallin Anderson",
        role: "Advisor",
        imageSrc: "./headshotDallin.png",
        photo: "path/to/photoDallin.jpg",
        title: "Advisor",
        linkedin: "https://linkedin.com/in/dallinanderson",
        email: "dallinanderson@example.com",
        medium: "https://medium.com/@dallinanderson",
        focus: "Financial Advising",
        education: "MIT",
        experience: "10 years in finance"
    },
    {
        name: "Heather Harmon",
        role: "Advisor",
        imageSrc: "./headshotHeather.png",
        photo: "path/to/photoHeather.jpg",
        title: "Advisor",
        linkedin: "https://linkedin.com/in/heatherharmon",
        email: "heatherharmon@example.com",
        medium: "https://medium.com/@heatherharmon",
        focus: "Marketing",
        education: "University of California, Berkeley",
        experience: "8 years in marketing"
    },
    {
        name: "Zach Thomas",
        role: "Advisor",
        imageSrc: "./headshotZach.png",
        photo: "path/to/photoZach.jpg",
        title: "Advisor",
        linkedin: "https://linkedin.com/in/zachthomas",
        email: "zachthomas@example.com",
        medium: "https://medium.com/@zachthomas",
        focus: "Technology Development",
        education: "Carnegie Mellon University",
        experience: "10 years in tech industry"
    }
];

interface TeamMember {
    name: string;
    role: string;
    imageSrc: string;
    photo: string;
    title: string;
    linkedin: string;
    email: string;
    medium: string
    focus: string;
    education: string;
    experience: string;
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
    gap: 'clamp(1vw, 3vw, 4vw)',
    flexWrap: 'wrap',
    margin: '0 clamp(5vw, 5vw, 7vw)',
  }

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
        ...style
    };

    return (
        <>
            <div style={combinedTextStyle}>
                {teamMembers && teamMembers.map(member => (
                    <TeamCard 
                        key={member.name}
                        name={member.name}
                        role={member.role}
                        imageSrc={member.imageSrc}
                        onCardClick={() => handleCardClick(member)}
                    />
                ))}
            </div>
            {selectedMember && (
                <TeamModal 
                    isOpen={Boolean(selectedMember)}
                    onClose={handleCloseModal}
                    photo={selectedMember.photo}
                    name={selectedMember.name}
                    title={selectedMember.title}
                    linkedin={selectedMember.linkedin}
                    email={selectedMember.email}
                    medium={selectedMember.medium}
                    focus={selectedMember.focus}
                    education={selectedMember.education}
                    experience={selectedMember.experience}
                />
            )}
        </>
    );
}

export default TeamCardContainer;