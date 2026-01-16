import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const contactdetails = [
    {
        title:"Twitter",
        Logo: FaXTwitter,
        url:"https://twitter.com/umeshpal8141",
        event_name:"social_twitter_click"
    },
    {
        title:"LinkedIn",
        Logo: FaLinkedin,
        url:"https://www.linkedin.com/in/umeshkumarpal/",
        event_name:"social_linkedin_click"
    },
    {
        title:"GitHub",
        Logo: FaGithub,
        url:"https://github.com/72umesh",
        event_name:"social_github_click"
    },
    {
        title:"Email",
        Logo: MdOutlineEmail,
        url:"mailto:umeshkumarpal8141@gmail.com",
        event_name:"social_mail_click"
    }
]

export default contactdetails;