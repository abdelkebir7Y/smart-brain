const Navigation = ({onRouteChange , isSignedIn}) => {
    return (
        <nav style={{display :'flex' , justifyContent : 'flex-end'}}>
            {
                isSignedIn 
                ?   <p 
                        className='f3 link dim black underline pointer pa3'
                        onClick = {()=> {onRouteChange('signin')}}
                    >Sing Out</p>
                :   <>
                        <p 
                            className='f3 link dim black underline pointer pa3'
                            onClick = {()=> {onRouteChange('signin')}}
                        >Sing In</p>
                        <p 
                            className='f3 link dim black underline pointer pa3'
                            onClick = {()=> {onRouteChange('Register')}}
                        >Register</p>
                    </>
            }
            
        </nav>
    )
}

export default Navigation;