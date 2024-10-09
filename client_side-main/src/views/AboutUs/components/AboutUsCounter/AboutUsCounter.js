import { useEffect } from 'react';
import './AboutUsCounter.css'

const AboutUsCounter = () => {

    const updateCounter = (element, interval, target) => {
        element.innerText = "0";
        let i = 0;
        if (+element.innerText === target) {
            return;
        } else if (element.innerText !== "0") {
            i = +element.innerText;
        }
        const counter = setInterval(() => {
            i = i + 2;
            element.innerText = i;

            if (i >= target) { // Changed comparison to avoid overshooting
                clearInterval(counter);
                element.innerText = target; // Ensure the count ends at the target value
            }
        }, interval);
    };

    const updateFacebookCounter = (element, interval, target) => {
        element.innerText = "0";
        let i = 0;
        if (+element.innerText === target) {
            return;
        } else if (element.innerText !== "0") {
            i = +element.innerText;
        }
        const counter = setInterval(() => {
            i = i + 10;
            element.innerText = i;

            if (i >= target) {
                clearInterval(counter);
                element.innerText = target;
            }
        }, interval);
    };

    useEffect(() => {
        updateCounter(document.getElementById('count1'), 10, 800);  // YouTube
        updateCounter(document.getElementById('count2'), 10, 827);  // Instagram
        updateFacebookCounter(document.getElementById('count3'), 5, 5500);  // Facebook
        updateCounter(document.getElementById('count4'), 5, 1690);  // LinkedIn
        updateCounter(document.getElementById('count9'), 300, 22);  // X
        updateCounter(document.getElementById('count6'), 50, 128);  // Threads
        updateCounter(document.getElementById('count7'), 20, 392);  // Telegram
        updateCounter(document.getElementById('count8'), 5, 1548); // WhatsApp
    });

    return (
        <div className="counters m-8 gap-8 max-w-7xl mx-auto md:my-32">

            <div>
                <h3 className='font-semibold'>YouTube Subscribers</h3>
                <p className='font-semibold' id="count1"></p>
            </div>
            <div>
                <h3 className='font-semibold'>Instagram Followers</h3>
                <p className='font-semibold' id="count2"></p>
            </div>
            <div>
                <h3 className='font-semibold'>Facebook Followers</h3>
                <p className='font-semibold' id="count3"></p>
            </div>
            <div>
                <h3 className='font-semibold'>LinkedIn Followers</h3>
                <p className='font-semibold' id="count4"></p>
            </div>
            <div>
                <h3 className='font-semibold'>X Followers</h3>
                <p className='font-semibold' id="count9"></p>
            </div>
            <div>
                <h3 className='font-semibold'>Threads Followers</h3>
                <p className='font-semibold' id="count6"></p>
            </div>
            <div>
                <h3>Telegram Followers</h3>
                <p className='font-semibold' id="count7"></p>
            </div>
            <div>
                <h3 className='font-semibold'>WhatsApp Followers</h3>
                <p className='font-semibold' id="count8"></p>
            </div>

        </div>
    );
}

export default AboutUsCounter;
