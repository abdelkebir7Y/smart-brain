const Rank = ({user}) => {
    return (
        <div className='tc'>
            <div className='white f3'>
                {user.name}. your rank is ...
            </div>
            <div className='white f1'>
                #{user.entries}
            </div>
       </div>
    );
}

export default Rank;