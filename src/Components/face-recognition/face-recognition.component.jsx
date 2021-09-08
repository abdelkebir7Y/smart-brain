import './face-recognition.style.css';

const FaceRecognition = ({ imageUrl , clarifiaApiRegions }) => {
    return (
        <div className='center image'>
            <img src={imageUrl} alt='' />
            {
                clarifiaApiRegions ?
                clarifiaApiRegions.map( ({id , region_info } ) => {
                    const {bounding_box} = region_info;
                    const {bottom_row, right_col ,left_col ,top_row} = bounding_box;
                    const bottom = (1 - bottom_row) * 100;
                    const right = (1 - right_col) * 100;
                    const top = top_row *100;
                    const left = left_col *100;
                    return <div key={id} className='face-box' style={{top : `${top}%`, bottom : `${bottom}%` , left : `${left}%` , right : `${right}%`}} />
                })
                : ''
            }
        </div>
    );
}

export default FaceRecognition;