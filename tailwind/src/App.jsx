import Section1 from './components/Section1/section1'
import 'remixicon/fonts/remixicon.css'
import Section2 from './components/Section2/section2'

import React from 'react'

const users = [
  {
    img: "https://img.magnific.com/free-photo/smiling-business-woman-with-folded-hands-against-white-wall-toothy-smile-crossed-arms_231208-10801.jpg?semt=ais_hybrid&w=740&q=80",
    intro: "I feel confident about the services I receive and believe my financial needs are being met.",
    tag: "Satisfied"
  },
  {
    img: "https://img.magnific.com/premium-photo/corporate-business-formal-western-girl-hd-photo_1302055-91.jpg?semt=ais_hybrid&w=740&q=80",
    intro: "I have access to basic services, but there are still several areas where I need better support.",
    tag: "Underserved"
  },
  {
    img: "https://img.magnific.com/free-photo/confident-cheerful-young-businesswoman_1262-20881.jpg?semt=ais_hybrid&w=740&q=80",
    intro: "I face difficulties accessing traditional banking services and often rely on alternative options.",
    tag: "Underbanked"
  }
];


const App = () => {
  return (
    <div>
       <Section1 users={users}/>
       <Section2/>
    </div>
  )
}

export default App



// what i have to see why can't we simple use our attrbute name {users} intad o props while accepting in the function becaus props is just a name taht we are giving
// ({props}) (props) what is the difference betweeen twoo