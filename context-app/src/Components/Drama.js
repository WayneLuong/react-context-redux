import React, { Component } from "react";
import { DramaConsumer } from '../DramaContext'
import Delete from './actions/Delete'

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
                            <h1>Dramas</h1>
                            {dramas.map(drama => (
                                <div key={drama.id}>
                                    Title: {drama.title}
                                    {/* <Delete recordToDelete={drama} /> */}
                                </div>
                            ))}
                        </div>
                    );
                }}
            </DramaConsumer>
        );
    }
}

export default Drama