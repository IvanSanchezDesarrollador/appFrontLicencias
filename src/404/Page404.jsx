import React from 'react';
import img404 from '../img/error404.png'
import {
    Badge,
    TextInput,
    Title,
    Text,
    Button
} from '@tremor/react';
import { Link } from 'react-router-dom';
const Page404 = () => {
    return (
        <div className=' h-screen w-full '>
            <div className='flex w-[70%] m-auto  justify-center items-center h-full gap-10'>
                <div className='w-1/2|'>
                    <img src={img404} alt="" className='w-96' />
                </div>
                <div className='w-1/2'>
                    <Title className=''>Error</Title>
                    <Title className='text-[8rem] py-9 mb-5'>404</Title>
                    <Text className=''>Lo sentimos no hemos encontrado la pagina de buscas.</Text>
                    <Text className=''>Puede ir a la pagina anterior o visitar nuestra página de inicio.</Text>
                    <Link to="/" className=''>
                    <Button size='xl' className='mt-3 rounded-md' color='cyan'>Ir a Inicio</Button>
                    </Link>

                </div>
            </div>

        </div>
    );
}

export default Page404;
