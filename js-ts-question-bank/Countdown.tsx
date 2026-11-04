import { useEffect, useState } from 'react';

/**
 * 倒计时组件
 * @param seconds 从多少秒开始倒计时
 * @returns 倒计时组件
 */
export default function Countdown({ seconds }: { seconds: number }) {
    const [time , setTime] = useState(seconds)
    
    useEffect(() => {
        if (time <= 0) return 
        const timer = setInterval(() => {
            setTime((prev) => prev - 1)
        }, 1000)
        return () => clearInterval(timer)
    }, [time])

    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const secs = time % 60;

    return (
        <div>
            {hours}:{minutes}:{secs}
        </div>
    )
}