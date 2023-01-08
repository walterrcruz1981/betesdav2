import { HiOutlineChatBubbleLeftEllipsis, HiPhoneArrowUpRight, HiEnvelope, HiMapPin } from 'react-icons/hi2'

export const links = [
    {
        title: 'llamar',
        url: 'tel:17148783335',
        icon: <HiPhoneArrowUpRight />
    },
    {
        title: 'Texto',
        url: 'sms:17148783335',
        icon: <HiOutlineChatBubbleLeftEllipsis />
    },
    {
        title: 'Email',
        url: 'mailto:pastorronald@betesda.org',
        icon: <HiEnvelope />
    },
    {
        title: 'Direccion',
        url: 'https://www.google.com/maps/place/888+W+Santa+Ana+Blvd,+Santa+Ana,+CA+92701/@33.7476392,-117.8769115,18z/data=!4m21!1m15!4m14!1m6!1m2!1s0x80dcd90076155555:0xd6698775351189ac!2sVA+Community+Resource+and+ReferralCenter.,+888+W+Santa+Ana+Blvd+Suite+150,+Santa+Ana,+CA+92701!2m2!1d-117.8761048!2d33.747638!1m6!1m2!1s0x80dcd900764c93d1:0xd2327330903b5898!2s888+W+Santa+Ana+Blvd,+Santa+Ana,+CA+92701,+USA!2m2!1d-117.8761048!2d33.747638!3m4!1s0x80dcd900764c93d1:0xd2327330903b5898!8m2!3d33.7476379!4d-117.8761047',
        icon: <HiMapPin />
    },
]
