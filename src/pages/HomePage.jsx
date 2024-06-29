import React from "react";
import Profile_Icon from '../image/Profile_Icon.png'

const HomePage = () => {
    return (
        <div className="HomePage m-0">
            <nav class="navbar navbar-expand-lg bg-body-tertiary ps-4 pe-4">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">FurniFlex</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        
                    </ul>
                    <span class="navbar-text" style={{fontSize: '0.9rem' ,fontWeight: ' 600'}}>
                        <div className="text-black">
                            <div className="profile-img-container">
                                <img
                                    src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png"
                                    className="rounded-circle img-fluid me-2"
                                    style={{height: '2rem', width: '2rem'}}
                                    alt="logo"
                                    height="100%"
                                    width="100%"
                                />
                                Md. Radiq
                            </div>
                        </div>
                    </span>
                    </div>
                </div>
                </nav>
        </div>
    );
}

export default HomePage;
