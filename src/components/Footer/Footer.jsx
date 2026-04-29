import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Icon from "../Logo/Icon"
import Section from "./Section"
import { faAngleDown, faCheck, faGlobe, faX } from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faInstagram, faLinkedin, faPinterest, faTiktok, faTwitter, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"

let data = [
    {
        "head": "Shopify",
        "data": [
            "What is Shopify?",
            "Shopify Editions",
            "Careers",
            "Investors",
            "Newsroom",
            "Sustainability"
        ]
    },
    {
        "head": "Ecosystem",
        "data": [
            "Developer Docs",
            "Theme Store",
            "App Store",
            "Partners",
            "Affiliates"
        ]
    },
    {
        "head": "Resources",
        "data": [
            "Blog",
            "Compare Shopify",
            "Guides",
            "Courses",
            "Free Tools",
            "Changelog"
        ]
    },
    {
        "head": "Support",
        "data": [
            "Shopify Help Center",
            "Community Forum",
            "Hire a Partner",
            "Service Status"
        ]
    }
]

let list = [
    "Terms of Service",
    "Legal",
    "Privacy Policy",
    "Sitemap",
    "Your Privacy Choices"
]

let icons = [
    faFacebook,
    faXTwitter,
    faYoutube,
    faInstagram,
    faTiktok,
    faLinkedin,
    faPinterest
]

const Footer = () => (
    <footer className="p-15">
        <div className="mb-10 w-full border-b border-gray-400 pb-10 flex justify-between"><Icon iconHeight={50} />{data.map((el, i) => ( <Section head={el.head} data={el.data} /> ))}</div>
        <div>
            <div><FontAwesomeIcon icon={faGlobe} /> USA | English <FontAwesomeIcon icon={faAngleDown} /></div>
            <div className="w-full flex gap-5 flex-wrap">
                <div className="flex items-center gap-1">
                    <div className="flex gap-10">{list.map((el, i) => ( <a href="/" key={i}>{el}</a> ))}</div>
                    <div className="border-2 border-blue-600 rounded-full flex items-center overflow-hidden scale-60"><FontAwesomeIcon icon={faCheck} className="text-blue-600 p-1" /> <FontAwesomeIcon icon={faX} className="text-white bg-blue-600 p-1" /></div>
                </div>
                <div className="flex gap-2">{icons.map((el, i) => ( <div key={i} className="w-10 h-10 text-3xl border rounded-full flex items-center justify-center"><FontAwesomeIcon icon={el} /></div> ))}</div>
            </div>
        </div>
    </footer>
)

export default Footer