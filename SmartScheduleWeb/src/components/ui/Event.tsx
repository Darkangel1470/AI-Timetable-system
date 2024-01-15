import moment from 'moment';
import React, { useEffect, useState } from 'react'


function Event({ detail }) {
    const [ready, setReady] = useState(false);
    const [topMargin, setTopMargin] = useState(0);
    const [eventHeight, setEventHeight] = useState(80);

    useEffect(() => {

        //get top Margin
        const d = moment(detail.startTime);
        d.hour(d.hour()-6)
        const hm = 80 * d.hour();
        const mm = (80 / 60) * d.minutes();
        
        setTopMargin(hm + mm);

        //get height
        const st = moment(detail.startTime);
        const et = moment(detail.endTime);

        const duration = et.diff(st);
        const durationMinutes = duration / 1000 / 60;
        const height = (80 / 60) * durationMinutes;

        setEventHeight(height);
        setReady(true);
                
    }, []);

    return (
        <>
            {ready && (
                <div
                    style={{
                        marginTop: topMargin + 'px',
                        height: eventHeight + 'px',

                    }}
                    className={`flex flex-col px-2  w-full z-0 absolute rounded-lg  border-black border-2 bg-red-200`}
                >
                    {/* Subject name */}
                    <p className="text-md font-bold text-black">
                        {detail.subject}
                    </p>
                    {/* Subject teacher */}
                    <p className="text-black sm">{detail.teacher}</p>
                    {/* Subject classroom */}
                    <p className="text-black text-sm">508</p>
                </div>
            )}
        </>
    );
}

export default Event