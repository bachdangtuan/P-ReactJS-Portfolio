import React, { Component } from 'react';
import '../../CSS/footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container text-center banner-content mb-0">
                    <span style={
                        { fontSize: '16px',
                        fontWeight: 'bold',
                        letterSpacing:'1px'
                     }}
                    
                    
                    >💚Creater by Bach Dang Tuan💚</span>
                </div>

            </div>

        );
    }
}

export default Footer;