import profileLogo from './assets/annimage.png'
import shareButton from './assets/share-button.png'
import shareIcon from './assets/share-icon.png'
import slackIcon from './assets/slack.png'
import githubIcon from './assets/github.png'

import I4G from './assets/I4G.png'
import "./Tree.css";

const Tree = ( ) => {
    return (
        <div className="hng-tree">
            <div className='body'>
                <div className="main">
                    <div>
                        <img src={profileLogo} alt="profile image" id="profile__img" width="88px" height="88px"/>
                    </div>
                    <div className="share_button">
                        <picture>
                            <source media="(max-width: 400px)" srcset={shareIcon}/>
                            <img src={shareButton} alt="share button avatar"/>
                        </picture>
                    </div>
                </div>

                <div id="twitter">Sexy_Programmer</div>
                <div id="slack">Annie_Dev</div>

                <a href="https://twitter.com/crayfish_bae" id="twitter__link" target="_blank" rel="noreferrer nooppener">Twitter Link</a>
                <a href="https://training.zuri.team/" id="btn__zuri" target="_blank" rel="noreferrer nooppener">Zuri Team</a>
                <a href="https://books.zuri.team/" id="books" target="_blank" rel="noreferrer nooppener" title="Find your coding and design books here">Zuri Books</a>
                <a href="https://books.zuri.team/python-for-beginners?ref_id=Annie_Dev" id="book__python" target="_blank" rel="noreferrer nooppener">Python Books</a>
                <a href="https://background.zuri.team/" id="pitch" target="_blank" rel="noreferrer nooppener" title="Linking you with world class developers">Background Check for Coders</a>
                <a href="https://books.zuri.team/design-rules" id="book__design" target="_blank" rel="noreferrer nooppener" title='Learn design from zero to hero for free'>Design Books</a>
                <div className='social__section'>
                    <div><img src={slackIcon} alt="slack logo"/></div>
                    <a href='https://github.com/Annmary23'><img src={githubIcon} alt=" github logo"/></a>
                </div>
                <footer>        
                    <div className='Logo-zuri'>
                        <h2>
                            Zuri 
                            <span></span>
                                Internship
                        </h2>
                    </div>
                    <div className='Text-zuri'>
                        <p>HNG Internship 9 Frontend Task</p>
                    </div>
                    <div className='Logo-i4g'> 
                    <img src={I4G} alt="I4G logo" width="100px"/>
                    </div>  
                </footer>
            </div>
        </div>
    )
}

export default Tree;
