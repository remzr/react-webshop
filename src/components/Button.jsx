import { Link, NavLink } from "react-router";

function Button({navPath = "/", callToAction = "More"}) {

    return (
        <Link 
            className="text-zinc-200 font-default text-xl bg-emerald-600 px-8 py-4 rounded-lg"
            to={navPath}>
            {callToAction}
        </Link>
  )
}

export default Button
