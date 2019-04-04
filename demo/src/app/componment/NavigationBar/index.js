import React from 'react'

class NavigationBar extends React.Component {
    render() {
        let childrenArr = React.Children.toArray(this.props.children) 
        return (
            <div style={{display: 'inline-flex'}}>
                <div>
                    <div>{childrenArr[0]}</div>
                </div>
                <div>{childrenArr[1]}</div>
                <div>
                    <div>{childrenArr[2]}</div>
                </div>
            </div>
        )
    }
}

export default NavigationBar