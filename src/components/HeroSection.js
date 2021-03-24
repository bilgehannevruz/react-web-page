import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';

function HeroSection() {
    return (
        <div className="hero-container">
            <video src="https://img-9gag-fun.9cache.com/photo/a5ERmQN_460svav1.mp4" autoPlay loop muted />
            <h1>Title</h1>
            <p>Explanation!</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">GET STARTED!</Button>
                <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">Watch!</Button>
            </div>
        </div>
    )
}

export default HeroSection
