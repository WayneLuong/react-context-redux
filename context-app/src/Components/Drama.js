import React, { Component } from "react";
import { DramaConsumer } from '../DramaContext'

class Drama extends Component {
    render() {

        const handleData = (dramas) => {
            console.log('dramas: ', dramas)
        }

        return (
            <DramaConsumer>
                {value => {
                    const { dramas } = value;
                    return (
                        <div onLoad={handleData(dramas)} style={{ border: '#000 solid' }}>
                            title: {dramas[0].title}
                        </div>
                    );
                }}
            </DramaConsumer>
        );
    }
}

export default Drama