import Navbar from "../component/navbar"
import Link from "next/link"
export default function JobPage(){
    return (
        <div>
            {/* 
            <li><a href ="/home">Home</a></li>
            <li><a href ="/privacy">Privacy</a></li>
            <li><a href ="/about">About</a></li>
            <li><a href = "/jobs">Jobs</a></li>
            <li><a href ="/contact">Contact</a></li>
            <li><a href ="/apply">Apply</a></li>
            <h1>This is Job Page</h1>  */}
    {/* Inorder to prevent reloading NextJs used link tag */}
       {/* <Navbar/>
             <li><Link href ="/home">Home</Link></li>
            <li> <Link href ="/privacy">Privacy</Link></li>
            <li><Link href ="/about">About</Link></li>
            <li><Link href = "/jobs">Jobs</Link></li>
            <li><Link href ="/contact">Contact</Link></li>
            <li><Link href ="/apply">Apply</Link></li> */}
            <h1>This is Job Page</h1>  

        </div>
    );
}