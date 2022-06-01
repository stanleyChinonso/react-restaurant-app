import React from 'react'
import gomez from '../Images/gomez-figueroa.jpg'
import kampus from '../Images/kampus.jpg'
import andrea from '../Images/andrea.jpg'
import cotton  from '../Images/cottonbro.jpg'


const About3 = () => {
    return (
        <div className='about3'>
            <div className='about3-heading'>
                <div className='about3-h'><span>&mdash;&mdash;</span><h4>Team Members</h4><span>&mdash;&mdash;</span></div>
                <div className='about3-s'><h3>our service chefs</h3></div>
            </div>
            <div className='about3-content'>
                <div className='content-details'>
                    <div className='details-img'>
                        <img src={gomez} alt=''></img>
                    </div>
                    <div className='details-heads'>
                        <h4>gomez hendason</h4>
                        <h5>vegies expert</h5>
                    </div>
                    <div className='details-blocks'>
                        <div className='blocks'></div>
                        <div className='blocks'></div>
                        <div className='blocks'></div>
                    </div>
                </div>
                <div className='content-details'>
                    <div className='details-img'>
                        <img src={cotton} alt=''></img>
                    </div>
                    <div className='details-heads'>
                        <h4>cottonbro maria</h4>
                        <h5>burger expert</h5>
                    </div>
                    <div className='details-blocks'>
                        <div className='blocks'></div>
                        <div className='blocks'></div>
                        <div className='blocks'></div>
                    </div>
                </div>
                <div className='content-details'>
                    <div className='details-img'>
                        <img src={kampus} alt=''></img>
                    </div>
                    <div className='details-heads'>
                        <h4>kampus origin</h4>
                        <h5>meal chief</h5>
                    </div>
                    <div className='details-blocks'>
                        <div className='blocks'></div>
                        <div className='blocks'></div>
                        <div className='blocks'></div>
                    </div>
                </div>
                <div className='content-details'>
                    <div className='details-img'>
                        <img src={andrea} alt=''></img>
                    </div>
                    <div className='details-heads'>
                        <h4>andrea camel</h4>
                        <h5>desert expert</h5>
                    </div>
                    <div className='details-blocks'>
                        <div className='blocks'></div>
                        <div className='blocks'></div>
                        <div className='blocks'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About3