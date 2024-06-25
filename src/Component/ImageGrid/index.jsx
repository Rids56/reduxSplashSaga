import React, { useEffect, useState } from 'react'
import './style.css';
import { connect } from 'react-redux';
import { loadImages } from '../../actions';
import Stats from '../Stats';

const ImageGrid = (props) => {
    // // part 1 & 2 start
    // const key = '5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02';
    // const [state, setState] = useState({
    //     images: [],
    // });

    // useEffect(() => {
    //     fetch(`https://api.unsplash.com/photos/?client_id=${key}&per_page=28`)
    //         .then(res => res.json())
    //         .then(images => {
    //             setState({ images })
    //         })
    // }, [])
    // // part 1 & 2 end

    useEffect(() => props.loadImages, [])

    const { images, error, isLoading, loadImages, imageStats } = props;
    const finalImg = images?.flat();
    return (
        <div className='content'>
            <div className='grid'>
                {/* {state.images?.map((image) => ( */}
                {finalImg?.map((image) => (
                    <div
                        key={image.id}
                        className={`item item-${Math.ceil(
                            image.height / image.width,
                        )}`}
                    >
                        <Stats stats={imageStats[image.id]} />

                        <img
                            src={image.urls.small}
                            alt={image.user.username}
                        />

                    </div>
                ))}
            </div>
            {error && (<div className='error'>
                {error}
            </div>)}
            <button
                className='button'
                onClick={!isLoading && loadImages}
                disabled={isLoading}
            >{isLoading ? 'Loading...' : 'More Images'}</button>
        </div>
    )
}

const mapStateToProps = ({ isLoading, images, error, imageStats }) => ({
    isLoading,
    images,
    error,
    imageStats,
});

const mapDispatchToProps = dispatch => ({
    loadImages: () => dispatch(loadImages()),
});

export default connect(
    mapStateToProps,
    // null
    mapDispatchToProps,
)(ImageGrid);