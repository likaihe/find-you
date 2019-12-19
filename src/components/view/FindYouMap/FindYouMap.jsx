import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import {API_KEY} from '../../../locatResources';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class FindYouMap extends Component {
    static defaultProps = {
        myLocation: {
            lat: 59.955413,
            lng: 30.337844
        },
        uLocation: {
            lat: 59.955422,
            lng: 30.127844
        },
        zoom: 11
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '50vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: API_KEY }}
                    defaultCenter={this.props.myLocation}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent
                        lat={this.props.myLocation.lat}
                        lng={this.props.myLocation.lng}
                        text="My location"
                    />
                    <AnyReactComponent
                        lat={this.props.uLocation.lat}
                        lng={this.props.uLocation.lng}
                        text="U location"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default FindYouMap;