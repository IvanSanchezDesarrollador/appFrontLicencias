import { Link } from 'react-router-dom';
import logoMajo from '../img/opendataAnalitics2023.png'
import { TextInput } from "@tremor/react";
import { FaPhoneAlt, FaEnvelope, FaSearchLocation, FaFacebookSquare, FaInstagram, FaWhatsapp, FaTwitter } from 'react-icons/fa';
import { Button } from "@tremor/react";
import Loading from './Loading';
import { BsGeoAltFill } from "react-icons/bs";

const Footer = () => {
    return (
        <div className='w-full h-auto bg-gray-200 text-gray-600'>
            <div className='container m-auto py-10 '>
                <div className="grid md:grid-cols-3 md:4 gap-8 px-5">
                    <div>
                        <div className='md:static flex justify-start'>
                        <img src={logoMajo} alt="" className='w-56' />  
                        </div>
                        <div className='block py-6 xl:px-6'>
                            <div className='flex items-center py-3'>

                                <FaPhoneAlt className='text-red-400'></FaPhoneAlt>
                                <p className='mx-6'>941949198</p>
                            </div>
                            <div className='flex items-center py-3'>

                                <FaEnvelope className='text-red-400'></FaEnvelope>
                                <p className='mx-6'>openData_Analitics2023@gmail.com</p>
                            </div>
                            <div className='flex items-center py-3'>

                                <BsGeoAltFill className='text-red-400'></BsGeoAltFill>
                                <p className='mx-6 '>Av. Miguel de Cervantes Saavedra 326 - Cajamarca</p>
                            </div>
                        </div>

                    </div>
                    <div>
                        <h1>ENLACES</h1>
                        <div className='text-[0.85rem] px-2 py-3'>
                            <Link to={"/"} className='block hover:text-red-400 py-2'>
                                Inicio
                            </Link>
                            <Link to={"/incio/Cards"} className='block hover:text-red-400 py-2'>
                                Datos Abiertos
                            </Link>
                            
                            <Link to={'/acerca'} className='block hover:text-red-400 py-2'>Acerca de</Link>    
                            <Link to={'/'} className='block hover:text-red-400 py-2'>Contacto</Link>
                        </div>
                    </div>
                    <div>
                        <h1>REDES SOCIALES</h1>
                        <div className='flex my-6 text-3xl justify-around'>
                            <Link to={'https://www.facebook.com/profile.php?id=100094422626426'} target='_blank'> <FaFacebookSquare className='hover:text-red-400'></FaFacebookSquare></Link>
                            <Link><FaInstagram className='hover:text-red-400'></FaInstagram></Link>
                            <Link><FaWhatsapp className='hover:text-red-400'></FaWhatsapp></Link>
                            <Link><FaTwitter className='hover:text-red-400'></FaTwitter></Link>
                        </div>
                    </div>
                </div>

            </div>
            <div className='bg-gray-200 text-center text-sm h-10 block items-center justify-center'>
                <p>OPEN DATA Analicts © Todos los Derechos Reservados</p>
            </div>
            
        </div>
        
    );
}

export default Footer;
