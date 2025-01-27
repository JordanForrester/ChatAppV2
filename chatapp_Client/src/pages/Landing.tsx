import Searchbar from '../components/searchbar/Searchbar.tsx';
import Account from '../components/account/Account.tsx';
 
export default function Landing(){

    return(<>
    <nav className="uk-navbar-container uk-position-top uk-navbar" >
    <div className="uk-navbar-left">
        <a href="" className="uk-navbar-item uk-logo"></a>
        <ul className="uk-navbar-nav"></ul>
        <div className="uk-navbar-item uk-button uk-button-large">Home</div>
        <div className="uk-navbar-item uk-button uk-button-large">Friends</div>
        <div className="uk-navbar-item uk-button uk-button-large">Shop</div>
        <div className="uk-navbar-item  uk-position-center"><Searchbar/></div>
        <div className="uk-navbar-item uk-position-center-right uk-position-large uk-margin-xlarge-right">
            <Account/>
        </div>
        
    </div>
    </nav>
    </>);
}