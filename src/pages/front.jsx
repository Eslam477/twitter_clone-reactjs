import React from 'react';
import '../assets/sass/front.scss'

import Login_side from '../components/front/login_side';
function front() {
    return (
        <div className='container-fluid front'>
            <section className="row">
                <div className='col-7 wallpaper'>
                </div>
                <Login_side />
            </section>
        </div>
    );
}


export default front;