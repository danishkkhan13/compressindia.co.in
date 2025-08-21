import React, { useState } from 'react';

const FaqOne = () => {
    const [isActive, setIsActive] = useState({
        status: false,
        key: null,
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({ status: false, key: null });
        } else {
            setIsActive({ status: true, key });
        }
    };

    return (
        <section className="faq-two pd-120-0-120">
            <div
                className="faq-two__bg"
                style={{ backgroundImage: 'url(assets/images/backgrounds/faq-two-bg.png)' }}
            ></div>
            <div className="container">
                <div className="section-title text-center">
                    <span className="section-title__tagline">Have Question?</span>
                    <h2 className="section-title__title">Frequently Asked Question</h2>
                </div>

                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="faq-one__right">
                            <div className="accrodion-grp faq-one-accrodion faq-one-accrodion-1" data-grp-name="faq-one-accrodion-1">

                                {/* FAQ 1 */}
                                <div className={isActive.key === 1 ? 'accrodion active' : 'accrodion'} onClick={() => handleToggle(1)}>
                                    <div className="accrodion-title">
                                        <h4>Why there is water leakage in my AC ? Reason of water leakage in AC ?</h4>
                                    </div>
                                    <div className="accrodion-content" style={{ display: isActive.key === 1 ? 'block' : 'none' }}>
                                        <p>
                                            Reason: If your air conditioner is leaking water inside the home , It is usually working dusty , May be your ac drain line is chocked with dirt & mud.
                                            Due to this water is trapped in the indoor unit drain line tray.
                                            Resolution: Just Remove the water condensation drain line & clean it by air blower or high pressure water.
                                            If drain line is already cleaned then check your ac drain line tray. Because dusty / dirty tray reduces water flow or may it stop.
                                            So just remove the drain line tray & clean it with brush.
                                        </p>
                                    </div>
                                </div>

                                {/* FAQ 2 */}
                                <div className={isActive.key === 2 ? 'accrodion active' : 'accrodion'} onClick={() => handleToggle(2)}>
                                    <div className="accrodion-title">
                                        <h4>Why is my AC air flow slow? Why is my AC blowing air slowly? Why is my AC working slowly?</h4>
                                    </div>
                                    <div className="accrodion-content" style={{ display: isActive.key === 2 ? 'block' : 'none' }}>
                                        <p>
                                            Reason: Dirty / Dusty Evaporator (Cooling coil) causes insufficient air flow which is placed inside the indoor unit of an air conditioner.<br />
                                        </p>
                                        <br />
                                        Steps to solve this issue:
                                        <ol style={{ listStyle: 'decimal', paddingLeft: '20px' }}>
                                            <li>Check the air filter inside the air conditioner indoor unit. If it is dirty, clean it using a brush or wash it with high-pressure water.</li>
                                            <li>If the air filter is not very dirty, check the evaporator (cooling coil). Clean it using a brush or high-pressure water.</li>
                                            <li>Check the fan motor speed using the remote. If slow, replace the capacitor.</li>
                                            <li>Finally , If all above shown parameter is perfect then check the speed of indoor unit motor by using remote handset weather it is working on multiple speed or not. If motor is not working on multiple speed then remove the PCB Board which is placed inside the indoor unit. Repair or replace it by another one.</li>
                                        </ol>

                                    </div>
                                </div>

                                {/* FAQ 3 */}
                                <div className={isActive.key === 3 ? 'accrodion active' : 'accrodion'} onClick={() => handleToggle(3)}>
                                    <div className="accrodion-title">
                                        <h4>Why my ac is not cooling? How my ac can cool fast? Ac is running but not cooling?</h4>
                                    </div>
                                    <div className="accrodion-content" style={{ display: isActive.key === 3 ? 'block' : 'none' }}>
                                        <p>
                                            There are few steps to solve this issue are as follows<br />
                                        </p>
                                        <br />
                                        Steps to solve this issue:
                                        <ol style={{ listStyle: 'decimal', paddingLeft: '20px' }}>
                                            <li>First of all , Check your remote handset on which mode your ac is running. If it is running on fan or heat mode then change the mode by selecting cool mode to start outdoor unit of an air conditioner. Symbol of cool mode on remote handset would be displayed as ""(*)ice or star.</li>
                                            <li>Check the outdoor unit of air conditioner. If it is working ( Fan is not working or copper pipes are not chilled ) Then there is the maintenance problem in your ac. May ac refrigerant gas is leaked or any electrical part in outdoor unit is not working, Because air conditioners are electrical hazardous machines , So we recommend you to please contact an ac technician or ac company to solve the issue properly without having any unwanted damages or accidents.</li>

                                        </ol>
                                    </div>
                                </div>

                                {/* FAQ 4 */}
                                <div className={isActive.key === 4 ? 'accrodion active' : 'accrodion'} onClick={() => handleToggle(4)}>
                                    <div className="accrodion-title">
                                        <h4>How can I reduce my ac expense? Do I need a service contract for my ac ?</h4>
                                    </div>
                                    <div className="accrodion-content" style={{ display: isActive.key === 4 ? 'block' : 'none' }}>
                                        <p>Definitely Yes , If you want to reduce your maintenance cost & prevent the failure of your air conditioner then you need a ac service contract. Every air conditioning system needs quarterly service, If you get a an ac service contract then no need to remember your next upcoming service date. This would be handled by AC Company who is providing services to you. Onetime service reduces the failure / breakdown in your air conditioners So this would automatically save your maintaining cost for your ac. Also the additional benefit is if any parts fails during the service contract period , You will get the minimum cost of repairing for that because you are a existing Inhouse customer for the company, So the complaints would be handled within 48hrs maximum.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6 col-lg-6">
                        <div className="faq-one__right">
                            <div className="accrodion-grp faq-one-accrodion faq-one-accrodion-2" data-grp-name="faq-one-accrodion-2">

                                {/* FAQ 5 */}
                                <div className={isActive.key === 5 ? 'accrodion active' : 'accrodion'} onClick={() => handleToggle(5)}>
                                    <div className="accrodion-title">
                                        <h4>What is the best set temperature for ac to  save money? How can I reduce my ac running cost?</h4>
                                    </div>
                                    <div className="accrodion-content" style={{ display: isActive.key === 5 ? 'block' : 'none' }}>
                                        <p>24 degree Celsius. From the HVAC manufacturing companies this is most commonly recommended set point in air conditioners for pocket friendly electricity bills. This recommendation applicable in all region of India only.</p>
                                    </div>
                                </div>
                                {/* FAQ 6 */}
                                <div className={isActive.key === 6 ? 'accrodion active' : 'accrodion'} onClick={() => handleToggle(6)}>
                                    <div className="accrodion-title">
                                        <h4>How can I reduce my ac electricity bill?</h4>
                                    </div>
                                    <div className="accrodion-content" style={{ display: isActive.key === 6 ? 'block' : 'none' }}>
                                        <p>5 effective ways to reduce your ac electricity bills.</p>
                                        <br />
                                        Steps to solve this issue:
                                        <ol style={{ listStyle: 'decimal', paddingLeft: '20px' }}>
                                            <li>One time service of your air conditioner. This reduces chances of failure / breakdown or overheating of electrical components in your ac. So if you do not use ac regularly, It should be serviced & cleaned before use in order for it to work effectively.</li>
                                            <li>Go to Timer and Set running time in your ac remote handset to avoid over use of air conditioner.</li>
                                            <li>Keep all doors and windows closed while using ac.</li>
                                            <li>Set your air conditioner on 24 degree Celsius so it avoids overcooling and reduces your ac's runtime, It will cool your room as per standard temperature suggested from HVAC Manufacturing companies.</li>
                                            <li>While selecting new air conditioners , Go for inverter ac's with higher star rating. Now days Inverter ac's are electrically advanced these will definitely reduce your electricity bills.</li>

                                        </ol>
                                    </div>
                                </div>

                                {/* FAQ 7 */}
                                <div className={isActive.key === 7 ? 'accrodion active' : 'accrodion'} onClick={() => handleToggle(7)}>
                                    <div className="accrodion-title">
                                        <h4>How long does an air conditioner work? What is the life span for room ac? How long an air conditioner can be used?</h4>
                                    </div>
                                    <div className="accrodion-content" style={{ display: isActive.key === 7 ? 'block' : 'none' }}>
                                        <p>Centralized air conditioners are designed for heavy duty applications, Hence that can be used for 10 to 15 years depending on their usage. Room air conditioners are smaller units and designed for 8 hours daily runtime only, that can be work for 3 to 6 years depending on their usage and environmental conditions.</p>
                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqOne;
