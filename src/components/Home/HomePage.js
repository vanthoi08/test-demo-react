import videoHomepage from '../../assets/video-homepage.mp4';
import { useSelector } from 'react-redux';

const HomePage = (props) => {

    const isAuthenticated = useSelector(state => state.user.isAuthenticated);
    const account = useSelector(state => state.user.account);
    console.log('account: ', account, 'isAuthenticated', isAuthenticated);
    return (
        <div className="homepage-container">
            <video autoPlay muted loop >
                <source
                    src={videoHomepage}
                    type="video/mp4" />
            </video>
            <div className='homepage-content'>
                <div className='title-1'>There's a better way to ask</div>
                <div className='title-2'>Get more data—like signups, feedback, and anything else—with forms.
                    designed to be refreshingly different.
                    Impress your form takers.
                </div>
                <div>
                    <button className='title-3'>Get's started. It's free</button>
                </div>

            </div>
        </div>
    )

}
export default HomePage;