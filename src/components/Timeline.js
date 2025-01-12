import React from 'react';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { ReactComponent as WorkIcon } from '../assets/icons/work.svg';
import { ReactComponent as SchoolIcon } from '../assets/icons/school.svg';
import { ReactComponent as StarIcon } from '../assets/icons/star.svg';

export default function Home() {
    const typeSchool = 'school';
    const typeWork = 'work';
    const timelineData = [
        {
            id: 0,
            date: 'April 2024 – Present',
            title: 'Freecharge – Mumbai, India (Remote)',
            subtitle: 'Senior Software Developer',
            type: typeWork,
        },
        {
            id: 1,
            date: 'July 2021 – April 2024',
            title: 'Freecharge – Mumbai, India (Remote)',
            subtitle: 'Software Developer',
            type: typeWork,
        },
        {
            id: 2,
            date: 'Jun 2020 – Dec 2020  ',
            title: 'Skilzen – Hyderabad, India',
            subtitle: 'Backend Developer Intern',
            type: typeWork,
        },
        {
            id: 3,
            date: 'Aug 2017 - July 2021',
            title: 'National Institute of Technology – Warangal, India',
            subtitle: 'Bachelor of Technology, Chemical Engineering',
            type: typeSchool,
        },
        {
            id: 4,
            date: 'Apr 2016',
            title: 'Delhi Public School, Dhanbad – Jharkhand, India',
            subtitle: 'High School',
            type: typeSchool,
        },
    ];

    return (
        <VerticalTimeline className="vertical-timeline-container" animate={false} lineColor="#000">
            {timelineData.map(item => (
                <VerticalTimelineElement
                    id={item.id}
                    key={item.id}
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#aaa', color: '#000' }}
                    contentArrowStyle={{ borderRight: '7px solid #aaa' }}
                    date={item.date}
                    iconStyle={{ background: '#aaa', border: '#000' }}
                    icon={item.type === typeWork ? <WorkIcon /> : <SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">{item.title}</h3>
                    <h4 className="vertical-timeline-element-subtitle">{item.subtitle}</h4>
                </VerticalTimelineElement>
            ))}
            <VerticalTimelineElement
                id="vertical-timeline-icon-star"
                iconStyle={{ background: '#aaa', border: '#000' }}
                icon={<StarIcon />}
            />
        </VerticalTimeline>
    );
}
