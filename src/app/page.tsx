import Nav from "./component/navbar";
import Link from "next/link"
export default function HomePage(){
    return (
        <div>
        <h1 className = 'text-pink-500'>Home</h1>
            {/* 
            <li><a href ="/privacy">Privacy</a></li>
            <li><a href ="/about">About</a></li>
            <li><a href = "/jobs"></a>Jobs</li>
            <li><a href ="/contact">Contact</a></li>
            <li><a href ="/apply">Apply</a></li>
           <h1>This is Contact Page</h1> */}
            {/* Inorder to prevent reloading NextJs used link tag */}
            {/* <Nav/>
            <li> <Link href ="/privacy">Privacy</Link></li>
            <li><Link href ="/about">About</Link></li>
            <li><Link href = "/jobs">Jobs</Link></li>
            <li><Link href ="/contact">Contact</Link></li>
            <li><Link href ="/apply">Apply</Link></li> */}
            <h1>This is Home Page</h1> 

        </div>
    );
}
