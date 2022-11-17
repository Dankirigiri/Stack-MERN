import { Link } from "react-router-dom";

export const Navbar = () => {
    return(
        <div>
            <h1>Products Page</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/productform">Create Product</Link>
                </li>
            </ul>
        </div>
    )
}