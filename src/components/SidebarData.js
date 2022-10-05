import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

//OPCIONES DEL MENU DESPLEGABLE
export const SidebarData = [
  {
    title: 'Introduccion',
    path: '/inicio',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

   
  },

  {
    title: 'Objetivo General',
    path: '/consulta',
    icon: <FaIcons.FaSearch />
  },

  {
    title: 'Presentacion Idea',
    path: '/rutas',
    icon: <IoIcons.IoMdBus />, 
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'HIstoria',
        path: '/rutas/ruta1',
        icon: <IoIcons.IoMdBus />,
        cName: 'sub-nav'
      },
      {
        title: 'Video',
        path: '/rutas/ruta2',
        icon: <IoIcons.IoMdBus />,
        cName: 'sub-nav'
      },
      {
        title: 'Fotos',
        path: '/rutas/ruta3',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Coclusiones',
    path: '/conclusion',
    icon: <FaIcons.FaSearch />
  },
  {
    title: 'Contacto',
    path: '/contacto',
    icon: <FaIcons.FaSearch />
  },
  {
    title: 'Prregunta',
    path: '/pregunta',
    icon: <FaIcons.FaSearch />
  },
  
  
];
