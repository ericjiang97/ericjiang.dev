import MonPlanPic from '../images/projects/monplan.png'
import MarieJSPic from '../images/projects/mariejs.png'

export const projects = {
  featured: [
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
      description: `MonPlan is the official Monash University Course Planning Tool.`,
      copyright: 'Copyright (c) Monash University 2016 - 2019', // copyright text
    },
    {
      title: 'MARIE.js', //project title
      image: MarieJSPic,
      link: 'https://marie.js.org', // link to project
      githubRepo: 'https://github.com/MARIE-js/MARIE.js',
      dates: {
        from: 'Mar 2016', // from (Month Year)
        to: '', // to (Month Year)
      },
      description: `MARIE.js is a very simple and intuitive Assembly Language Simulator. It is a web-based version of the MARIE simulator.`,
      copyright: 'Copyright (c) MARIE.js Team & Monash University 2016 - 2019', // copyright text
    },
  ],
  other: [
    {
      title: 'Bit by Bit 2019', //project title
      link: 'https://bitbybit.netlify.com', // link to project
      githubRepo: 'https://github.com/wiredmonash/bit-by-bit-hackathon-2019',
      description: `Bit by Bit Hackathon is our hackathon for beginning hackers and is only available to Monash University students.`,
    },
    {
      title: 'GeckoDM', //project title
      link: 'https://geckodm.github.io', // link to project
      githubRepo: 'https://github.com/GeckoDM/GeckoDownloadManager',
      description: `Gecko Download Manager (GeckoDM) is a Chrome Extension that improves downloading lectures from the Echo360 System.`,
    },
    {
      title: 'PTV Signange', //project title
      link: 'https://metrotrains.ericjiang.dev', // link to project
      githubRepo: 'https://github.com/lorderikir/melbpt',
      description: `Gecko Download Manager (GeckoDM) is a Chrome Extension that improves downloading lectures from the Echo360 System.`,
    },
  ],
}
