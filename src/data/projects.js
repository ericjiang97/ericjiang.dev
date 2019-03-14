import MonPlanPic from '../images/projects/monplan.png'
import MarieJSPic from '../images/projects/mariejs.png'

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
  {
    title: 'MARIE.js', //project title
    image: MarieJSPic,
    link: 'https://marie.js.org', // link to project
    dates: {
      from: 'Mar 2016', // from (Month Year)
      to: '', // to (Month Year)
    },
    description: `MARIE.js is a very simple and intuitive Assembly Language Simulator. It is a web-based version of the MARIE simulator.
    \nThis simulator is used in Monash University – Faculty of Information Technology unit: FIT1047 – Introduction to computer, networks and security. Which is a core unit of all IT courses at Monash University.
    \nMARIE.js is an open-sourced project.`,
    copyright: 'Copyright (c) MARIE.js Team & Monash University 2016 - 2019', // copyright text
  },
]
