import { useEffect, useState } from 'react'
import DrawConnect from '../assets/DrawConnect.png'
// import DrawFail from '../assets/DrawFail.png'
import {checkSystemStatus} from '../services/auth.service'
// import {checkSystemStatus} from '../services/tempService'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';

export default function offline(){
    const [status, setStatus] = useState('connecting') // 'connecting' | 'online' | 'offline'
    const Navigate = useNavigate();
    const [pageState, setState] = useState(0) //0 connecting | 1 offline

    const pageModes = [
        {
            img: DrawConnect,
            desc: "DrawConnect"
        },
        {
            img: DrawConnect,
            desc: "DrawFail"
        }
    ]

    useEffect(() =>{
        const verify = async() =>{
            try{
                const sysState = await checkSystemStatus();
                setStatus('online');
                Navigate('/Online')
            }catch(error)
            {
                setStatus('offline')
                setState(1)
            }
        };
        verify();
    })

    return (
        <>
            <div className="justify-content-center align-items-center vh-100">
                <div className="text-center p-3">
                    
                    <img 
                    src={pageModes[pageState].img} 
                    alt={pageModes[pageState].desc} 
                    className="img-fluid rounded" 
                    style={{ maxWidth: '1000px' }} // Limita el tamaño máximo para que no se vea gigante en PC
                    />
                    
                </div>
                <div className='text-center p-3' style={{display:status=='offline' ? 'block' : 'none',color:'white'}}>
                    <h4>Apologies! The form is currently closed by two possible reasons:</h4>
                    <ul style={{listStyleType:'none'}}>
                        <li>The form is closed at the moment</li>
                        <li>Han error has occurred with the connection</li>
                    </ul>
                    <p>Since you are here, do you desire to distract a little? <Link><span title='Currently in development'>Play my game!🐺</span></Link></p>
                </div>
            </div>
        </>
    )
}