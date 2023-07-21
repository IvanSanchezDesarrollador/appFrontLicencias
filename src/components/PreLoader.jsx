import  { useEffect } from 'react';
import logoOpen from '../img/logoGeneral.png'
import { preLoaderAnim } from '../animations';
import './preloader.css'

const PreLoader = () => {
    useEffect(() => {
        preLoaderAnim();
    },[]);
    return (
        <div className='preloader'>
            <div className='texts-container'>
                <span className='text-[0.9rem] xl:text-[1rem]'>Bienvenidos</span>
                <span className='text-[0.9rem] xl:text-[1rem]'>a</span>
                <span className='text-[0.9rem] xl:text-[1rem]'>OPENDATA - Analytics</span>
                <span><img src={logoOpen} alt=""  className='w-5'/></span>
            </div>
        </div>
    );
}

export default PreLoader;
