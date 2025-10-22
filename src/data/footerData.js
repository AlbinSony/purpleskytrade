import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export const footMenu = [
    {
        id: 1,
        title: "Products",
        menu: [
            {
                id: 1,
                link: "IQF Frozen Flatbreads",
                path: "/"
            },
            {
                id: 2,
                link: "Ready-to-Fry Snacks",
                path: "/"
            },
            {
                id: 3,
                link: "Retort RTE Meals",
                path: "/"
            },
            {
                id: 4,
                link: "Gourmet Pickles",
                path: "/"
            },
            {
                id: 5,
                link: "Ready-to-Cook Pastes",
                path: "/"
            },
        ]
    },
    {
        id: 2,
        title: "Company",
        menu: [
            {
                id: 1,
                link: "About Us",
                path: "/about"
            },
            {
                id: 2,
                link: "Our Story",
                path: "/about"
            },
            {
                id: 3,
                link: "Quality & Certifications",
                path: "/"
            },
            {
                id: 4,
                link: "Export Markets",
                path: "/"
            },
            {
                id: 5,
                link: "Contact Us",
                path: "/contact"
            },
        ]
    },
    {
        id: 3,
        title: "Contact Info",
        menu: [
            {
                id: 1,
                link: "Greenbeelife@mail.com",
                path: "mailto:Greenbeelife@mail.com"
            },
            {
                id: 2,
                link: "+1 (903) 894-0149",
                path: "tel:+19038940149"
            },
            {
                id: 3,
                link: "Request Quote",
                path: "/contact"
            },
            {
                id: 4,
                link: "Become a Partner",
                path: "/contact"
            },
            {
                id: 5,
                link: "Terms & Conditions",
                path: "/"
            },
        ]
    }
];

export const footSocial = [
    {
        id: 1,
        icon: <FaFacebookF />,
        path: "/",
    },
    {
        id: 2,
        icon: <FaTwitter />,
        path: "/",
    },
    {
        id: 3,
        icon: <FaInstagram />,
        path: "/",
    },
    {
        id: 4,
        icon: <FaLinkedinIn />,
        path: "/",
    },
];
