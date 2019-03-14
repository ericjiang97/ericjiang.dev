import MonPlanPic from '../images/projects/monplan.png'

export const projects = [
  // {
  //     title: '', //project title
  //     link: '', // link to project
  //     dates: {
  //         from: '', // from (Month Year)
  //         to: '', // to (Month Year)

  //     },
  //    description: ''
  //     copyright: '', // copyright text
  // },
  {
    title: 'MonPlan', //project title
    image: MonPlanPic,
    link: 'https://monplan.apps.monash.edu', // link to project
    dates: {
      from: 'Oct 2016', // from (Month Year)
      to: 'Apr 2019', // to (Month Year)
    },
    description: `MonPlan is the official Monash University Course Planning Tool. 
    This project was started off as an Open Sourced Project by Josh Nelsson-Smith and me. \n\nKey 
    Features include: \n - Preload enrolment data with grades \n- Integration into the university’s Student Management System (SMS)\n- Course Advisors have ability to review student's course plans
    \n- Course Progression Guide and helper tool to show what students need to do to complete their degree and nominated area of study`,
    copyright: 'Copyright (c) Monash University 2016 - 2019', // copyright text
  },
]
