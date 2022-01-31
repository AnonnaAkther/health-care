import React from 'react';
import pic1 from '../../images/picture/healthy-living.jpg.webp'
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div>
            <h2>About Us</h2>
            <div className="about mt-5 mb-5 text-success">
                <h2>10 Reasons It's So Important to Stay Healthy</h2>
                <img src={pic1} alt="" />
            </div>
           <div className="health mb-5">
           <div>
                <h2>Staying healthy has never been so important as the need to remain in good health can have a positive effect on almost every aspect of our lives. Staying fit can be done in a variety of ways, including eating lean and healthy meats along with plenty of fruits and vegetables. Spending a little time each day exercising can help us all to become healthy and avoid the modern blight of obesity.</h2>
                <ul>
                    <li>
                        <h1>Helps You Live Longer</h1>
                        <p>This is one of the most obvious benefits of living a healthy lifestyle and is one of the main reasons why most people look to exercise and eat a healthy diet. For those determined to get the most out of their body in terms of longevity, there is a whole host of evidence that links staying healthy with longer life. One study went so far as to estimate the link between only drinking alcohol in moderation, not smoking, exercising regularly, and eating a healthy diet can extend your life by up to 14 years.</p>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>
                        <h1>Feel Better About Yourself</h1>
                        <p>One of the main reasons why staying healthy can be of assistance to your life as you grow older. One of the main benefits is that living a healthy lifestyle can make you feel more confident than ever before. Exercising can release hormones to your brain that enhance your mood and provide you with a sense of euphoria.</p>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>
                        <h1>Life Insurance is Cheaper</h1>
                        <p>One of the primary considerations you will have when you grow older is the need to purchase life insurance to protect your family in the event of your death. You may be you like term life insurance vs whole life insurance policies, but whichever you choose, you will face lower premiums when you live a healthy lifestyle.</p>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>
                        <h1>Control Your Stress</h1>
                        <p>No matter what kind of addiction you are affected by a healthy lifestyle filled with exercise can limit your desire for the addictive substance. Whether your vice of choice is food, drugs, or alcohol, you will find a runner's high just as addictive.</p>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>
                        <h1>Avoid Addictions</h1>
                        <p>No matter what kind of addiction you are affected by a healthy lifestyle filled with exercise can limit your desire for the addictive substance. Whether your vice of choice is food, drugs, or alcohol, you will find a runner's high just as addictive.</p>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>
                        <h1>Protect your Sight</h1>
                        <p>This may not be a well-known aspect of living a healthy lifestyle, but your eyesight can be protected by a healthy diet and a proper diet. Better vision as we age can be obtained with regular cardiovascular exercise.</p>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>
                        <h1>Lower Medical Costs</h1>
                        <p>This may seem like a no-brainer, but by staying healthy, your medical bills will be significantly lower. Lower medical costs will often lead to fewer debts and a higher credit score.</p>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>
                        <h1>Increase your Fertility</h1>
                        <p>If you are looking for a fertile future with lots of children, the gym is the place to go. Studies conducted by Harvard University researchers showed a higher sperm level among males who exercised regularly.</p>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>
                        <h1>Consider your Self-Esteem</h1>
                        <p>When you exercise regularly, you will usually find you look and feel better, leading to a rise in your confidence. Higher self-esteem can lead to a more satisfying life.</p>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>
                        <h1>Become a Good Example</h1>
                        <p>Exercising regularly and living a healthy lifestyle will rub off on those around you. When your children and grandchildren see you exercising and eating healthily, they will be more likely to follow your example.</p>
                    </li>
                </ul>
            </div>
           </div>
        </div>
    );
};

export default AboutUs;