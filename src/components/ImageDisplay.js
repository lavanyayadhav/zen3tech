import React from 'react'
import '../App.css';
import { connect } from 'react-redux'
import Lightbox from 'react-image-lightbox';
import { imagesList } from '../actions/imagesLists'

class imageDisplay extends React.Component {
    state = {
        isOpen: false,
        activeImg: '',
        data: this.props.pic && this.props.pic.pics,
        dataClone: this.props.pic && this.props.pic.pics,
    }
    componentDidMount() {
        this.props.dispatch(imagesList())
    }

    handleImage = (img) => {
        this.setState({ isOpen: true, activeImg: img })
    }

    handleClose = () => {
        this.setState({ isOpen: false, activeImg: '' })
    }

    filterMostLikedPost = () => {
        const posts = [...this.state.dataClone];
        let mostLikedPost = posts[0];
        posts.forEach(item => {
            if (item.likes > mostLikedPost.likes) {
                mostLikedPost = item
            }
        });
        this.setState({ data: [mostLikedPost] })
    }

    clear = () => {
        this.setState({ data: this.state.dataClone })
    }

    render() {
        return (
            <>
                <p onClick={() => this.filterMostLikedPost()}>Most likes</p>
                <p onClick={() => this.clear()}>Clear</p>
                <div className="cards">
                    {this.state.data && this.state.data.map(ele => {
                        return (
                            <div className="card" >
                                <img src={ele.url} alt="Avatar" width="210px" style={{ cursor: 'pointer' }} onClick={() => this.handleImage(ele.url)} />
                                <div >
                                    <p style={{ float: 'left' }}>
                                        {ele.likes}
                                    </p>
                                    <p style={{ float: 'right' }}>
                                        {ele.category}
                                    </p>
                                </div>
                                <div style={{ clear: 'both' }}>
                                    <input placeholder="Type here" />
                                    <button>Post</button>
                                </div>
                                <div style={{ clear: 'both' }}>
                                    {ele.comments.map(comment => {
                                        return (
                                            <ul>
                                                <li>{comment}</li>
                                            </ul>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
                {this.state.isOpen && (
                    <Lightbox
                        mainSrc={this.state.activeImg}
                        onCloseRequest={() => this.handleClose()}
                    />
                )}
            </>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        pic: state.pic
    }
}

export default connect(mapStateToProps)(imageDisplay)
