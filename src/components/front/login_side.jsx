import React from 'react';
import logo from '../../assets/img/twitter_logo.svg'
function login_side() {
    return (
        <div className='col-5 login_side'>
            <nav>
                <img src={logo} />
            </nav>
            <section className='head'>
                <h1>
                    يحدث الآن
                </h1>
                <p>
                    بادر بالانضمام إلى تويتر اليوم.
                </p>
            </section>
            <section className='login_buttons'>
                <button type="button" disabled aria-label="Close">Google</button>
                <button type="button" disabled aria-label="Close">Apple</button>
                <span>
                    <hr />
                    <span>
                        أو
                    </span>
                </span>

            </section>
        </div>
    );
}

export default login_side;