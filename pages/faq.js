import Link from 'next/link';
import CustomAccordion from '../components/CustomAccordion';
import Layout from '../components/Layout';

// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';


export async function getServerSideProps() {

    const rows = [
        {
        title: "Refunds",
        content: "Email me"
        },
        {
        title: "Reschedule",
        content: "You can't"
        },
        {
        title: "Contact",
        content: "Call me"
        }
    ]

    const rows2 = [
        {
        title: "Hi",
        content: "Email me"
        },
        {
        title: "Hello",
        content: "You can't"
        },
        {
        title: "Bye",
        content: "Call me"
        }
    ]
    console.log(rows);
    return {
        props: {rows, rows2}, // will be passed to the page component as props
    }
}

// const rows = [
//     {
//         title: "Refunds",
//         content: "Email me"
//     },
//     {
//         title: "Reschedule",
//         content: "You can't"
//     },
//     {
//         title: "Contact",
//         content: "Call me"
//     }
// ]

// export default ({rows}) => (
//     <CustomAccordion rows = {rows} />
// )

// const CustomAccordion = ({rows}) => {
//     console.log(rows.length);
//     const list = rows.map( (row) => {
//         return (
//             <Accordion>
//                 <AccordionSummary> {row.title} </AccordionSummary>
//                 <AccordionDetails> {row.content} </AccordionDetails>
//             </Accordion>
//         )
//     })

//     return <div> {list} </div> 
// }

// const CustomAccordion = ({rows}) => (
//     <div>
//         {rows.map((row) => (
//             <Accordion>
//                 <AccordionSummary> {row.title} </AccordionSummary>
//                 <AccordionDetails> {row.content} </AccordionDetails>
//             </Accordion>
//         ))}
//     </div>
// )

export default function Faq({rows, rows2}) {
    console.log(rows);
    return (
        <Layout title = "FAQ"> 
            <CustomAccordion rows = {rows}/>
            <br/>
            <CustomAccordion rows = {rows2} />
        </Layout> 
    )
}



