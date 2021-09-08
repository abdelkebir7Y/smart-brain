import './ImageLinkform.style.css';

const ImageLinkForm = ({onButtonSubmit , onInputChange}) => {
    return (
        <>
            <p className='f3 center' >This magic brain will detect faces in your pictures. Give it a try.</p>
            <div className='pa4 shadow-5 br-3 form center'>
                <input 
                    type='text' 
                    className='f4 w-70 pa2 center' 
                    onChange={onInputChange}
                />
                <button 
                    className='f4 w-30 grow link ph3 pv2 dib white bg-light-purple pointer' 
                    onClick={onButtonSubmit}
                >Detect</button>
            </div>
        </>
    );
}

export default ImageLinkForm;