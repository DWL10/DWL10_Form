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

        <div className="d-flex flex-column justify-content-center align-items-center min-vh-100 w-100 px-3">
            
            <div className="text-center p-3" style={{ maxWidth: '1000px', width: '100%' }}>
                <img 
                    src={pageModes[pageState].img} 
                    alt={pageModes[pageState].desc} 
                    className="img-fluid rounded w-100 h-auto" 
                />
            </div>
            
            <div className='text-center p-3' style={{ display: status === 'offline' ? 'block' : 'none', color: 'white' }}>
                <h4>Apologies! The form is currently closed for two possible reasons:</h4>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li>The form is closed at the moment</li>
                    <li>An error has occurred with the connection</li>
                </ul>
                <p>
                    Since you are here, do you desire to distract yourself a little?{' '}
                    <Link><span title='Currently in development'>Play my game!🐺</span></Link>
                </p>
            </div>

        </div>
    </>
)
}