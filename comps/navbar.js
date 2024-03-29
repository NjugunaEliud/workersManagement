import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <h1>AquaEmps Ltd</h1>
                {/* <Image src="/C.webp" width={128} height={77}/> */}
            </div>
            <Link href="/" >Home</Link>
            <Link href="/about" >About</Link>
            <Link href="/workers" >Employees</Link>
        </nav>
      );
}
 
export default Navbar;
