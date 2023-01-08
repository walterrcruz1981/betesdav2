import mediaImage from '../../public/images/ministerios/media.webp'

export const ministerios = [

    {
        title: 'Media',
        image: mediaImage,
        slug: 'betesda-media',
        video: 'mediaVideo.mp4',
        mision: {
            title: 'Misión',
            description: 'Llevar la Palabra de Dios a través de la excelenncia Técnica y Tecnológica hasta los confines de la tierra por medios informátivos divulgando y Mostrando al mundo que hay una Iglesia que los espera con los brazos abiertos y que hay una familia en Cristo Jesús que los Espera.',
        },
        vision: {
            title: 'Visión',
            description: 'Proyectar la Visión de nuestros pastores de la Iglesia Ministerios Betesda.  A través de todos los medios de comunicación existentes, Tambien ser generador de ideas, estrategias y proveedor de herramientas tecnológicas que ayuden a otros ministerios a desarrollarse de manera más profesional y eficiente.',
        },
        intro: 'Te invitamos a ser parte de nuestro Equipo de Servidores, solo te decimos que no tienes que tener conocimiento en Multimedia solo las ganas de servirle a nuestro Señor Jesucristo y te capacitarenos en todas las Áreas que tenemos para Servir. Te damos la Bienvenida.',
        duties: [
            {
                title: 'Transmisiones en vivo',
                image: 'fotos/media/mediaTeam2.jpg'
            },
            {
                title: 'Edición de videos',
                image: 'fotos/media/vanessa.jpg'
            },
            {
                title: 'Proyecciones Audiovisuales',
                image: 'fotos/media/mediaTeam.jpg'
            },
            {
                title: 'Actualizar las Redes Sociales de nuestra Iglesia',
                image: 'fotos/media/donMario.jpg'
            },
            {
                title: 'Y mucho mas...',
                image: 'fotos/media/potro.jpg',
            }
        ],
        contacto: {
            lider: {
                nombre: 'Oscar Alvarado',
                tel: '3234261576',
                email: ['media@betesda.org', 'oscar.alvarado@betesda.org']
            },
            subLider: {
                nombre: 'Victor Fernandez',
                tel: '3103464249'
            }
        }
    }
]