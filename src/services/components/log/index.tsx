import { FunctionComponent, useState } from 'react';
import LogDaySummary from '../../types/LogDaySummary';
import StatusView from './Status';

interface ServiceLogProps {
    item: LogDaySummary
}

const ServiceLog: FunctionComponent<ServiceLogProps> = ({ item }) => {
    const [show, setShow] = useState(false);

    const statusView = (status: string) => {
        switch (status) {
            case 'unknown':
                return <div onMouseOver={() => setShow(true)} onMouseLeave={() => setShow(false)} className='bg-gray-300 ml-0.5 sm:rounded-lg flex-1 h-8' >
                    <StatusView item={item} show={show} />
                </div>;
            case 'down':
                return <div onMouseOver={() => setShow(true)} onMouseLeave={() => setShow(false)} className='bg-red-300 ml-0.5 sm:rounded-lg flex-1 h-8' >
                    <StatusView item={item} show={show} />
                </div>;
            default:
                return <div onMouseOver={() => setShow(true)} onMouseLeave={() => setShow(false)} className='bg-green-500 ml-0.5 sm:rounded-lg flex-1 h-8' >
                    <StatusView item={item} show={show} />
                </div>;
        }
    }
    return (
        <>
            {
                statusView(item.status)
            }
        </ >
    )
}

export default ServiceLog;