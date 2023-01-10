import { HiOutlineChatBubbleLeftEllipsis, HiPhoneArrowUpRight, HiEnvelope } from 'react-icons/hi2'


import elSalvadorFlag from '../../public/images/flags/elSalvadorFlag.png'
import usaFlag from '../../public/images/flags/usaFlag.png'
import mexicoFlag from '../../public/images/flags/mexicoFlag.png'
import pastorSalinaCruz from '../../public/images/pastores/pastorjoel-salinas-cruz.webp'
import pastorTehuantepec from '../../public/images/pastores/pastorJuanCarlos.webp'
import pastorApopa from '../../public/images/pastores/pastorApopa.webp'
import pastorRonald from '../../public/images/pastores/pastorRonald.webp'

export const iglesiasInfo = [
    {
        id: 0,
        slug: 'betesda-central',
        country: 'USA',
        pastorImage: pastorRonald,
        flag: usaFlag,
        nombrePastor: 'Ronald Vides',
        nombreDeMision: 'Ministerios Betesda',
        direccion: '888 W Santa Ana Blvd, Santa Ana, CA 92701',
        servicios: 'Domingo 11am, Jueves 7pm',
        cellPhone: '17148783335',
        email: 'pastorronald@betesda.org',
        whatsupUrl: '17148783335',
        whatsup: '1-714-878-3335',
        vision: 'Ser una iglesia que trabaje en unidad y en comunión, como familia, para el engrandecimiento del reino de Cristo en esta tierra, comprometidos con la gran comisión, buscando alcanzar a todas las familia.',
        mision: 'Alcanzar a las personas a través de la palabra de Dios, por medio de la evangelización para la transformación de las vidas, mejorando a la Familia, la sociedad y preparándolas para la vida eterna.',
        nuestraIglesia: 'Somos Mike y Lupita Mendoza, una pareja llamada y apasionada por la obra de Dios, que amamos el servir y nos regocijamos en ver las vidas transformadas. Ambos tenemos una visión clara del Reino de Dios. Estamos convencidos que Dios nos ha levantado para ser su instrumento y fuente de Bendición para nuestro país y el mundo, es nuestro deseo que Dios ponga en tu corazón ser parte de esta comunidad, visión y que Ministerio Bethesda se convierta en la casa espiritual para ti y tu familia. Recibe un abrazo y abundantes bendiciones de nuestra parte y esperamos te sientas bienvenido a nuestra iglesia.',
        links: [
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
            }
        ]
    },
    {
        id: 1,
        slug: 'el-salvador-apopa',
        country: 'El Salvador',
        pastorImage: pastorApopa,
        flag: elSalvadorFlag,
        nombrePastor: 'Mike Mendoza',
        nombreDeMision: 'Betesda El Salvador',
        direccion: '3av sur / 9a y 11a calle ote. # 40 -A, Santa Ana, El Salvador',
        servicios: 'Jueves 6:00 - 7:30 PM. y Domingo 10:00 am. - 12:00 md.',
        cellPhone: '+503 75107284, +503 79109235',
        email: 'mike@betesda.org',
        whatsupUrl: '50360134015',
        whatsup: '+503 6013 4015',
        vision: 'Ser una iglesia que trabaje en unidad y en comunión, como familia, para el engrandecimiento del reino de Cristo en esta tierra, comprometidos con la gran comisión, buscando alcanzar a todas las familia.',
        mision: 'Alcanzar a las personas a través de la palabra de Dios, por medio de la evangelización para la transformación de las vidas, mejorando a la Familia, la sociedad y preparándolas para la vida eterna.',
        nuestraIglesia: 'Somos Mike y Lupita Mendoza, una pareja llamada y apasionada por la obra de Dios, que amamos el servir y nos regocijamos en ver las vidas transformadas. Ambos tenemos una visión clara del Reino de Dios. Estamos convencidos que Dios nos ha levantado para ser su instrumento y fuente de Bendición para nuestro país y el mundo, es nuestro deseo que Dios ponga en tu corazón ser parte de esta comunidad, visión y que Ministerio Bethesda se convierta en la casa espiritual para ti y tu familia. Recibe un abrazo y abundantes bendiciones de nuestra parte y esperamos te sientas bienvenido a nuestra iglesia.',
        links: [
            {
                title: 'llamar',
                url: 'tel:50375107284',
                icon: <HiPhoneArrowUpRight />
            },
            {
                title: 'Texto',
                url: 'sms:50375107284',
                icon: <HiOutlineChatBubbleLeftEllipsis />
            },
            {
                title: 'Email',
                url: 'mailto:mike@betesda.org',
                icon: <HiEnvelope />
            }
        ]
    },
    {
        id: 2,
        slug: 'salina-cruz-mexico',
        country: 'Mexico',
        pastorImage: pastorSalinaCruz,
        flag: mexicoFlag,
        nombrePastor: 'Pastor Joel',
        nombreDeMision: 'Betesda Salina, Cruz',
        direccion: 'Calle Simón Bolivar S/N. Col. San Pablo Norte Salina Cruz, Oaxaca',
        servicios: 'Miércoles 4:00pm, Viernes 4:00pm  y Domingo 11:00 am.',
        cellPhone: '+52 971 145 4353, +52 971 207 7416',
        email: 'pastorjoelrc@gmail.com',
        whatsupUrl: '529711454353',
        whatsup: '971 145 4353',
        vision: 'Ser una iglesia que trabaje en unidad y en comunión, como familia, para el engrandecimiento del reino de Cristo en esta tierra, comprometidos con la gran comisión, buscando alcanzar a todas las familia.',
        mision: 'Alcanzar a las personas a través de la palabra de Dios, por medio de la evangelización para la transformación de las vidas, mejorando a la Familia, la sociedad y preparándolas para la vida eterna.',
        nuestraIglesia: 'Somos Mike y Lupita Mendoza, una pareja llamada y apasionada por la obra de Dios, que amamos el servir y nos regocijamos en ver las vidas transformadas. Ambos tenemos una visión clara del Reino de Dios. Estamos convencidos que Dios nos ha levantado para ser su instrumento y fuente de Bendición para nuestro país y el mundo, es nuestro deseo que Dios ponga en tu corazón ser parte de esta comunidad, visión y que Ministerio Bethesda se convierta en la casa espiritual para ti y tu familia. Recibe un abrazo y abundantes bendiciones de nuestra parte y esperamos te sientas bienvenido a nuestra iglesia.',
        links: [
            {
                title: 'llamar',
                url: 'tel:529711454353',
                icon: <HiPhoneArrowUpRight />
            },
            {
                title: 'Texto',
                url: 'sms:529711454353',
                icon: <HiOutlineChatBubbleLeftEllipsis />
            },
            {
                title: 'Email',
                url: 'mailto:pastorjoelrc@gmail.com',
                icon: <HiEnvelope />
            }
        ]
    },
    {
        id: 3,
        slug: 'betesda-tehuantepec',
        country: 'Mexico',
        pastorImage: pastorTehuantepec,
        flag: mexicoFlag,
        nombrePastor: 'Juan Carlos Trejo Osorio',
        nombreDeMision: 'Betesda Tejuantepec, Oaxaca',
        direccion: ' Juan Ruiz s/n, Barrio Santa Cruz Tagolaba, Tehuantepec, Oaxaca, México',
        servicios: ' Jueves 6:00, Sábados 5:00 pm y Domingos 11:00 a.m',
        cellPhone: '9711233689',
        email: 'trejoosorio@hotmail.com',
        whatsupUrl: '529711233689',
        whatsup: '9711233689',
        vision: 'Ser una congregación que promueve las Nuevas de Salvación, siendo un lugar especial donde todas las personas sientan que se le ama, se le acepta y se proporciona auxilio y apoyo proponiendo en ellos la preciosa esperanza que tenemos en Jesucristo el hijo de Dios y donde además se les proporciona y enseña las herramientas espirituales para lograr el propósito por el cual han llegado al mundo mediante la perseverancia en la palabra y el trabajo continuo de enseñar y practicar todo lo que Dios nos ha otorgado',
        mision: 'Nuestra iglesia, Ministerios Betesda Tehuantepec, existe por gracia de Dios para adorar a nuestro buen Dios y llamar a otros a la Adoración, incorporándolos a la familia de Dios y guiándolos hacia una madurez espiritual donde predomine el amor y el servicio a fin de agradar al Dios soberano, en un ministerio de éxito que redundará en la bendición de tener las grandes promesas de Dios en la vida.',
        nuestraIglesia: 'Hola, Dios te bendiga, tus servidores Juan Carlos Trejo Osorio y mi esposa Julieta Marcial Avendaño, originarios de Tehuantepec, Oaxaca, México, te damos una cordial Bienvenida a nuestro sitio web, esperamos poder ayudarte compartiéndote las Buenas Nuevas de Salvación. Desde hace varios años trabajamos en el Istmo de Tehuantepec, llevando el mensaje precioso del Señor Jesucristo para que todas las personas puedan conocer a Dios y tener amplia entrada al Reino de los Cielos. Creemos que Dios puede hacer maravillas en tu vida y en tu familia, por lo que como iglesia nos ponemos a tu disposición para ayudarte espiritualmente y esperamos que, como nosotros, tú también recibas las Bendiciones de Dios y sus promesas se cumplan en tu vida. Bienvenido.',
        links: [
            {
                title: 'llamar',
                url: 'tel:529711233689',
                icon: <HiPhoneArrowUpRight />
            },
            {
                title: 'Texto',
                url: 'sms:529711233689',
                icon: <HiOutlineChatBubbleLeftEllipsis />
            },
            {
                title: 'Email',
                url: 'mailto:trejoosorio@hotmail.com',
                icon: <HiEnvelope />
            }
        ]
    }
]