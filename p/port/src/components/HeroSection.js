import heroImg from "../images/heropicture.png"

function HeroSection() {
    return (
        <div className="heroSection">
            <div className="heroPictureContainer">
                <img src={heroImg}></img>
            </div>
            <div className="heroTextContainer"></div>
        </div>
    )
}

export default HeroSection