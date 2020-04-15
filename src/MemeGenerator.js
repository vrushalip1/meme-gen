import React from 'react';
//import Input from './input';

class MemeGenerator extends React.Component {
    constructor() {
        super()
        this.state ={
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg",
            allMemeImg:[]
        }
        this.handleChange = this.handleChange.bind(this)
        this.chooseRandom = this.chooseRandom.bind(this)
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const{memes} = response.data
                this.setState({
                    allMemeImg: memes
                })
            })
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    handleChange(event) {
        this.setState({
            [event.target.name] : event.target.value
        })
        console.log(event.target)
        console.log(this.state.allMemeImg)
    }

    chooseRandom() {
        let length = this.state.allMemeImg.length
        let arrayIndex = this.getRandomInt(length - 1)
        console.log("array length", length)
        console.log("Index", arrayIndex)
        this.setState({
            randomImage: this.state.allMemeImg[arrayIndex].url
        })
    }
    render() {
        return(
            <div>
                <div className="meme-form">
                    <input
                        name="topText"
                        placeholder="Enter top text"
                        value={this.state.topText}
                        onChange={this.handleChange}
                    />
                    <input
                        name="bottomText"
                        placeholder="Enter bottom text"
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                    />
                    <button onClick={this.chooseRandom}>Create Meme</button>

                </div>
                <div className="meme">
                    <img src={this.state.randomImage} alt=""/>
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator;