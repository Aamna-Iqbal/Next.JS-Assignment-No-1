import Link from "next/link"
export default async function Navbar(){
return(
    <>
    <ul>
            <li> <Link href ="/privacy">Privacy</Link></li>
            <li><Link href ="/about">About</Link></li>
            <li><Link href = "/jobs">Jobs</Link></li>
            <li><Link href ="/contact">Contact</Link></li>
            <li><Link href ="/apply">Apply</Link></li>
      
        </ul>
        </>)}