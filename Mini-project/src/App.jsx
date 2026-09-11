import React from 'react'
import Card from './components/card'

const jobs = [
  {
    company: "Amazon",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGARB4PRYKkemGJgn2lUROMMlKLDLTxSgd0SDZ_b_hF-zr5EwsH-I0GcPi&s=10",
    posted: "5 days ago",
    title: "Senior UI/UX Designer",
    type: "Part-Time",
    level: "Senior Level",
    salary: "$120/hr",
    location: "Mumbai, India",
    saved: false
  },
  {
    company: "Google",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHEb6S6S8CQBycuoYsIzFukvQHP77e8dDxPHHtxL8Ccw&s=10",
    posted: "30 days ago",
    title: "Graphic Designer",
    type: "Part-Time",
    level: "Flexible Schedule",
    salary: "$150-220k",
    location: "Kochi, India",
    saved: true
  },
  {
    company: "Dribbble",
    logo: "https://logos-world.net/wp-content/uploads/2023/09/Dribbble-Logo.jpg",
    posted: "18 days ago",
    title: "Senior Motion Designer",
    type: "Contract",
    level: "Remote",
    salary: "$85/hr",
    location: "Chennai, India",
    saved: false
  },
  {
    company: "Figma",
    logo: "https://1000logos.net/wp-content/uploads/2024/09/Figma-Logo.png",
    posted: "5 days ago",
    title: "UX Designer",
    type: "Full-Time",
    level: "In office",
    salary: "$200-250k",
    location: "Bangalore, India",
    saved: true
  },
  {
    company: "Airbnb",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyeT9InopNM0T77XajLIafieu1gXyTKUkjJy4DvdKMtHU8y43_IQZbsgER&s=10",
    posted: "5 days ago",
    title: "Junior UI/UX Designer",
    type: "Contract",
    level: "Remote",
    salary: "$100/hr",
    location: "Delhi, India",
    saved: false
  },
  {
    company: "Apple",
    logo: "https://thumbs.dreamstime.com/b/apple-logo-black-vector-format-available-illustrator-ai-cloud-apple-logo-122032267.jpg",
    posted: "5 days ago",
    title: "Graphic Designer",
    type: "Full-Time",
    level: "Flexible Schedule",
    salary: "$85-120k",
    location: "Kerala, India",
    saved: true
  },
  {
    company: "Microsoft",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScobvdSeHBR4-okgSD_efgPDQC-dBoen19LzhN1SYq-arTG1FcpbVyDmo&s=10",
    posted: "2 days ago",
    title: "Product Designer",
    type: "Full-Time",
    level: "Hybrid",
    salary: "$110-160k",
    location: "Hyderabad, India",
    saved: false
  },
  {
    company: "Netflix",
    logo: "https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940",
    posted: "7 days ago",
    title: "Visual Designer",
    type: "Full-Time",
    level: "Remote",
    salary: "$95-140k",
    location: "Mumbai, India",
    saved: false
  },
  {
    company: "Adobe",
    logo: "https://1000logos.net/wp-content/uploads/2021/04/Adobe-logo.png",
    posted: "10 days ago",
    title: "Creative Designer",
    type: "Part-Time",
    level: "Flexible Schedule",
    salary: "$90/hr",
    location: "Pune, India",
    saved: true
  },
  {
    company: "Canva",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bb/Canva_Logo.svg/1280px-Canva_Logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=thumbnail",
    posted: "3 days ago",
    title: "Junior Product Designer",
    type: "Full-Time",
    level: "In office",
    salary: "$80-115k",
    location: "Bangalore, India",
    saved: false
  }
];






const App = () => {
  return (
    <div className="parent">
      {jobs.map((job, index) => (
  <Card key={index} job={job} />
))}
       

    </div>
  )
}

export default App
