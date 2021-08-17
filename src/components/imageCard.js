import React from 'react';

class ImageCard extends React.Component {
    constructor (props) {
        super(props);
        this.imageRef = React.createRef();
        this.state = {spans: 0};
    }
    componentDidMount() {
        //如果不等待图片load的话 下面输出的图片高度就会为0
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        // console.log(this.imageRef.current.height);
        const height = this.imageRef.current.clientHeight;

        const spans = Math.ceil(height / 10);
        this.setState({ spans });
    }
    render() {
        const { description, urls } = this.props.image;
        return (
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img ref={this.imageRef} alt={description} src={urls.regular} />
            </div>   
        );
    }
}

export default ImageCard;