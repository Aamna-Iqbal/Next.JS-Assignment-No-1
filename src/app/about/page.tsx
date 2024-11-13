import Link from "next/link"
import Navbar from "../component/navbar"
export default async function AboutPage(){
await new Promise((resolve)=>{
        setTimeout(resolve,5000)});
return (
        <div>
            {/* 
            <li><a href ="/privacy">Privacy</a></li>
            <li><a href ="/about">About</a></li>
            <li><a href ="/jobs">Jobs</a></li>
            <li><a href = "/contact">Contact</a></li>
            <li><a href = "/apply">Apply</a></li>
            <h1>This is about page</h1>  */}
             {/* Inorder to prevent reloading NextJs used link tag */}
             {/* <Navbar/> */}
            {/* <li> <Link href ="/privacy">Privacy</Link></li>
            <li><Link href ="/about">About</Link></li>
            <li><Link href = "/jobs">Jobs</Link></li>
            <li><Link href ="/contact">Contact</Link></li>
            <li><Link href ="/apply">Apply</Link></li>  */}
            <h1>This is About Page</h1>

        </div>
     )}